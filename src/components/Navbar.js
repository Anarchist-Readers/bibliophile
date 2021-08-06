import './Navbar.css';
import { Search } from 'react-feather';
import { Link } from 'react-router-dom'
import React, {useState} from 'react'

const Navbar = () => {
	const [activeHandler, setActiveHandler] = useState(1);
	const [searchValue, setSearchValue]=useState('');
   return (
<nav class="bg-transparent">
				<div class="flex justify-between">
					<div class="flex space-x-9 pl-4">
						<div>
							<Link to="/">
								<img src="/images/logo.png" alt="Logo" class=""/>
							</Link>
						</div>
					</div>
            <div class="hidden md:flex items-center">
               <div class="navbar-base">
                  <div class="relative inline-flex flex-row justify-end space-x-12 bg-bookRed p-2 rounded-l-xl px-20 pr-48">
				    <Link to='/' onClick={(event)=>setActiveHandler(1)} class={activeHandler == 1 ? "menu-active py-4 px-2 text-white font-semibold text-lg" : "py-4 px-2 text-white font-semibold text-lg"}>Home</Link>
					<Link to='/books' onClick={(event)=>setActiveHandler(2)} class={activeHandler == 2 ? "menu-active py-4 px-2 text-white font-semibold hover:text-white transition duration-300 text-lg" : "py-4 px-2 text-white font-semibold hover:text-white transition duration-300 text-lg"}>Categories</Link>
                    <Link to='/books' onClick={(event)=>setActiveHandler(3)} class={activeHandler == 3 ? "menu-active py-4 px-2 text-white font-semibold transition duration-300 text-lg" : "py-4 px-2 text-white font-semibold transition duration-300 text-lg"}>Authors</Link>
                    <div class="pt-2 relative mx-auto text-gray-600">
                        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"  onChange={(event) => setSearchValue(event.target.value)}
                           type="search" name="search" placeholder="Search by title"/>
                        <button type="submit" onClick={<Search seatchValue={searchValue} />} class="absolute right-0 top-0 mr-2 mt-4">
                           <Search size={24}/>
                        </button>
                     </div>
						</div>
						
						<div class="avatar-wrapper relative ">
							<Link to ='/user' >
                     <div class="avatar inline-block">
                        <img class="inline-block object-cover w-20 h-20 rounded-full" src="/images/avatar1.jpg" alt="Profileimage"/>
                        <span class="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
							</div>
							</Link>
                     </div>
					</div>
               </div>
  
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
			</div>
			<div class="hidden mobile-menu">
				<ul class="">
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><Link to='/books' class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Categories</Link></li>
					<li><Link to='/books' class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</Link></li>
					<li><Link to='/books' class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</Link></li>
				</ul>
			</div>
   </nav>
   )

}
export default Navbar;