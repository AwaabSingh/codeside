<script>
import { onMount } from "svelte";
import { page } from "$app/stores";
import axios from "axios"
import { useLoc } from '../../store/loc'
import { goto } from "$app/navigation";


export let pk =   $page.params.publickKey
let courseDetail = {}
let cartData = {}
let wishData = {}

   



    onMount(async () => {
        await useLoc
      
        const response = await axios.get(`https://aqueous-beyond-13704.herokuapp.com/getcousebyid/${pk}`)
        courseDetail = response.data.detail
    })
  
    const addCart = async () => {
      try {
        const config = {
            headers:  {
            'user-token': ` ${$useLoc.detail.access_token}`,
             'content-type': 'application/json'
                              }}
        cartData.courseKey = pk;

         const response = await axios.post('https://aqueous-beyond-13704.herokuapp.com/addcart', cartData, config)
         if(response.data.status_code === 201){
             goto('/cart')
         } else {
             alert('Something went wrong')
         }
        
      } catch (error) {
        console.log(error)
        
      }
        
     }

     const addWish = async () => {
      try {
        const config = {
            headers:  {
            'user-token': ` ${$useLoc.detail.access_token}`,
             'content-type': 'application/x-www-form-urlencoded',
                              }}
        wishData.courseKey = pk;

         const response = await axios.post('https://aqueous-beyond-13704.herokuapp.com/addwishlist', wishData, config)
         console.log(response)
        //  if(response.data.status_code === 201){
        //      goto('/cart')
        //  } else {
        //      alert('Something went wrong')
        //  }
        
      } catch (error) {
        console.log(error)
        
      }
        
     }

     
    

</script>




<main class=' md:px-20 px-5 bg-gray-200' >
    <!-- <header class='bg-white  h-60 rounded-b-xl  shadow-lg border-2 border-drblue border-t-0'>
         <h1 class='text-center text-lgblue py-10 text-2xl md:text-5xl font-bold font-Nunito'>{courseDetail.title}</h1>
        z
         <div class='flex mx-8 my-5 text-white font-Nunito'>
           <div class='flex'>
            <p class='px-3 py-1 text-sm text-white bg-drblue rounded font-bold mx-5'>4.0</p>
            <div class='flex justify-between'>
                <p class='text-lgblue px-2'>*</p>
                 <p class='text-lgblue px-2'>*</p>
            </div>
           </div>
            <p class='px-5 text-sm text-lgblue'>1200 Enrolled</p>
        </div>
          <div class='flex mx-5 my-5 text-white font-Nunito'>
              <p class='md:px-5 text-sm text-lgblue'>Created by Cyber Hero</p>
              <p class='px-5 text-sm text-lgblue'>. Last updated  1/2022</p>
          </div>
    </header> -->
    <div class="bg-drblue md:rounded-b-lg md:h-72  md:pb-8 md:pt-12 p-8 relative overflow-hidden">

        <div class="lg:w-9/12 relative z-10">

            <div class="uppercase text-gray-200 mb-2 font-semibold text-sm">Web develpment</div>
            <h1 class="lg:leading-10 lg:text-3xl text-white text-2xl leading-8 font-semibold">{courseDetail.title}</h1>
            <p class="lg:text-lg hidden"> {courseDetail.description}</p>
            <ul class="flex text-gray-200 gap-4 mt-4 mb-2">
                <li class="flex items-center">
                    <span class="avg bg-csyellow mr-2 px-2 rounded text-white font-semiold"> 4.9 </span>
                    <div class="star-rating text-csyellow">
                        <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon> <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                        <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon> <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                        <ion-icon name="star-half" role="img" class="md hydrated" aria-label="star half"></ion-icon>
                    </div>
                </li>
                <li> <ion-icon name="people-circle-outline" role="img" class="md hydrated" aria-label="people circle outline"></ion-icon> 1200 Enrolled </li>
            </ul>
            <ul class="lg:flex items-center text-gray-200">
                <li> Created by <a href="#/" class="text-white fond-bold hover:underline hover:text-white"> Cyber Hero </a> </li>
                <li> <span class="lg:block hidden mx-3 text-2xl">·</span> </li>
                <li> Last updated 10/2019</li>
            </ul>

        </div>

        <img src="/cos_de.png" alt="" class="-bottom-1/2 absolute right-0 hidden lg:block">

    </div>
    <section class='md:flex md:justify-between  py-10'>
         <div>
            <nav class='flex text-sm md:text-md list-none md:my-5 md:mx-3 md:px-28 justify-between bg-white py-3 px-3  rounded-xl font-Nunito'>
                <li class=' hover:text-drblue '>
                  <a href="/#" class='md:px-5 pr-2'>Overview</a>
                </li>
                <li class=' hover:text-drblue'>
                  <a href="/#" class='md:px-5 pr-2'>Curriculum</a>
             </li>
             <li class=' hover:text-drblue'>
              <a href="/#" class="md:px-5 pr-2">FAQ</a>
         </li>
         <li class=' hover:text-drblue'>
          <a href="/#" class="md:px-5 pr-2">Announcement</a>
     </li>
     <li class=' hover:text-drblue'>
      <a href="/#" class="md:px-5 pr-2">Reviews</a>
 </li>
           </nav>
       <!-- desc -->
         <div class='my-5 mx-3  py-10 rounded-xl font-Nunito mb-20 bg-white'>
              <div class='my-s'>
                  <h3 class='px-10 pt-3 pb-3 font-bold text-2xl text-drblue'>Description</h3>
                  <p class='px-3 mx-10 py-3'>{courseDetail.description}</p>
              </div>
              <div class='my-3'>
                  <h2 class='px-8 text-drblue pb-3 font-bold text-2xl font-Nunito'>What You'll Learn</h2>
                   <ul class='mx-8'>
                      <li class='flex'>
                        <ion-icon name="checkmark" class='px-3 text-2xl text-lgblue'></ion-icon>
                          Setting up the environment
                      </li>
                      <li class='flex '>
                          <ion-icon name="checkmark" class='px-3 text-2xl text-lgblue'></ion-icon>
                          Learn Python Basics
                      </li>
                      <li class='flex'>
                          <ion-icon name="checkmark" class='px-3 text-2xl text-lgblue'></ion-icon>
                          Do 
                      </li>
                      <li class='flex'>
                          <ion-icon name="checkmark" class='px-3 text-2xl text-lgblue'></ion-icon>
                          test
                      </li>
                   </ul>
              </div>
             
              <div>
                <h2 class='px-8 text-drblue pb-3 font-bold text-2xl font-Nunito'>Requirements</h2>
                 <div class='mx-8'>
                    <li class='flex'>
                        Any computer will work: Windows, macOS or Linux
                    </li>
                    <li class='flex '>
                        An a zeal to learn
                    </li>
                   
                 </div>
            </div>
            <!-- course corriculum -->
            <div class='my-s'>
                <h3 class='px-10 pt-3 pb-3 font-bold text-2xl text-drblue'>Course Curriculum</h3>
                <div>
                    
                  
                </div>
                
            </div>
         </div>

         </div>
         <!-- second container for md, lg, xl screens -->
         <div>
            <div class=' bg-white  mt-10 mb-5 rounded-xl font-Nunito border-lgblue'>
                <div class='flex justify-between m-12 md:m-5 text-center'> 
                    <div class='md:px-8 pt-5'>
                        <h1 class='font-bold text-3xl md:text-4xl font-Nunito'>3.2</h1>
                        <p class='text-md'>Hours</p>
                    </div>
                    <div class='md:px-8 pt-5'>
                        <h1 class='font-bold text-3xl md:text-4xl font-Nunito pl-5'>12,140</h1>
                        <p class='text-md pl-5 text-center'>Student</p>
                    </div>
               </div>
               <hr/>
               <!-- 1 -->
               <div class='px-3 py-4'>
                <li class='list-none px-3' >
                 <i class='bx bx-play-circle px-3'></i>
                 3 hours on-demand video
                </li>   
               </div>
               <hr/>
               <!-- 2 -->
               <div class='px-3 py-4'>
                <li class='list-none px-3' >
                 <i class='bx bx-play-circle px-3'></i>
                 Full lifetime access
                </li>  
               </div>
               <hr/>
               <!-- 3 -->
               <div class='px-3 py-4'>
                <li class='list-none px-3' >
                 <i class='bx bx-play-circle px-3'></i>
                 42 downloadable resources
                </li>
               </div>
               <hr/>

               <!-- 4 -->
               <div class='px-3 py-4'>
                <li class='list-none px-3' >
                 <i class='bx bx-play-circle px-3'></i>
                 Assignments
                </li>
                  
               </div>
               <hr/>
               <!-- 5 -->
               <div class='px-3 py-4'>
                <li class='list-none px-3' >
                 <i class='bx bx-play-circle px-3'></i>
                 Certificate of Completion
                </li>
               </div> 
                 
             </div>
            
              {#if !$useLoc.detail.access_token}
             <div  class='py-3 px-4  text-center  bg-drblue mt-3 rounded-xl text-white hover:bg-lgblue'>
                <a href='/login'>
                    You need to be logged in
                </a>
                
             </div> 
             {:else}
             <div  class='py-2 px-2  text-center  bg-drblue mt-3 rounded-xl text-white hover:bg-lgblue'>
                <button on:click={addCart} >
                    Add To Cart
                </button>
             </div>
             <div  class='py-2 px-2  text-center  bg-drblue mt-3 rounded-xl text-white hover:bg-lgblue'>
                <button on:click={addWish} >
                    Add To Wish list
                </button>
             </div>
             {/if}
             <!-- <div class='py-3 px-4 text-center  bg-drblue mt-3 rounded-xl text-white hover:bg-lgblue'>
                <a href="/cart"  >
                    Enroll Now
                </a>
             </div> -->
                
           
         </div>
    
               
             
      
    </section>
   
</main>