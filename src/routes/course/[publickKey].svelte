<script>
      import { page } from '$app/stores';
      import { onMount } from 'svelte';
        console.log($page.params.publickKey)
        const pk = $page.params.publickKey
        let course 

        onMount(async ()=>{
          course = await fetch(`https://aqueous-beyond-13704.herokuapp.com/getcousebyid?coursePk=${pk}`)
          console.log(course);

        })
</script>
<h1>Halo</h1>