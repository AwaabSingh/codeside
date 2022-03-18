// import adapter from '@sveltejs/adapter-netlify';
import vercel from '@sveltejs/adapter-vercel';

export default {
  kit: {
    // adapter: adapter(),
    adapter: vercel()
  }
};


