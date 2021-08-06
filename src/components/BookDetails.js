import { React, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Document} from 'react-pdf'
import axios from 'axios'
import './Book.css'
const baseURL = 'http://localhost:3001/api/books/'

const BookDetails = ({match}) => {
    const [ book, setBook ] = useState(false)
    const [ favourite, setFavourite ] = useState(false)
    const [ read, setRead ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    let ratingColor = 'bg-yellow-100'
    useEffect(()=>{
        axios.get(baseURL+match.params.id)
        .then((res)=>{
            setBook(res.data)})
        .then((res) => {    
            console.log(book) 
            setLoading(false)     
            if(book[0].isFavourite===1) {
              setFavourite(true)
            } else {
              setFavourite(false)
            }
            if(book[0].isRead===1) {
              setRead(true)
            } else {
              setRead(false)
            }
        })
        .catch((err)=>{
         console.log("Error has occured "+err)
        })
    }, [])
    if (book) {
        if (book.rating > 4) {
            ratingColor = 'bg-yellow-400'
        } else if (book.rating > 3.5) {
            ratingColor = 'bg-yellow-200'
        }
    }
    const handleClick = (where) => {
      let updateURL = ""
      if (where==='favourite') {
        updateURL = baseURL+'update/?isFavourite='+!favourite+'&isRead='+read+'&id='+book[0].id
      } else if (where==='read') {
        updateURL = baseURL+'update/?isFavourite='+favourite+'&isRead='+!read+'&id='+book[0].id
      }
      axios.post(updateURL)
        .then((res)=>{  
          alert(res.data)
        })
    }
    return (
    <div className="p-10 bg-gray-60 h-screen">
    {!loading ? 
    <div className="m-auto">
      <div className="grid grid-cols-3 grid-rows-7 grid-flow-row rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="col-span-1 row-span-6">
        <div className="p-2 absolute float-right">
                <div className="p-1 flex rounded-md border-2 bg-opacity-40 bg-white border-gray-800 hover:border-bookGreen-800">
                <Link to="/books/">
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-20 text-gray-800 hover:text-bookGreen-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
</svg>
                </Link>
                </div>
              </div>
          
              <a rel="noopener noreferrer" href={book[0].pdf_url} target="_blank">
              <div className="pt-2 absolute float-left readme">
                <div className="p-1 flex rounded-md border-2 bg-opacity-40 bg-white border-gray-800 hover:border-bookGreen-800 m-2">
                      <button class="text-2xl p-2" >Read Me </button>            
                </div>
              </div>
              </a>
            <img src={book[0].cover_url} alt={book[0].title} className="rounded object-cover h-200 w-full " />
        </div>
        <div className="col-span-2 row-span-1">
            <div className="p-2  flex justify-end">
            <div className={`p-1 md:p-3 flex rounded-md ${ratingColor} `}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-12 md:w-12 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <p className="text-2xl md:text-5xl pr-10 ">{book[0].rating}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1">
          <header className="flex items-center justify-between leading-tight p-2 md:p-5">
              <p className="text-2xl md:text-5xl text-black px-10">
                {book[0].title}
              </p>
          </header>
        </div>
        <div className="col-span-2 row-span-1">
            <div className="p-2 md:pt-5 pr-5 flex flex-col text-right">
              <p className="text-sm md:text-xl text-indigo-800 pr-10">Realease date:</p>
              <p className="text-grey text-sm md:text-xl pr-10">{book[0].year}</p>
            </div>
        </div>
        <div className="col-span-2 row-span-1">
            <div className="p-2 md:px-5 pt-5 flex flex-col">
              <p className="text-md md:text-xl uppercase text-indigo-800 pb-5 pl-5">Description:</p>
              <p className="text-2xl md:text-xl cardComponent p-10 bg-bookGreen rounded-lg text-bookWhite shadow-lg">{book[0].description}</p>
            </div>
        </div>
        <div className="col-span-2 row-span-1">
          <ul className="flex flex-row pl-2 text-gray-600">
              <li className="py-1">
                <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
                  <a className="text-2xl pb-5 pl-5" href={`/Search?genre=${book[0].name}`}>
                    #{book[0].genre}
                  </a>
                </div>
              </li>
          </ul>
              </div>
              <div className="col-span-2 row-span-1 flex justify-center"> 
              <button
          onClick={()=>{handleClick('favourite')}}
          className="flex items-center max-w-sm w-full focus:outline-none text-xl uppercase font-bold rounded-lg mx-auto p-5">
          <div className="flex sm:flex-cols-12 gap-6 items-center">
            <div className="col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill={favourite ? 'currentColor' : 'none'}
                viewBox="0 0 24 24"
                stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="col-span-2">Favourite</div>
          </div>
        </button> 
         <button onClick={()=>{handleClick('read')}} className="hover:bg-white-900 text-bookRed font-bold py-2 px-4 pb-6 rounded-full  text-2xl">
                I've Read it</button>
         
                </div>  
      </div>
    </div> 
    : null }
  </div>)
}


  export default BookDetails
