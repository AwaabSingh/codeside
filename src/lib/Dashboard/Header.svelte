
<script>
//  import {sessionManager } from '$lib/store'
// import { onMount } from 'svelte';
  
//  onMount(() => {
//      sessionManager.useLocalStorage();
//      console.log($sessionManager.user)
//  })
</script>


<header class='flex justify-between p-3 border-b-2 border-gray-200 sticky'>
    <div class='flex'>
        <a href='/'>
        
        <img src="/code_logo.png" alt="" class='h-10 hidden md:block'>
    </a>
        <h1 class='ml-3 py-2 text-bold text-drblue'>CodeSide</h1>
   
    </div>

    <!-- <h1>Welcome {$sessionManager}</h1> -->
    <ul class='flex m-2' >
        <li class='px-2'>
            <a href='/tt'>cart</a>
        </li>
        <li class='px-2'>
            <a href='/tt'>cart</a>
        </li>
        <li class='px-2'>
            <a href='/tt'>cart</a>
        </li>
        <li class='px-2'>
            <a href='/tt'>cart</a>
        </li>
    </ul>
</header>