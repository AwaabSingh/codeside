<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
</script>

<main class='h-screen'>
    <Splide options={ { rewind: true } }>
        <SplideSlide>
          <img src="/inst.jpeg" alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
            <img src="/inst.jpeg" alt="Image 1"/>
        </SplideSlide>
      </Splide>

</main>

<style>

</style>