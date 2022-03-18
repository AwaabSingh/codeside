<script>
         import Header from '$lib/Dashboard/Header.svelte'
    import Sidebar from '$lib/Dashboard/Sidebar.svelte'
</script>

<div class="">
      <Header/>
      <section class="flex">
              <Sidebar/>
             
                <div class='md:m-8'>
                    <h1 class=" text-drblue text-bold text-2xl">The world's largest selection of courses</h1>
                    <p class="text-lgblue text-md">Choose from 130,000 online video courses with new additions published every month</p>
                   <div class="mt-5">
                        <ul class='flex items-center md:border-b-2 border-gray-200'>
                             <li class='px-3 hover:text-lgblue hover:border-b-2 hover:border-drblue'>Python</li>
                             <li class='px-3 hover:text-lgblue hover:border-b-2 hover:border-drblue'></li>
                             <li class='px-3 hover:text-lgblue hover:border-b-2 hover:border-drblue'>JavaScript</li>
                             <li class='px-3 hover:text-lgblue hover:border-b-2 hover:border-drblue'>Softwares</li>
                             <li class='px-3 hover:text-lgblue hover:border-b-2 hover:border-drblue'>Drawing</li>
                        </ul>
                   </div>
                   <div class='mt-2 grid grid-cols-1 md:grid-cols-2 md:gap-4 max-w-80 md:mx-16'>
                    <div class=" rounded overflow-hidden shadow-lg mt-10">
                        <img class="w-auto" src="/inst.jpeg" alt="Sunset in the mountains">
                        <div class="px-4 py-4">
                            <div class="font-bold text-xl mb-2">The Lorem</div>
                          <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                          </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#programming</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Web</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
                          </div>
                      </div>

                      <div class="rounded overflow-hidden shadow-lg mt-10">
                        <img class="w-full" src="/inst.jpeg" alt="Sunset in the mountains">
                        <div class="px-4 py-4">
                            <div class="font-bold text-xl mb-2">The Lorem</div>
                          <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                          </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#programming</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Web</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
                          </div>
                      </div>
                </div> 
                 
               <div>
                <div class="md:mx-16 mt-20 mb-8">
                    <h3 class='font-bold text-drblue text-2xl'>Categories</h3>
                    <p class='mt-3 text-lgblue text-lg'>Find a topic by browsing top categories.</p>
                </div>
                <div class='grid gap-2 md:grid-cols-3 md:mx-16 mt-15 mb-20'> 
                   
                    <a href="/test" class="rounded-md overflow-hidden relative w-full lg:h-48 h-40">
                        <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                        </div>
                        <img src="/inst.jpeg" class="absolute w-full h-full object-cover" alt="">
                        <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Design </div>
                    </a>
                    <a href="/test" class="rounded-md overflow-hidden relative w-full lg:h-48 h-40">
                        <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                        </div>
                        <img src="/inst.jpeg" class="absolute w-full h-full object-cover" alt="">
                        <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Design </div>
                    </a>
                    <a href="/test" class="rounded-md overflow-hidden relative w-full lg:h-48 h-40">
                        <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                        </div>
                        <img src="/inst.jpeg" class="absolute w-full h-full object-cover" alt="">
                        <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Design </div>
                    </a>
                    <a href="/test" class="rounded-md overflow-hidden relative w-full lg:h-48 h-40">
                        <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                        </div>
                        <img src="/inst.jpeg" class="absolute w-full h-full object-cover" alt="">
                        <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Design </div>
                    </a>
                    <a href="/test" class="rounded-md overflow-hidden relative w-full lg:h-48 h-40">
                        <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                        </div>
                        <img src="/inst.jpeg" class="absolute w-full h-full object-cover" alt="">
                        <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Design </div>
                    </a>
                    <a href="/test" class="rounded-md overflow-hidden relative w-full lg:h-48 h-40">
                        <div class="absolute w-full h-3/4 -bottom-12 bg-gradient-to-b from-transparent to-gray-800 z-10">
                        </div>
                        <img src="/inst.jpeg" class="absolute w-full h-full object-cover" alt="">
                        <div class="absolute bottom-0 w-full p-3 text-white z-20 font-semibold text-lg"> Design </div>
                    </a>
               </div>
               </div>
      </section>
     
</div>