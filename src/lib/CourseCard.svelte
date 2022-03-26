
<script>
import { onMount } from 'svelte';
import { useLoc } from '../store/loc'
// import axios from 'axios'
import { addCart } from '../store/cartStore'

  export let course;

 

onMount(async () => {
   await useLoc
    // console.log($useLoc.detail.access_token)

    // get courses by  coursePk
    // const { data } = await axios.get(`getcousebyid?coursePk=${coursePk}`)
    
})

// const API_URL = 'https://aqueous-beyond-13704.herokuapp.com'
// src={`${API_URL}/static/${course.banner}`}

// export let cosId;
// console.log(cosId)

</script>

<div class="max-w-sm font-Nunito">
   <div class=''>
    <div class="bg-drlue relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg ">
      <a href={`/course/${course.publickKey}`} >
        <img class="rounded-t-lg" src='/inst.jpeg' alt="" />
        <!-- <span on:click={cosId=course.publickKey}></span> -->
       
      </a>
      
      <div class="pt-3 px-10 rounded-lg bg-white">
        <h6 class="text-gray-700 font-bold md:text-2xl text-md  hover:text-gray-900 hover:cursor-pointer">{course.title}</h6>
        <p class="text-gray-700 tracking-wide mb-3 line-clamp-3">{course.description}</p>
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
    <div class='flex justify-between m-5 pb-3'>
        <div class='px-3'>Tutor</div>
        <div class='px-3'>${course.price}</div>
    </div>
      
      
      <!-- <div class='flex justify-between'>
          <div class=" py-3  text-lgblue px-5  mx-3 mb-3">author</div>
      <div class=" py-3 rounded-xl text-white px-5 bg-drblue mx-3 mb-3">
           <a href="/cart">Add to Cart</a>
      </div>
      </div> -->
      <div class="absolute top-2 left-2 py-2 px-4 bg-drblue text-white rounded-lg">
         <span class="text-md">Bestseller</span>
       </div>
      <!-- <div class="absolute top-2 right-2 py-1 px-3 bg-white rounded-lg" on:click={handleAddCart}>
        <span class="text-md">
          <i class='bx bx-heart'></i>
        </span>
      </div> -->
    </div>
    </div>
  </div> 

  <style>
    .icon {
      /* color: #6363A3; */
      font-size:20px;
      padding: 0 5px;
    }
  </style>