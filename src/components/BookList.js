import axios from 'axios'
import { useState, useEffect } from 'react'

const baseURL = 'http://openlibrary.org/search.json?'

const BookList=()=>{
    const [ bookList, setBookList ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    useEffect(()=>{
        axios.get(baseURL+'subject=medicine')
        .then((res)=>{
            const selectedBooks = res.data.docs.filter(book=>book.first_publish_year<1700)
            setBookList(selectedBooks)
            setLoading(false)    
        })
        .catch((err)=>{
         console.log("Error has occured")
        })
    })
    return(
        <div>
            {loading ? 'Loading ...' : bookList.docs.map(book=>{
                return (
                <>
                    <p className="p-5">{book.title}</p>
                    <img className="p-5 rounded" src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} />
                </>)}
                )}
        </div>
    )
}
export default BookList;
