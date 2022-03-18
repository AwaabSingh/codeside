<script context='module'>
       export async function load({ fetch }) {
         const res =await fetch(
             `https://aqueous-beyond-13704.herokuapp.com/allcourse`
         );

         const data = await res.json()

        //  console.log(data);
         if(res.ok) {
             return {
                 props: {
                     courses: data.detail,
                 }
             }
         }
        }
</script>

<script>
    export let courses;
   
</script>

{#each courses as course}
   <main class=' md:mx-20 mx-5' >
        <header class='bg-white  h-60 rounded-b-xl  shadow-lg border-2 border-drblue border-t-0'>
             <h1 class='text-center text-lgblue py-10 text-2xl md:text-5xl font-bold font-Nunito'>{course.title}</h1>
             <!-- <p class="text-lgblue text-center text-xl md:text-2xl">{course.description}</p> -->
             <div class='flex mx-8 my-5 text-white font-Nunito'>
               <div class='flex'>
                <p class='px-3 py-1 text-sm text-white bg-drblue rounded font-bold mx-5'>4.0</p>
                <div class='flex justify-between'>
                    <p class='text-lgblue px-2'>*</p>
                    <p class='text-lgblue px-2'>*</p>
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
        </header>
        <section class='md:flex md:justify-between  py-10'>
             <div>
                <nav class='flex list-none my-5 mx-3 md:px-28 justify-between bg-white shadow py-3 px-5 border border-lgblue rounded-xl font-Nunito'>
                    <li class=' hover:text-drblue '>
                      <a href="" class='md:px-5'>Overview</a>
                    </li>
                    <li class=' hover:text-drblue'>
                      <a href="" class='md:px-5'>Curriculum</a>
                 </li>
                 <li class=' hover:text-drblue'>
                  <a href="" class="md:px-5">FAQ</a>
             </li>
             <li class=' hover:text-drblue'>
              <a href="" class="md:px-5">Announcement</a>
         </li>
         <li class=' hover:text-drblue'>
          <a href="" class="md:px-5">Reviews</a>
     </li>
               </nav>
           <!-- desc -->
             <div class='my-5 mx-3 border py-10 rounded-xl font-Nunito mb-20 border-lgblue'>
                  <div class='my-s'>
                      <h3 class='px-10 pt-3 pb-1 font-bold text-2xl text-drblue'>Description</h3>
                      <p class='px-5 pb-3'>{course.description}</p>
                  </div>
                  <div class='my-3'>
                      <h2 class='px-8 text-drblue pb-3 font-bold text-2xl font-Nunito'>What You'll Learn</h2>
                       <ul class='mx-8'>
                          <li class='flex'>
                              <i class='px-3'>x</i>
                              Setting up the environment
                          </li>
                          <li class='flex '>
                              <i class='px-3'>x</i>
                              Learn Python Basics
                          </li>
                          <li class='flex'>
                              <i class='px-3'>x</i>
                              Do 
                          </li>
                          <li class='flex'>
                              <i class='px-3'>x</i>
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
             </div>
  
             </div>
             <!-- second container for md, lg, xl screens -->
             <div>
                <div class=' bg-white border mt-10 mb- rounded-xl font-Nunito border-lgblue'>
                    <div class='flex justify-between m-12 md:m-5 text-center'> 
                        <div class='md:px-8'>
                            <h1 class='font-bold text-3xl md:text-4xl font-Nunito'>3.2</h1>
                            <p class='text-md'>Hours</p>
                        </div>
                        <div class='md:px-8'>
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
                 <div class='py-5 px-5 text-center  bg-drblue mt-3 rounded-xl text-white hover:bg-lgblue'>
                    <a href="/cart"  >
                        Enroll Now
                    </a>
                 </div>
             </div>
        
                   
                 
          
        </section>
        <!-- <section class='flex m-12 justify-between md:flex-row'>
          <div>
              
              <nav class='flex justify-between items-center bg-white px-5 py-5 border border-lgblue rounded-xl list-none'>
                  <li class='px-5 font-Nunito text-drblue hover:text-lgblue'>
                      <a href="">Overview</a>
                  </li>
                  <li class='px-5 font-Nunito text-drblue hover:text-lgblue'>
                     <a href="">Curriculum</a>
                  </li>
                  <li class='px-5 font-Nunito text-drblue hover:text-lgblue'>
                      <a href="" class="">FAQ</a>
                  </li>
                  <li class='px-5 font-Nunito text-drblue hover:text-lgblue'>
                    <a href="" class="">Announcement</a>
                </li>
                <li class='px-5 font-Nunito text-drblue hover:text-lgblue'>
                    <a href="" class="">Reviews</a>
                </li>
              </nav>
          </div>
          <div>X</div>
        </section> -->
   </main>
{/each}