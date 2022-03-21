<script>
    import Header from '$lib/Dashboard/Header.svelte'
import Sidebar from '$lib/Dashboard/Sidebar.svelte'
 
import { onMount } from 'svelte';
    import { useLoc } from '../../store/loc'

    onMount(async () => {
       await useLoc
       
    })
</script>

<div class="">
 <Header/>
 <section class="flex">
        <div>
            <Sidebar/>
        </div>
       
        <div class="md:mx-12 font-Nunito">
         <div class="container mx-auto mt-10 ">

            <div class="xl:flex xl:space-x-10">

                <div class="xl:w-1/3">

                    <div class="bg-white shadow-md rounded-xl p-4">
                        <div class="h-28 w-28 mt-3 mx-auto relative rounded-full overflow-hidden">
                            <img src="/avatar-3.jpg" alt="" class="h-full w-full inset-0 object-cover rounded-full">
                        </div>
                        <div class="text-center p-4"> 
                            <h2 class="text-xl uppercase font-semibold text-drblue">{$useLoc.detail.user.fullname}</h2>
                            <h6 class="text-sm font-medium text-lgblue">{$useLoc.detail.user.email}</h6>
                        </div>
                        
                        <div class="font-medium mt-2"> 
                            <div class="flex items-center py-2 space-x-3">
                                <div class="flex flex-1">   
                                    <ion-icon name="map-outline" class="text-xl mr-3 md hydrated" role="img" aria-label="play circle outline"></ion-icon>
                                    Live In
                                </div> 
                                <div class="text-black"> Cairo  </div> 
                            </div>
                            <div class="flex items-center py-2 space-x-3">
                                <div class="flex flex-1">   
                                    <ion-icon name="play-circle-outline" class="text-xl mr-3 md hydrated" role="img" aria-label="play circle outline"></ion-icon>
                                    Courses
                                </div> 
                                <div class="text-black">  24  </div> 
                            </div>
                            <div class="flex items-center py-2 space-x-3">
                                <div class="flex flex-1">   
                                    <ion-icon name="people-outline" class="text-xl mr-3 md hydrated" role="img" aria-label="people outline"></ion-icon>
                                    Joined at
                                </div> 
                                <div class="text-black">  01/03/2021 </div> 
                            </div>
                            <div class="flex items-center py-2 space-x-3">
                                <div class="flex flex-1">   
                                    <ion-icon name="medal-outline" class="text-xl mr-3 md hydrated" role="img" aria-label="medal outline"></ion-icon>
                                    Acheavment
                                </div> 
                                <div class="text-black"> 12  </div> 
                            </div>
                               
                        </div>

                        <div class="mt-3 text-sm">
                            <a href="/test" class="bg-drblue text-white hover:bg-lgblue block py-1.5 rounded text-center"> Edit</a> 
                        </div>
                        
                    </div>

                    <div class="bg-white shadow-md rounded-xl py-2 divide-y divide-gray-100 mt-6">
                        <a href="/#" class="flex space-x-2 px-4 py-3 hover:bg-gray-50"> 
                            <div class="flex justify-center items-center bg-red-500 rounded-full w-10 h-10 text-white text-xl"> <i class="icon-feather-zap"></i></div>
                            <div class="flex-1 pl-1">
                                <div class="text-red-600">Upgrade To Premium</div>
                                <div class="text-sm mt-1.5 leading-5 text-gray-500"> Pro features give you complete control </div>
                            </div>
                            <i class="icon-feather-chevron-right text-2xl transform translate-x-0.5 text-gray-400"></i>
                        </a>
                        <a href="/#" class="flex space-x-2 px-4 py-3 hover:bg-gray-50 "> 
                            <div class="flex justify-center items-center bg-blue-500 rounded-full w-10 h-10 text-white text-xl"> <i class="icon-feather-settings"></i></div>
                            <div class="flex-1 pl-1">
                                <div class="text-black">Setting</div>
                                <div class="text-sm mt-1.5 leading-5 text-gray-500"> Manage your account</div>
                            </div>
                            <i class="icon-feather-chevron-right text-2xl transform translate-x-0.5 text-gray-400"></i>
                        </a> 
                    </div>

                </div>

                <div class="flex-1 bg-white shadow-md rounded-xl xl:mt-0 mt-10">

                    <div class="border-b items-end justify-between mb-6 sm:flex">
                        <div class="flex-1 mb-3 md:mb-0 p-5 pb-0">
                            <div class="font-semibold text-lg"> My Courses </div>
                            <nav class="cd-secondary-nav md:m-0 nav-small">
                                <ul class='flex '>
                                    <li class="active"><a href="#" class="lg:px-2"> Progress </a></li>
                                    <li><a href="/#" class="lg:px-2"> Completed </a></li> 
                                </ul>
                            </nav> 
                        </div>
                        <div class="flex items-center p-5 space-x-3">
                            <div class="bg-gray-100 border inline-flex p-0.5 rounded-md text-lg fliter-tab" uk-switcher="connect: #course-tabs; animation: uk-animation-fade">
                                <a href="/#" class="py-1.5 px-2.5 rounded-md uk-active" data-tippy-placement="top" data-tippy="" data-original-title="Grid view"> 
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-expanded="true"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> 
                                </a>
                                <a href="/#" class="py-1.5 px-2.5 rounded-md" data-tippy-placement="top" data-tippy="" data-original-title="List view"> 
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-expanded="false"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                </a> 
                            </div>
                            
                        </div>
                    </div>

                    <!-- my course list -->
                    <div class="p-6 pt-0">

                        <div class="uk-switcher" id="course-tabs" style="touch-action: pan-y pinch-zoom;">
                           
                            <!-- layout 1 -->
                            <ul class="divide-y -mt-5 uk-active">

                                <li class="flex items-start md:space-x-6 space-x-3 md:py-4 py-3">

                                    <a href="/#">
                                        <div class="h-12 md:h-16 md:w-24 overflow-hidden relative rounded -md w-12"> 
                                            <img src="/inst.jpeg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                        </div>
                                    </a>
                                    <div class="flex flex-1 items-end justify-between space-x-5">
                                        <div class="flex-1">
                                            <a href="/#" class="md:text-base font-semibold line-clamp-1"> Learn and Understand AngularJS to become a professional  developer </a>
                                            <div class="mt-1.5">
                                                <div class="mb-1.5 text-gray-400 text-sm"> 8/16   <span class="ml-1">  Complete </span>  </div>
                                                <div class="relative bg-gray-200 rounded-md overflow-hidden w-full h-1"> <div class="h-full w-1/2 bg-blue-600"></div></div>
                                            </div>
                                        </div>
                                        <a href="/#" class="sm:flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold hidden">
                                            Resume
                                        </a>
                                    </div>

                                </li> 
                                <li class="flex items-start md:space-x-6 space-x-3 md:py-4 py-3">

                                    <a href="/#">
                                        <div class="h-12 md:h-16 md:w-24 overflow-hidden relative rounded -md w-12"> 
                                            <img src="/inst.jpeg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                        </div>
                                    </a>
                                    <div class="flex flex-1 items-end justify-between space-x-5">
                                        <div class="flex-1">
                                            <a href="/#" class="md:text-base font-semibold line-clamp-1"> Build Responsive Real World Websites </a>
                                            <div class="mt-1.5">
                                                <div class="mb-1.5 text-gray-400 text-sm"> 8/16   <span class="ml-1">  Complete </span>  </div>
                                                <div class="relative bg-gray-200 rounded-md overflow-hidden w-full h-1"> <div class="h-full w-1/2 bg-blue-600"></div></div>
                                            </div>
                                        </div>
                                        <a href="/#" class="sm:flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold hidden">
                                            Resume
                                        </a>
                                    </div>

                                </li> 
                                <li class="flex items-start md:space-x-6 space-x-3 md:py-4 py-3">

                                    <a href="/#">
                                        <div class="h-12 md:h-16 md:w-24 overflow-hidden relative rounded -md w-12"> 
                                            <img src="/inst.jpeg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                        </div>
                                    </a>
                                    <div class="flex flex-1 items-end justify-between space-x-5">
                                        <div class="flex-1">
                                            <a href="/#" class="md:text-base font-semibold line-clamp-1">    Learn C sharp for Beginners Crash Course  </a>
                                            <div class="mt-1.5">
                                                <div class="mb-1.5 text-gray-400 text-sm"> 7/12   <span class="ml-1">  Complete </span>  </div>
                                                <div class="relative bg-gray-200 rounded-md overflow-hidden w-full h-1"> <div class="h-full w-3/4 bg-blue-600"></div></div>
                                            </div>
                                        </div>
                                        <a href="/#" class="sm:flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold hidden">
                                            Resume
                                        </a>
                                    </div>

                                </li> 
                                <li class="flex items-start md:space-x-6 space-x-3 md:py-4 py-3">

                                    <a href="/#">
                                        <div class="h-12 md:h-16 md:w-24 overflow-hidden relative rounded -md w-12"> 
                                            <img src="/inst.jpeg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                        </div>
                                    </a>
                                    <div class="flex flex-1 items-end justify-between space-x-5">
                                        <div class="flex-1">
                                            <a href="/#" class="md:text-base font-semibold line-clamp-1"> The Complete JavaScript For Beginners </a>
                                            <div class="mt-1.5">
                                                <div class="mb-1.5 text-gray-400 text-sm"> 1/14   <span class="ml-1">  Complete </span>  </div>
                                                <div class="relative bg-gray-200 rounded-md overflow-hidden w-full h-1"> <div class="h-full w-1/2 bg-blue-600"></div></div>
                                            </div>
                                        </div>
                                        <a href="/#" class="sm:flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold hidden">
                                            Resume
                                        </a>
                                    </div>

                                </li> 
                                <li class="flex items-start md:space-x-6 space-x-3 md:py-4 py-3">

                                    <a href="/#">
                                        <div class="h-12 md:h-16 md:w-24 overflow-hidden relative rounded -md w-12"> 
                                            <img src="/inst.jpeg" alt="" class="w-full h-full absolute inset-0 object-cover">
                                        </div>
                                    </a>
                                    <div class="flex flex-1 items-end justify-between space-x-5">
                                        <div class="flex-1">
                                            <a href="/#" class="md:text-base font-semibold line-clamp-1"> Responsive Web Design Essentials HTML5 CSS3 and Bootstrap  </a>
                                            <div class="mt-1.5">
                                                <div class="mb-1.5 text-gray-400 text-sm"> 1/14   <span class="ml-1">  Complete </span>  </div>
                                                <div class="relative bg-gray-200 rounded-md overflow-hidden w-full h-1"> <div class="h-full w-1/2 bg-blue-600"></div></div>
                                            </div>
                                        </div>
                                        <a href="/#" class="sm:flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold hidden">
                                            Resume
                                        </a>
                                    </div>

                                </li> 

                            </ul>
                            
                      

                    </div>

                </div>

            </div>
      
        </div>
    </div>
 </section>

</div>