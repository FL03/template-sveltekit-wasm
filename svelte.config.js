// import adapter from '@sveltejs/adapter-auto';

import adapter_cloudflare from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-node';
import adapter_vercel from '@sveltejs/adapter-vercel';
import preprocess from "svelte-preprocess";



const config = {
	kit: {
		...(process.env.MODE === "cloudflare") && {
			adapter: adapter_cloudflare()
		},
		...(process.env.MODE === "vercel") && {
			adapter: adapter_vercel()
		},
		...(process.env.MODE !== "vercel") && {
			adapter: adapter()
		}
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
