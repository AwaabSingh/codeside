<script>
      import { page } from '$app/stores';
      import { onMount } from 'svelte';
        console.log($page.params.publickKey)

        let course 

        onMount(async ()=>{
          course = await fetch(`https://aqueous-beyond-13704.herokuapp.com/getcousebyid?coursePk=${url.publickKey}`)

        })
</script>
<h1>Halo</h1>