import { React, useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:3001/api/books/'

const BookDetails = ({match}) => {
    console.log(match)
    const [ book, setBook ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    let ratingColor = 'bg-yellow-100'
    useEffect(()=>{
        axios.get(baseURL+match.params.id)
        .then((res)=>{
            setBook(res.data)
            setLoading(false)    
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
    return (
    <div className="p-5">
    {!loading ? 
    <div className="m-auto">
      <div className="grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div className="col-span-1 row-span-6">
          
          {/* <a href={`/books/${book[0].id}`}> */}
            <img src={book[0].cover_url} alt={book[0].title} className="rounded object-cover h-250 w-full" />
          {/* </a> */}
        </div>
        <div className="col-span-2 row-span-1">
            <div className="p-2  flex justify-end">
            <div className={`p-1 flex rounded-md ${ratingColor}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              <p>{book[0].rating}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1">
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <a className="no-underline hover:underline text-black" href={`/Book/${book[0].id}`}>
                {book[0].title}
              </a>
            </h1>
          </header>
        </div>
        <div className="col-span-2 row-span-1">
            <div className="p-2 flex flex-col text-right">
              <p className="text-sm">Realease date:</p>
              <p className="text-grey text-sm">{book[0].year}</p>
            </div>
        </div>
        <div className="col-span-2 row-span-1">
          <ul className="flex flex-row pl-2 text-gray-600">
              <li className="py-1">
                <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
                  <a className="" href={`/Search?genre=${book[0].name}`}>
                    #{book[0].genre}
                  </a>
                </div>
              </li>
          </ul>
        </div>
      </div>
    </div> 
    <div>
        
    </div>
    : null }
  </div>)
}


  export default BookDetails