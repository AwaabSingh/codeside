<script>
// @ts-nocheck
import {goto} from '$app/navigation';
import {loginUser} from '../store/authStore'


let isSuccess = 'Welcome Back'
let isError = 'Invalid Credentials'

const data = {}
  
  const handleSubmit = async () => {
       const response = await loginUser(data);
       
       if(response.status_code === 200) {
         alert( isSuccess)
          goto('/Sdashboard')
       }else {
         alert(isError)
       }

  }

</script>


<main class="antialiased bg-gray-200 text-gray-900 font-sans py-10">
   
    <div class="flex items-center h-screen w-full">
      <div class="w-full bg-white rounded-2xl shadow-lg p-8 m-4 md:max-w-lg md:mx-auto">
          <img src="cs_logo.png" alt="" class="p-5">
      <span class="block w-full text-xl  font-bold mb-5 text-center">Sign In Here  </span>      
        <form class="mb-4" on:submit|preventDefault={handleSubmit}>
          <div class="mb-4 md:w-full">
            <label for="email" class="block  mb-1 text-lg"> Email</label>
            <input required class="mb-5 w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" bind:value={data.email} placeholder="Email">
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-lg mb-1">Password</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" bind:value={data.password} placeholder="Password">
          </div>
          <button type="submit" class="bg-lgblue hover:bg-drblue text-white  text-sm font-semibold px-4 py-2 rounded w-full">Sign In</button>
        </form>
        <a class='flex justify-center mt-5' href="/login">Forgot password?</a>
        <button  class="text-center mt-8 mb-3">Don't Have an account? <a href='/register' class='text-drblue'> Sign Up</a> </button>
        <div>
          <hr>
        </div>
        <div class="flex items-center space-x-2 justify-center mt-3">
          
          <a href="/#">
              <ion-icon name="logo-facebook" class="p-2 rounded-full text-2xl bg-gray-100 text-blue-600 md hydrated" role="img" aria-label="logo facebook"></ion-icon>
          </a>
          <a href="/#">
              <ion-icon name="logo-twitter" class="p-2 rounded-full text-2xl bg-gray-100 text-indigo-500 md hydrated" role="img" aria-label="logo twitter"></ion-icon>
          </a>
          <a href="/#">
              <ion-icon name="logo-github" class="p-2 rounded-full text-2xl bg-gray-100 md hydrated" role="img" aria-label="logo github"></ion-icon>
          </a>
      </div>
    </div>
  </div>
</main>

<style>
   
</style>