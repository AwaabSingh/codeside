

<script>

import {goto} from "$app/navigation";
  import { registerUser } from '../store/authStore'


  const data = {};
  const handleSubmit = async () => {
      const response = await registerUser(data)

      if(response.status_code === 200) {
        alert("Welcome to codeside academy")
        goto('/')
        
      } else if(response.status_code ===  208) {
        alert("sorry email already exist")
      }  else {
        alert("Invalid credentials")
      }
     
  }

</script>

<body class="antialiased bg-gray-200 text-gray-900 font-sans">
    <div class="flex items-center h-screen w-full">
      <div class="w-full bg-white rounded-2xl shadow-lg p-8 m-4 md:max-w-lg md:mx-auto">
        <img src="cs_logo.png" alt="" class="p-3">
      <span class="block w-full text-xl font-bold mb-4 text-center">Sign Up Here</span>      
        <form class="mb-4"  on:submit|preventDefault={handleSubmit}>
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-lg mb-1">Full Name</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline"  bind:value={data.fullname} type="fullname" name="fullname" id="fullname" placeholder="Full Name">
          </div>
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-lg mb-1">Email</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email"  bind:value={data.email} placeholder="Username or Email">
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-lg mb-1">Password</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password"  bind:value={data.password} placeholder="Password">
          </div>
          <button class="w-full bg-lgblue hover:bg-drblue text-white uppercase text-sm font-semibold px-4 py-2 rounded">Sign Up</button>
        </form>
        <p class="text-center mt-3">By signing up, you agree to our  <a href='/register' class='text-drblue'> Terms of Use </a> </p>
        <p class="text-center mt-3">Don't Have an account? <a href='/register' class='text-drblue'> Sign Up</a> </p>
    </div>
  </div>
</body> 