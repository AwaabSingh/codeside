<script>
// @ts-nocheck

import axios from "axios";
import { useLoc } from "../store/loc";

import { onMount } from "svelte";
import { getWish } from '../store/wishStore'
import CourseCard from '$lib/CourseCard.svelte'



    
    onMount(async () => {

        await useLoc
       
        const config = {
    headers: {
        'user-token': ` ${$useLoc.detail.access_token}`
    }
}

       const { data } = await axios.get('https://aqueous-beyond-13704.herokuapp.com/getwish', config)
    //    console.log(data.detail)
       $getWish = data.detail
       

    })

   
</script>

<main class=' md:m-12'>
    {#if $useLoc.detail.wishlist.length === 0}
    <div class='text-center  py-6  mx-40'>
       <h3 class='text-lgblue my-10'> You wish list is empty </h3>
       <a class='bg-drblue px-3 py-3 shadow rounded-lg text-white hover:bg-lgblue m-3 mb-5' href="/">Browse courses now</a>
       
    </div>
   {:else}
    <div class='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-3 px-16'>
     
    {#each $getWish as wish}
    <div class="max-w-sm font-Nunito relative">
        <div class="bg-drlue   shadow-lg hover:shadow-xl transition duration-500 rounded-lg ">
          <a href='/#' >
            <img class="rounded-t-lg" src='inst.jpeg' alt="" />
           
           
          </a>
          <div class="pt-3 px-10 rounded-lg bg-white">
            <h6 class="text-gray-700 font-bold md:text-2xl text-md  hover:text-gray-900 hover:cursor-pointer">{wish.title}</h6>
            <p class="text-gray-700 tracking-wide mb-3 line-clamp-3">{wish.description}</p>
          </div>
    
        <div class='flex justify-around items-center text-gray-400 m-3'>
            <section class='flex justify-between '>
              <i class='bx bx-paperclip icon hidden md:block' ></i>
              <p class='text-sm md:text-md'> 6 lesson</p>
            </section>
             <section class='flex justify-between'>
              <i class='bx bx-time icon hidden md:block'></i>
              <p>3h 56m</p>
            </section>
             <section class='flex justify-between'>
              <i class='bx bx-bar-chart-alt icon hidden md:block'></i>
              <p>Beginner</p>
            </section>
        </div>
        <hr>
        <div class='flex justify-between my-3 pb'>
            <div class='px-3'>Tutor</div>
            <div class='px-3'>${wish.price}</div>
        </div>
        <!-- <div class='bg-drblue text-center  py-2 rounded text-white'>
          <button on:click={delCart}>Delete Wish</button>
       </div> -->
        
          
          
        
           <!-- <div class="absolute top-2 left-2 py-2 px-4 bg-drblue text-white rounded-lg">
             <span class="text-md">Bestseller</span>
           </div>  -->
        
        </div>
      
      </div> 
    {/each}
   
</div>
{/if}
</main>