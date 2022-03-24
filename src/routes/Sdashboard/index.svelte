<script>
    import Header from '$lib/Dashboard/Header.svelte'
    import Sidebar from '$lib/Dashboard/Sidebar.svelte'
import { onMount } from 'svelte';
    import { useLoc } from '../../store/loc'

    onMount(async () => {
       await useLoc
    //    console.log($useLoc.detail.user.email)
    })
   
 
  let open = false

    
</script>
 
<main class=''>
    {#if $useLoc.detail.user}  
   <Header/>
   <section class='flex'>
       <div class=''>
        <Sidebar/> 
       </div>
        <div class='md:m-12 container'>
            <div class="grid gap-3 md:grid-cols-4 grid-cols-1 mt-2 m-10">

                <div class="bg-white p-5 shadow space-y-4  rounded-md">
                    <div class="flex items-start justify-between space-x-20">
                        <ion-icon name="flag" class="text-2xl text-white bg-blue-500 rounded-full p-1.5 md hydrated" role="img" aria-label="flag"></ion-icon>
                        <div class="text-3xl font-bold"> 45 </div>
                    </div>
                    <div> Completed</div>
                </div>
                <div class="bg-white p-5 shadow space-y-4 rounded-md">
                    <div class="flex items-start justify-between space-x-20">
                        <ion-icon name="heart" class="text-2xl text-white bg-red-500 rounded-full p-1.5 md hydrated" role="img" aria-label="heart"></ion-icon>
                        <div class="text-3xl font-bold"> 43 </div>
                    </div>
                    <div> Wishlist  </div>
                </div>
                <div class="bg-white p-5 shadow space-y-4 rounded-md">
                    <div class="flex items-start justify-between space-x-20">
                        <ion-icon name="medal" class="text-2xl text-white bg-yellow-500 rounded-full p-1.5 md hydrated" role="img" aria-label="medal"></ion-icon>
                        <div class="text-3xl font-bold"> 15 </div>
                    </div>
                    <div> Certification</div>
                </div>
                <div class="bg-white p-5 shadow space-y-4 rounded-md">
                    <div class="flex items-start justify-between space-x-20">
                        <ion-icon name="cart" class="text-2xl text-white bg-green-500 rounded-full p-1.5 md hydrated" role="img" aria-label="cart"></ion-icon>
                        <div class="text-3xl font-bold"> 35 </div>
                    </div>
                    <div> Purchased</div>
                </div>

            </div>
            <!-- Courese  -->
            <div class="shadow bg-white rounded-md lg:w-8/12 md:m-12 m-10">

                <div class="border-b flex items-center justify-between md:p-5 p-3">
                    <div>
                        <h2 class="text-lg font-semibold"> Courses in progess  </h2>
                    </div>
                    <a href="/#" class="text-blue-500"> See all </a>
                </div>

                <!-- <div class="lg:max-h-96" data-simplebar="init"><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content" style="padding: 0px; height: auto; overflow: hidden;"> -->

                    <ul class="divide-y px-5">

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
                       
                       

                    </ul>
        
                <!-- </div></div></div><div class="simplebar-placeholder" style="width: 635px; height: 417px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="transform: translate3d(0px, 0px, 0px); visibility: hidden;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: hidden;"><div class="simplebar-scrollbar" style="height: 304px; transform: translate3d(0px, 0px, 0px); visibility: hidden;"></div></div></div> -->
        
            </div>
        </div>    

        
   </section>
   {:else}
      <p>
          <a href="/login">You Need to be Logged in</a>
      </p>
{/if}
</main>
