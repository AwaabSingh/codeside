
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

<div class="carousel-item">
  <a  href={`/course/${course.publickKey}`}>
  <img class="carousel-item__img" src="/inst.jpeg" alt={course.title}>
  </a>
  <!-- <div class="panel1">
    <a href="#" class="fa-regular fa-heart"></a>
  </div> -->
  <div class="panel2">
    <a href="#/" class="fa-regular fa-heart"></a>
  </div>
  <div class="info">
    <h3 class='mt-5 font-bold text-drblue text-2xl font-Nunito'>{course.title}</h3>
    <p class='mx-3 line-clamp-2 py-3 font-Nunito mb-2'>{course.description}</p>
    <div class="stars">
      <span class='text-lgblue font-bold px-1'>4.5</span>
      <i class="fas fa-star "></i> 
      <i class="fas fa-star "></i> 
      <i class="fas fa-star "></i> 
      <i class="fas fa-star "></i> 
     
    </div>
    <strong class="price text-drblue"><span class="mrp"># {course.price}</span></strong>
  </div>
</div>
<!-- <div class="max-w-sm font-Nunito">
   <div class=''>
    <div class="bg-drlue relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg ">
      <a href={`/course/${course.publickKey}`} >
        <img class="rounded-t-lg" src='/inst.jpeg' alt="" />
        <!-- <span on:click={cosId=course.publickKey}></span> -->
       
      <!-- </a>
      
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
    </div> -->      
      
      <!-- <div class='flex justify-between'>
          <div class=" py-3  text-lgblue px-5  mx-3 mb-3">author</div>
      <div class=" py-3 rounded-xl text-white px-5 bg-drblue mx-3 mb-3">
           <a href="/cart">Add to Cart</a>
      </div>
      </div> -->
      <!-- <div class="absolute top-2 left-2 py-2 px-4 bg-drblue text-white rounded-lg">
         <span class="text-md">Bestseller</span>
       </div> -->
      <!-- <div class="absolute top-2 right-2 py-1 px-3 bg-white rounded-lg" on:click={handleAddCart}>
        <span class="text-md">
          <i class='bx bx-heart'></i>
        </span>
      </div> -->
    <!-- </div>
    </div>
  </div>  -->

  <style>
    /* .icon {
      color: #6363A3;
      font-size:20px;
      padding: 0 5px;
    } */

    .carousel-item
{
	background-color: #fff;
	width: 250px;
	height: auto;
	border-radius: 20px;
	overflow: hidden;
	margin-right: 30px;
	display: inline-block;
	cursor: pointer;
	transition: 450ms all;
	transform-origin: center left;
	position: relative;
	box-shadow: 0 5px 5px 0 rgba(0,0,0,0.26);
}
.carousel-item .panel1
{
	position: absolute;
	top: 0;
	right: -50%;
	width: 45px;
	background-color: transparent;
	display: flex;
	align-items: center;
	flex-flow: column;
	opacity: 1;
}
.carousel-item:hover .panel1
{
	right: 0;
	opacity: 1;
	transition: 0.4s;
}
.carousel-item .panel1 a
{
	font-size: 20px;
	color: #B31B1B;
	margin: 15px 0;
}
.carousel-item .panel1 a:hover
{
	color: rgba(255,0,0,0.9);
}

.carousel-item .panel2
{
	position: absolute;
	bottom: 40%;
	right: 0px;
	width: 50px;
	display: flex;
	align-items: center;
	flex-flow: column;
	border-radius: 30px;
	background: #fff;
	box-shadow: 0 10px 10px 0 ;
	border-radius: 200px 0px 200px 200px;
	-moz-border-radius: 200px 0px 200px 200px;
	-webkit-border-radius: 200px 0px 200px 200px;
	border:0px solid #fff;
}
.carousel-item .panel2 a
{
	font-size: 20px;
	color: #d01c1c;
	margin: 15px 0;
}
.carousel-item .info
{
	text-align: center;
	line-height: 20px;
	margin-top: -10px;
	font-family: 'Amita', cursive;
	margin-bottom: 10px;
}
.carousel-item .info h3
{
	/* color: #333; */
	/* padding-top: 5px;
	cursor: pointer;
	font-family: 'Roboto Slab',serif;
	letter-spacing: 1px;
	font-size: 14px; */
}

.carousel-item .info .stars
{
	margin-top: -20px;
}

.carousel-item .info .stars i
{
	color: #F1A51F;
	padding: 10px 0;
}
.carousel-item .info .price
{
	font-size: 16px;
	/* color: #fd5c63; */
	letter-spacing: 0.5px;
}

 .carousel-item
{
	transform: translate3d(20px,0,0);
}

 .carousel-item:hover
{
	transform: scale(1.09);
	opacity: 1;
}

.carousel-item__img
{
	width: 100%;
	height: 210px;
	object-fit: cover;
	border-radius: 10px;
	box-shadow: 0 0.5px 0.5px 0 rgba(0,0,0,0.26);
}

  </style>