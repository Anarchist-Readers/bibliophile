import './Navbar.css';
import { Search } from 'react-feather';

const Navbar = () => {
   return (
<nav class="bg-transparent">
				<div class="flex justify-between">
					<div class="flex space-x-9 pl-4">
						<div>
							<a href="#" class="flex">
								<img src="images/logo.png" alt="Logo" class=""/>
							</a>
						</div>
					</div>
            <div class="hidden md:flex items-center">
               <div class="navbar-base">
                  <div class="relative inline-flex flex-row justify-end space-x-12 bg-bookRed p-2 rounded-l-xl px-20 pr-48">
							<a class="menu-active py-4 px-2 text-white font-semibold text-lg">Home</a>
							<a class="py-4 px-2 text-white font-semibold hover:text-white transition duration-300 text-lg">Categories</a>
                     <a class="py-4 px-2 text-white font-semibold hover:text-white transition duration-300 text-lg">About</a>
                     <div class="pt-2 relative mx-auto text-gray-600">
                        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                           type="search" name="search" placeholder="Search"/>
                        <button type="submit" class="absolute right-0 top-0 mr-2 mt-4">
                           <Search size={24}/>
                        </button>
                     </div>
                  </div>
                  <div class="avatar-wrapper relative ">
                     <div class="avatar inline-block">
                        <img class="inline-block object-cover w-20 h-20 rounded-full" src="images/avatar1.jpg" alt="Profile image"/>
                        <span class="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                        </div>
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
					<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Categories</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
   </nav>
   )

}
export default Navbar;