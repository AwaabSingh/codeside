<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: { message: error.message, status }
		};
	}
</script>

<script>
	export let status;

	export let message;
  console.log(message);
</script>

<main class="h-screen w-full flex flex-col justify-center items-center bg-drblue">
	<h1 class="text-9xl font-extrabold text-white tracking-widest">Ooops: {status} error</h1>
	<div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
		{message}
	</div>
	<button class="mt-5">
      <a
      href='/#'
        class="relative inline-block text-sm font-medium text-drblue group active:text-lgblue focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-brblue group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>
           
        <span class="relative block px-8 py-3 bg-lgblue border border-current text-white">
          <a href="/">Go Home</a>
        </span>
      </a>
    </button>
</main>
<!-- <div class="error h-auto  text-center flex justify-center items-center flex-col bg-lgblue">
     <h2 class='text-red-700'>Ooops: {status} error</h2>
      <p class='text-red-400'>{message}</p>
      <a href="/">Go Back To The Home Page</a>
</div>

<style>
    .error {
      text-align: center;
      margin-bottom: 60px;
    }
  </style> -->