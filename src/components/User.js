import { useState } from 'react'
import BookList from './BookList'


const User = () => {
    const [userName, setUserName] = useState('Leonardo')
    const [avatar, setAvatar] = useState('/images/avatar1.jpg')

    return (
        <div className="pt-10 px-5 md:px-10 lg:px-20 bg-gray-100 h-screen">
        <div id="profile" className="w-full rounded-lg shadow-2xl bg-white opacity-75">
		<div className="p-4 md:p-12 text-center bg-bookWhite">
			<div className="block rounded-full bg-pink-200 shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{backgroundImage: `url(${avatar})` }}>
            </div>
			<h1 className="text-3xl font-bold pt-8">{userName}</h1>
			<div className="mx-auto w-4/5 pt-3 border-b-2 border-bookGreen-500 opacity-25"></div>
        </div>
        <div className="p-2 bg-bookRed">
          <div>
            <p className="p-4 text-base font-bold flex items-center justify-start text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 fill-current text-indigo-700 pr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg> My Favourite Books : </p>
            <div>
              <BookList isFavourite={true}/>
            </div>
        </div>
        <div>
			<p className="p-4 text-base font-bold flex items-center justify-start text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 fill-current text-indigo-700 pr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg> Books that I have read : </p>
<div>
              <BookList isRead={true}/>
            </div>
      </div>
			<div className="pt-8 pb-8 text-center">
				<button className=" bg-bookGreen hover:bg-white-900 text-black font-bold py-2 px-4 rounded-full">
				  Edit
				</button> 
			</div>
		</div>
        </div>
    </div>
    )
}

export default User