import axios from 'axios'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const baseURL = 'http://localhost:3001/api/books'

const SliderCard = ({id}) => {
   
   const [ sliderDetail, setSliderDetail ] = useState(false)
   const [ loading, setLoading ] = useState(true)
   useEffect(()=>{
       axios.get(baseURL+'/'+id)
          .then((res) => {
          console.log(res.data)
         setSliderDetail(res.data[0])
           setLoading(false)    
       })
       .catch((err)=>{
        console.log("Error has occured "+err)
       })
   },[])
   
   return (
   <div class="flex flex-col p-3 bg-bookWhite w-max rounded-xl">
        <Link to={`/books/${id}`}>
        <div class="relative">
            <img class="h-96 rounded-xl sliderCardImage" src={sliderDetail.cover_url} alt="bookimg" />
            <div class="absolute bottom-2 right-2 bg-bookRed p-1 px-2 rounded-xl text-white">
              { sliderDetail.genre}
            </div>
        </div>
        <div class="text-right pt-2">
          <h3 class="text-2xl text-gray-500">{sliderDetail.title}</h3>
          <p class="text-base">{sliderDetail.author}</p>
          </div>
          </Link>
      </div>
   )

}
export default SliderCard;
