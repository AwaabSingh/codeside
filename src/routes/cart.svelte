<script>
    import axios from 'axios';
    import { getCart, delCart } from '../store/cartStore'
    import { onMount } from 'svelte';
      import { useLoc } from '../store/loc'
      
    //   export let cosPk;
      onMount(async () => {
          await useLoc
        //   const userToken  = $useLoc.detail.access_token;
        // console.log($useLoc.detail.cart.length)
         const config = {
        headers: {
            'user-token': ` ${$useLoc.detail.access_token}`
        }
    }
          const { data } = await axios.get('https://aqueous-beyond-13704.herokuapp.com/getcart', config);
        //   console.log(data.detail)
          $getCart = data.detail
        //   console.log($getCart)
         
      })

    
    
      
      

    
    </script>
    
    <main>
       {#if !$useLoc.detail.access_token } 
           <div> 
               <h1>You need to be logged in </h1>
               <button>
                   <a href="/login">Login</a>
               </button>
         </div>
         {:else}
           <section>
            <div class="h-screen bg-gray-300 ">
                <div class="py-20 md:px-10 px-3">
                    <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
                        <div class="md:flex ">
                            <div class="w-full p-4 px-5 py-10">
                                <div class="md:grid md:grid-cols-3 gap-2 ">
                                    <div class="col-span-4 md:p-10">
                                       <div class='flex justify-between items-center'>
                                        <h1 class="text-xl font-medium text-drblue">Shopping Cart</h1>
                                        <button  disabled={$useLoc.detail.cart.length === 0} class='bg-drblue px-3 py-2 shadow rounded-lg text-white hover:bg-lgblue '>
                                            <a href="/checkout">
                                                Proceed To Checkout
                                            </a>
                                        </button>
                                       </div>
                                        {#if $useLoc.detail.cart.length === 0}
                                         <div class='text-center my-10'>
                                            <h3 class='text-lgblue m-4'> You cart is empty </h3>
                                            <a  class='bg-drblue px-3 py-3 shadow rounded-lg text-white hover:bg-lgblue m-3' href="/">Keep Shopping</a>
                                            
                                         </div>
                                        {:else}
                                        {#each $getCart as cart}
                                        <div class="flex justify-between items-center mt-6 pt-6">
                                            <div class="flex items-center"> 
                                                <img src="/inst.jpeg" width="60" class="rounded-full">
                                                <div class="flex flex-col ml-3"> <span class="md:text-md font-medium">{cart.title}</span> 
                                                    <!-- <span class="text-xs font-light text-gray-400">#41551</span>  -->
                                                </div>
                                            </div>
                                            <div class="flex justify-center items-center">
                                          
                                                <div class="pr-8 "> <span class="text-md font-medium">${cart.price}</span> </div>
                                                <div > 
                                                     <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash mr-5 text-red-500" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                      </svg> 
                                                </div>
                                            </div>
                                        </div>
                                        {/each}
                                        <div class="flex justify-between items-center mt-6 pt-6 border-t px-2">
                                            <div class="flex items-center"> 
                                                <i class="fa fa-arrow-left text-sm pr-2"></i> <a href='/' class="text-md font-medium text-blue-500">Continue Shopping</a> 
                                            </div>
                                            <div class="flex justify-center items-end px">
                                                 <span class="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>
                                                  <span class="text-lg font-bold text-gray-800 "> $24.90</span> 
                                            </div>
                                        </div>
                                        {/if}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
    {/if}
    
    
                    </main>