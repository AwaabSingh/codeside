<script>
         import Header from '$lib/Dashboard/Header.svelte'
    import Sidebar from '$lib/Dashboard/Sidebar.svelte'
</script>

<div class="">
      <Header/>
      <section class="flex">
              <Sidebar/>
              <div class="container ml-3 mr-8 my-3 md:m-12 font-Nunito">

                <div class="border-b items-end justify-between mb-6 md:mb-10 sm:flex">
                    <div class="flex-1 md:mb-0 mb-3">
                        <div class="text-3xl font-semibold  md:mb-3 text-drblue"> Courses </div>
                        <nav class="cd-secondary-nav md:m-0 nav-small">
                            <ul class='flex text-lgblue'>
                                <li class="active  hover:border-drblue"><a href="/test" class="lg:px-2"> Progress </a></li>
                                <li><a href="/test" class="lg:px-3"> Completed </a></li> 
                            </ul>
                        </nav> 
                    </div>
                    <div class="flex items-center mb-4 space-x-3">
                        <div class="bg-gray-100 border inline-flex p-0.5 rounded-md text-lg fliter-tab" uk-switcher="connect: #course-tabs; animation: uk-animation-fade">
                            <a href="/test" class="py-1.5 px-2.5 rounded-md" data-tippy-placement="top" data-tippy="" data-original-title="Grid view"> 
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-expanded="false"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> 
                            </a>
                            <a href="/test" class="py-1.5 px-2.5 rounded-md uk-active" data-tippy-placement="top" data-tippy="" data-original-title="List view"> 
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-expanded="true"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            </a>
                            
                        </div>
                        <div class="bg-white  flex items-center overflow-hidden relative rounded-lg">
                          <div class="pt-2 relative mx-auto text-gray-600">
                            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                              type="search" name="search" placeholder="Search">
                            <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                              <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                                width="512px" height="512px">
                                <path
                                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                    </div>
                </div>

                <div class="uk-switcher" id="course-tabs" style="touch-action: pan-y pinch-zoom;">
                      
                    <!-- layout 1 -->
                    <div class="" style="">
                        
                        <div class="grid md:grid-cols-2 gap-6">

                            <!-- items 1 -->
                            <div class="bg-white shadow rounded-md">
        
                                <div class="flex relative">
                                    <a href="/test" class="md:w-36 overflow-hidden relative rounded-l-lg shadow-sm w-28">
                                        <img src="/inst.jpeg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                        <img src="/play-icon.png" class="w-12 h-12 uk-position-center" alt="">
                                    </a>
                                    <div class="flex-1 p-5">
                                        <a href="/test" class="font-semibold line-clamp-2 mb-2.5 md:text-base">    Learn C sharp for Beginners Crash Course  </a>
                                        <a href="/test" class="block md:font-medium"> Stella Johnson </a>
                                        <div class="flex items-center justify-between pt-2 space-x-4">
                                            <!-- progress -->
                                            <div class="flex-1 relative">
                                                <div class="mb-2 text-gray-400 text-sm"> 8/12 
                                                    <span class="ml-1">  Complete </span> 
                                                </div>
                                                <div class="relative bg-gray-200 rounded-md overflow-hidden w-full h-1.5"> <div class="h-full w-3/4 bg-blue-600"></div></div>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
        
                            </div>
                        
                            <!-- items 2 -->
                            <div class="bg-white shadow rounded-md">
        
                                <div class="flex relative">
                                  <a href="/test" class="md:w-36 overflow-hidden relative rounded-l-lg shadow-sm w-28">
                                    <img src="/inst.jpeg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                    <img src="/play-icon.png" class="w-12 h-12 uk-position-center" alt="">
                                </a>
                                    <div class="flex-1 p-5">
                                        <a href="/test" class="font-semibold line-clamp-2 mb-2.5 md:text-base"> Learn and Understand AngularJS to become a professional  developer </a>
                                        <a href="/test" class="block md:font-medium"> Martin Gray </a>
                                        <div class="flex items-center justify-between pt-2 space-x-4">
                                            <!-- progress -->
                                            <div class="flex-1 relative">
                                                <div class="mb-2 text-gray-400 text-sm"> 4/8 
                                                    <span class="ml-1">  Complete </span> 
                                                </div>
                                                <div class="relative bg-gray-200 rounded-md overflow-hidden w-full h-1.5"> <div class="h-full w-1/2 bg-blue-600"></div></div>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
        
                            </div>

                            <!-- items 3 -->
                            <div class="bg-white shadow rounded-md">
        
                                <div class="flex relative">
                                  <a href="/test" class="md:w-36 overflow-hidden relative rounded-l-lg shadow-sm w-28">
                                    <img src="/inst.jpeg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                    <img src="/play-icon.png" class="w-12 h-12 uk-position-center" alt="">
                                </a>
                                    <div class="flex-1 p-5">
                                        <a href="/test" class="font-semibold line-clamp-2 mb-2.5 md:text-base">Build Responsive Real World Websites</a>
                                        <a href="/test" class="block md:font-medium"> Jesse Stevens </a>
                                        <div class="flex items-center justify-between pt-2 space-x-4">
                                            <!-- progress -->
                                            <div class="flex-1 relative">
                                                <div class="mb-2 text-gray-400 text-sm"> 16/16 
                                                    <span class="ml-1">  Complete </span> 
                                                </div>
                                                <div class="relative bg-gray-200 rounded-md overflow-hidden w-full h-1.5"> <div class="h-full w-full bg-green-500"></div></div>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
        
                            </div>
                        
                            <!-- items 4 -->
                            <div class="bg-white shadow rounded-md">
        
                                <div class="flex relative">
                                  <a href="/test" class="md:w-36 overflow-hidden relative rounded-l-lg shadow-sm w-28">
                                    <img src="/inst.jpeg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                    <img src="/play-icon.png" class="w-12 h-12 uk-position-center" alt="">
                                </a>
                                    <div class="flex-1 p-5">
                                        <a href="/test" class="font-semibold line-clamp-2 mb-2.5 md:text-base"> Ultimate Web Developer Course </a>
                                        <a href="/test" class="block md:font-medium"> Jesse Stevens </a>
                                        <div class="flex items-center justify-between pt-2 space-x-4">
                                            <!-- progress -->
                                            <div class="flex-1 relative">
                                                <div class="mb-2 text-gray-400 text-sm"> 12/15
                                                    <span class="ml-1">  Complete </span> 
                                                </div>
                                                <div class="relative bg-gray-200 rounded-md overflow-hidden w-full h-1.5"> <div class="h-full w-5/6 bg-blue-600"></div></div>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
        
                            </div>

                            <!-- items 5 -->
                            <div class="bg-white shadow rounded-md">
        
                                <div class="flex relative">
                                  <a href="/test" class="md:w-36 overflow-hidden relative rounded-l-lg shadow-sm w-28">
                                    <img src="/inst.jpeg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                    <img src="/play-icon.png" class="w-12 h-12 uk-position-center" alt="">
                                </a>
                                    <div class="flex-1 p-5">
                                        <a href="/test" class="font-semibold line-clamp-2 mb-2.5 md:text-base">Learn Angular Fundamentals to Expert  developer </a>
                                        <a href="/test" class="block md:font-medium"> Martin Gray </a>
                                        <div class="flex items-center justify-between pt-2 space-x-4">
                                            <!-- progress -->
                                            <div class="flex-1 relative">
                                                <div class="mb-2 text-gray-400 text-sm"> 2/8 
                                                    <span class="ml-1">  Complete </span> 
                                                </div>
                                                <div class="relative bg-gray-200 rounded-md overflow-hidden w-full h-1.5"> <div class="h-full w-1/4 bg-blue-600"></div></div>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
        
                            </div>

                            <!-- items 6 -->
                            <div class="bg-white shadow rounded-md">
        
                                <div class="flex relative">
                                  <a href="/test" class="md:w-36 overflow-hidden relative rounded-l-lg shadow-sm w-28">
                                    <img src="/inst.jpeg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                    <img src="/play-icon.png" class="w-12 h-12 uk-position-center" alt="">
                                </a>
                                    <div class="flex-1 p-5">
                                        <a href="/test" class="font-semibold line-clamp-2 mb-2.5 md:text-base">    Learn C sharp for Beginners Crash Course  </a>
                                        <a href="/test" class="block md:font-medium"> Stella Johnson </a>
                                        <div class="flex items-center justify-between pt-2 space-x-4">
                                            <!-- progress -->
                                            <div class="flex-1 relative">
                                                <div class="mb-2 text-gray-400 text-sm"> 1/12 
                                                    <span class="ml-1">  Complete </span> 
                                                </div>
                                                <div class="relative bg-gray-200 rounded-md overflow-hidden w-full h-1.5"> <div class="h-full w-3/4 bg-blue-600"></div></div>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
        
                            </div>

                        </div>

                        <!-- Pagination -->
                        <!-- <div class="flex justify-center mt-9 space-x-2 text-base font-semibold text-gray-400 items-center">
                            <a href="#" class="py-1 px-3 bg-gray-200 rounded text-gray-600"> 1</a>
                            <a href="#" class="py-1 px-2 bg-gray-200 rounded"> 2</a>
                            <a href="#" class="py-1 px-2 bg-gray-200 rounded"> 3</a>
                            <ion-icon name="ellipsis-horizontal" class="text-lg -mb-4 md hydrated" role="img" aria-label="ellipsis horizontal"></ion-icon>
                            <a href="#" class="py-1 px-2 bg-gray-200 rounded"> 12</a>
                        </div>

                    </div> -->

                  
                
            </div>
            
      </section>
     
</div>