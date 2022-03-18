<script>
    import "../app.css";
    import Header from "$lib/Header.svelte";
   import Footer from '$lib/Footer.svelte';
//    import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<section>
    <Header/>
    <!-- <SvelteToast/> -->
    <slot/>
    <Footer/>

</section>