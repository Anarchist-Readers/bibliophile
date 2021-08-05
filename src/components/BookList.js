import axios from 'axios'
import Book from './Book'
import { useState, useEffect } from 'react'

const baseURL = 'http://localhost:3001/api/books'

const BookList=()=>{
    const [ bookList, setBookList ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    useEffect(()=>{
        axios.get(baseURL)
        .then((res)=>{
            setBookList(res.data)
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
