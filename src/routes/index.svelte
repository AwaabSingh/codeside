<script context='module'>
    export async function load({ fetch }) {
         const res =await fetch(
             `https://aqueous-beyond-13704.herokuapp.com/allcourse`
         );
      
         const Catres =await fetch(
             `https://aqueous-beyond-13704.herokuapp.com/getcategories`
         );
        
         const data = await res.json()
         const catData = await Catres.json()

        //  console.log(data);
         if(res.ok) {
             return {
                 props: {
                     courses: data.detail,
                     categories: catData.detail
                 }
             }
         }
    }
</script>


<script>
 import CourseCard from '$lib/CourseCard.svelte'
 import { Splide, SplideSlide } from '@splidejs/svelte-splide';
 import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export let courses;
export let categories;

</script>


<main class='h-auto'>
   
    <header>

  
      <div class="w-full bg-cover bg-center " style="height:32rem; background-image: url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);">
          <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50 ">
              <div class="text-center">
                  <!-- <h1 class="text-white text-2xl  uppercase md:text-5xl font-bold">Code Side <span class=" text-lgblue">Academy</span></h1> -->
                   <h1 class="text-white text-2xl  uppercase md:text-5xl font-bold mb-2 font-Nunito"> 
                       Tech Made Easy With
                       <br>
                       <span class='text-xl md:text-4xl text-lgblue underline'> Code side Academy </span>
                   </h1>
                   <p class='text-white py-5 font-bold'>More Than 6.500 Online Courses </p>
                    <div>

                    </div>
              </div>
          </div>
      </div>
  </header>
     
 
   <section class='md:m-12'> 
          <div class='text-center py-5 font-Nunito text-drblue'>
            <h1 class='font-bold text-2xl'>Our Most Popular Courses</h1>
            <p class='text-md'> Choose from 183,000 online video courses with new additions published every month</p>
    
          </div>
          
        <div class='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-3 px-16'>
           
            {#each courses as course}    
            <CourseCard {course}/>
            {/each}
       
    </div>     

  </section>

  <section>
    <div class=' my-16  font-Nunito'>
        <div class="w-full bg-cover bg-center mb-5" style="height:20rem; background-image: url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudCUyMHdpdGglMjBsYXB0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60);">
          <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50 ">
              <div class="text-center">
                  <h1 class="text-white uppercase md:text-3xl font-bold">Find the right path for you to learn</h1>
                  <p class='text-center text-white'>Match your goals to our program,explore your options and  map out your path to success</p> <br/>
                  <a href="/" class='py-5 mt-10 px-8 bg-transparent text-white hover:bg-drblue border border-drblue rounded-xl font-bold'>Get Started Now</a>
              </div>
             
          </div>
      </div>
        
      </div>
  </section>

  <section class='md:m-12'>
    <div class='container flex justify-between items-center '>
        <div class=''>
             <h3 class='text-xl md:text-5xl font-bold font-Nunito text-drblue py-3 text-center'>Online learning solution that meet your needs.</h3>
             <p class='text-lgblue px-5 py-3 text-center font-Nunito'>Use the list below to bring attention to your product's key  differentiator</p>
              <section class='flex flex-col mx-3'>
                   <div class='md:px-12 py-3 flex justify-between items-center'>
                    <i class='bx bxl-microsoft-teams  mx-3 icon bg-csyellow py-5 px-5'></i> 
                    <!-- <i class='bx bxl-microsoft-teams my-5  icon bg-green-300  mx-3 px-5 py-5 '></i> -->
                    <div class="">
                        <h3 class='text-bold  text-drblue font-bold font-Nunito md:text-xl text-lg'>Leadership Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Vero facilis maiores a  cumque obcaecati sapiente sunt aliquid.</p>

               </div> 
                   </div>
                 
                   <div class='md:px-12 py-3 flex justify-between items-center'>
                    <i class='bx bxl-microsoft-teams  mx-3 icon bg-csyellow py-5 px-5'></i> 
                    <!-- <i class='bx bxl-microsoft-teams my-5  icon bg-green-300  mx-3 px-5 py-5 '></i> -->
                    <div class="">
                        <h3 class='text-bold  text-drblue font-bold font-Nunito md:text-xl text-lg'>Digitial Transformation</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Vero facilis maiores a  cumque obcaecati sapiente sunt aliquid.</p>

               </div> 
                   </div>
                   <div class='md:px-12 py-3  flex justify-between items-center'>
                    <i class='bx bxl-microsoft-teams mx-3 icon bg-csyellow py-5 px-5'></i> 
                    <!-- <i class='bx bxl-microsoft-teams my-5  icon bg-green-300  mx-3 px-5 py-5 '></i> -->
                    <div class="">
                        <h3 class='text-bold  text-drblue font-bold font-Nunito md:text-xl text-lg'>Leadership Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Vero facilis maiores a  cumque obcaecati sapiente sunt aliquid.</p>

               </div> 
                   </div>
                  
              </section>
        </div>
        <div class='m-12 hidden lg:block'>
            <img src="/inst.jpeg" class='py-40 rounded-xl' alt="">
        </div>
   </div>
  </section>
       <!-- Top Categories -->
   <section>
        
     <div class='md:m-12 m-5 font-Nunito'>
        <h4 class='text-center my-8 px-8 font-bold text-3xl py-8 text-lgblue'>Top Categories</h4>
       
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-3">
       {#each categories as category}
       <a href="/test" class="rounded-md overflow-hidden relative w-full lg:h-48 h-40">
          <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
          </div>
          <img src="/inst.jpeg" class="absolute w-full h-full object-cover" alt="">
          <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg hover:text-lgblue"> {category.name} </div>
      </a>
       {/each}
      
    
     <div/>
   </section>

       <section class="md:my-20 mx-5 mt-20 md:px-20">
        <div class='flex justify-between flex-col md:flex-row'>
            <div class=''>
                <img src="/inst.jpeg" class="w rounded-xl" alt="">
            </div>
            <div class='md:mx-20 md:my-10'>
                <h3 class="md:text-3xl text-xl font-Nunito font-bold px-3 py-3 text-drblue"> Become an Instructor</h3>
               <p class='text-sm '>Join millons of people from around the world learning together.online learing is as easy and natural as chatting</p>
               <div class='flex items-center text-center my-14 md:mx-20 mx-12'>
                <a href ="/" class='py-5 px-8 bg-transparent text-sm md:text-2xl text-drblue hover:bg-drblue border hover:text-white border-drblue rounded-xl font-bold'>Apply Now</a>
            </div>
            </div>
       </div>
      </section>

      <section class="md:my-20 mx-5 mt-20 md:px-20">
        <div class='flex justify-between flex-col md:flex-row'>
            <div class=''>
                <img src="/inst.jpeg" class="w rounded-xl" alt="">
            </div>
            <div class='md:mx-20 md:my-10'>
                <h3 class="md:text-3xl text-xl font-Nunito font-bold px-3 py-3 text-drblue"> Become a Student</h3>
               <p class='text-sm '>Join millons of people from around the world learning together.online learing is as easy and natural as chatting</p>
                <div class='flex items-center text-center my-14 md:mx-20 mx-12'>
                    <a href ="/" class='py-5 px-8 bg-transparent text-sm md:text-2xl text-drblue hover:bg-drblue border hover:text-white border-drblue rounded-xl font-bold'>Apply Now</a>
                </div>
            </div>
       </div>
      </section>

       
  
</main>

<style>
  .icon{
    font-size: 30px;
     color: #6363A3;
     border-radius: 50%;
  }
  
</style>