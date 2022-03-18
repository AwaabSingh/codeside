<script>
// @ts-nocheck
// import {goto} from '$app/navigation';
// import {loginUser} from '../store/authStore'
// import { sessionManager } from '$lib/store';




const data = {}
  
  const handleSubmit = async () => {
      //  const response = await loginUser(data);

      //   if(response.status_code === 200) {
      //      alert('welcome back')
      //      goto('/Sdashboard')
      //   } else{
      //     alert('Invalid Credentials');
         
      //   }
        // console.log(response);
       alert('still in development')
      
  
  }

</script>

<main class="antialiased bg-gray-200 text-gray-900 font-sans">
   
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
        <p class="text-center mt-8">Don't Have an account? <a href='/register' class='text-drblue'> Sign Up</a> </p>
    </div>
  </div>
</main>

<style>
   
</style>