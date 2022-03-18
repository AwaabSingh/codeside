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

<div class="error h-auto  text-center flex justify-center items-center flex-col bg-lgblue">
     <h2 class='text-red-700'>Ooops: {status} error</h2>
      <p class='text-red-400'>{message}</p>
      <a href="/">Go Back To The Home Page</a>
</div>

<style>
    .error {
      text-align: center;
      margin-bottom: 60px;
    }
  </style>