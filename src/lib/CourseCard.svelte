
<script>
  export let course;

</script>

<div class="max-w-sm font-Nunito">
    <div class="bg-drlue relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg ">
      <a sveltekit:prefetch href='/' class="">
        <img class="rounded-t-lg" src='inst.jpeg' alt="" />
      </a>
      <div class="pt-3 px-10 rounded-lg bg-white">
        <h6 class="text-gray-700 font-bold text-2xl  hover:text-gray-900 hover:cursor-pointer">{course.title}</h6>
        <p class="text-gray-700 tracking-wide mb-3 line-clamp-3">{course.description}</p>
      </div>

    <div class='flex justify-around items-center text-gray-400 m-3'>
        <section class='flex justify-between '>
          <i class='bx bx-paperclip icon ' ></i>
          <p class='text-sm md:text-md'> 6 lesson</p>
        </section>
         <section class='flex justify-between'>
          <i class='bx bx-time icon'></i>
          <p>3h 56m</p>
        </section>
         <section class='flex justify-between'>
          <i class='bx bx-bar-chart-alt icon'></i>
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
      <!-- <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
        <span class="text-md">${course.price}</span>
      </div> -->
    </div>
  </div> 

  <style>
    .icon {
      color: gray;
      font-size: 20px;
      padding: 0 5px;
    }
  </style>