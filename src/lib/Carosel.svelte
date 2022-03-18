<script>
  export let images;
</script>

<ul  class="flex overflow-x-auto gap-2 snap-x snap-mandatory   pb-6">
    {#each images as {src, title}}
         <li class='shrink-0 snap-center'>
             <img class='h-auto w-auto rounded-xl'{src} alt={title}/>
         </li>
    {/each}
</ul>