const Footer = () => {
   
   return (
      <div class="bg-bookWhite">
<footer class="footer bg-white relative pt-1 border-b-2 border-blue-700">
    <div class="container mx-auto px-6">

        <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              
                <div class="flex flex-col max-w-3xl">
                        <img   src="/images/footerimage.jpg" alt="img"/>
                     </div>
                     <div class="flex flex-col justify-center pl-10 text-3xl text-bookGreen border-bookRed-50">
                        <h1>Reading is the greatest Adventure one could experience.. So Keep Reading !!</h1>
                     </div>
                {/* <div class="flex flex-col justify-center">
             
                    <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">Home</a></span>
                    <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">Categories</a></span>
                    <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">User Profile</a></span>
                </div> */}
            </div>
        </div>
    </div>
    <div class=" bg-bookRed ">
        <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
                <p class="text-md text-blue-700 font-bold mb-2">
                    © 1600 by Anarchist Readers

                </p>
            </div>
        </div>
    </div>
</footer>

      </div>
   )
}
export default Footer