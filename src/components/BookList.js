import axios from 'axios'
import Book from './Book'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const baseURL = 'http://localhost:3001/api/books'

const BookList=({isFavourite, isRead})=>{
    const [ bookList, setBookList ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    useEffect(()=>{
        axios.get(baseURL)
        .then((res)=>{
            let data = []
            if (isFavourite) {
                data = res.data.filter(book => book.isFavourite)
            } else if (isRead) {
                data = res.data.filter(book => book.isRead)
            } else {
                data = res.data
            }
            setBookList(data)
            setLoading(false)    
        })
        .catch((err)=>{
         console.log("Error has occured "+err)
        })
    })
    return(
        <div className="flex justify-around flex-wrap">
            {loading ? 'Loading ...' : bookList.map( (book,i) => <Book key={i} book={book}/>)}
        </div>
    )
}
export default BookList;
