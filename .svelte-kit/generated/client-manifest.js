export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/Sdashboard/__layout.reset.svelte"),
	() => import("../../src/routes/Sdashboard/index.svelte"),
	() => import("../../src/routes/Sdashboard/manageProfile.svelte"),
	() => import("../../src/routes/Sdashboard/categories.svelte"),
	() => import("../../src/routes/Sdashboard/wishlist.svelte"),
	() => import("../../src/routes/Sdashboard/billing.svelte"),
	() => import("../../src/routes/Sdashboard/courses.svelte"),
	() => import("../../src/routes/Sdashboard/explore.svelte"),
	() => import("../../src/routes/Sdashboard/profile.svelte"),
	() => import("../../src/routes/checkout.svelte"),
	() => import("../../src/routes/register.svelte"),
	() => import("../../src/routes/whislist.svelte"),
<<<<<<< HEAD
	() => import("../../src/routes/course/[publickKey].svelte"),
=======
	() => import("../../src/routes/course/dgh.svelte"),
	() => import("../../src/routes/course/[publickKey].svelte"),
	() => import("../../src/routes/verify/[trxref]/[refrence].svelte"),
>>>>>>> 7f68c6f07580e955b3ed5e9f4979587a03c36870
	() => import("../../src/routes/login.svelte"),
	() => import("../../src/routes/cart.svelte"),
	() => import("../../src/routes/test.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"Sdashboard": [[3, 4], []],
	"Sdashboard/manageProfile": [[3, 5], []],
	"Sdashboard/categories": [[3, 6], []],
	"Sdashboard/wishlist": [[3, 7], []],
	"Sdashboard/billing": [[3, 8], []],
	"Sdashboard/courses": [[3, 9], []],
	"Sdashboard/explore": [[3, 10], []],
	"Sdashboard/profile": [[3, 11], []],
	"checkout": [[0, 12], [1]],
	"register": [[0, 13], [1]],
	"whislist": [[0, 14], [1]],
<<<<<<< HEAD
	"course/[publickKey]": [[0, 15], [1]],
	"login": [[0, 16], [1]],
	"cart": [[0, 17], [1]],
	"test": [[0, 18], [1]]
=======
	"course/dgh": [[0, 15], [1]],
	"course/[publickKey]": [[0, 16], [1]],
	"verify/[trxref]/[refrence]": [[0, 17], [1]],
	"login": [[0, 18], [1]],
	"cart": [[0, 19], [1]],
	"test": [[0, 20], [1]]
>>>>>>> 7f68c6f07580e955b3ed5e9f4979587a03c36870
};