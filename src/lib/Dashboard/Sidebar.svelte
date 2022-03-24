<script>
   import { onMount } from 'svelte';
    import { useLoc } from '../../store/loc'
    import axios from 'axios'

    onMount(async () => {
       await useLoc

      
       
    })

   
</script>   

 <aside class="w-64 hidden lg:block h-auto " aria-label="Sidebar">
  <div class=" py-8 px-5 bg-drblue  rounded overflow:scroll">
      <div class='my-5 text-white bg-lgblue px-5 py-5 rounded-xl font-Nunito'>
         <h3 class='uppercase font-bold'>{$useLoc.detail.user.fullname}</h3>
          <h6>{$useLoc.detail.user.email}</h6>
      </div>
     <ul class="space-y-5">
        <li>
           <a href="/Sdashboard" class="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-lgblue ">
             
              <i class="fa-solid fa-compass text-gray-300 "></i>
              <span class="ml-3">Dashboard</span>
           </a>
        </li>
        <li>
          <a href="/Sdashboard/courses" class="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-lgblue ">
         
            <i class="fa-solid fa-graduation-cap text-gray-300 transition duration-75"></i>
              <span class="flex-1 ml-3 whitespace-nowrap">My Courses</span>
              <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
           </a>
        </li>
        <li>
           <a href="/Sdashboard" class="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-lgblue ">
            <i class="fa-solid fa-compass text-gray-300 "></i>
              <span class="flex-1 ml-3 whitespace-nowrap">Message</span>
              <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
           </a>
        </li>
        <li>
         <a href="/Sdashboard/billing" class="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-lgblue ">
          <i class="fa-solid fa-compass text-gray-300 "></i>
            <span class="flex-1 ml-3 whitespace-nowrap">Billing</span>
         </a>
      </li>
        <li>
           <a href="/Sdashboard/profile" class="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-lgblue ">
            <i class="fa-solid fa-compass text-gray-300 "></i>
              <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
           </a>
        </li>
        <li>
         <a href="/whislist" class="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-lgblue ">
          <i class="fa-solid fa-compass text-gray-300 "></i>
            <span class="flex-1 ml-3 whitespace-nowrap">Wishlist</span>
         </a>
      </li>
        <li>
           <a href="/text" class="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-lgblue ">
            <i class="fa-solid fa-compass text-gray-300 "></i>
              <span class="flex-1 ml-3 whitespace-nowrap">Teach on CodeSide</span>
           </a>
        </li>
      
     </ul>
 
     <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <li>
           <a href="/Sdashboard/manageProfile"  class="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-lgblue ">
             <i class="fa-solid fa-compass text-gray-300 "></i>
              <span class="ml-4">Manage Profile</span>
           </a>
        </li>
      
        <li>
           <a href="/text" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
              <span class="ml-3">Logout</span>
           </a>
        </li>
        <li>
          <a href="/text"  class="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-lgblue ">
              <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
              <span class="ml-3">Payment</span>
           </a>
        </li>
     
      <li>
        <a href="/text"  class="flex items-center p-2 text-base font-normal text-white rounded-lg  hover:bg-lgblue ">
         <i class="fa-solid fa-compass text-gray-300 "></i>
            <span class="ml-3">Terms</span>
         </a>
      </li>
     </ul>
  </div>
</aside>