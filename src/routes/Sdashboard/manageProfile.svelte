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
       
       <div>
           
       </div>
 </section>

</div>