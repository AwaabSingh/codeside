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
	() => import("../../src/routes/register.svelte"),
	() => import("../../src/routes/course/[id].svelte"),
	() => import("../../src/routes/login.svelte")
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
	"register": [[0, 12], [1]],
	"course/[id]": [[0, 13], [1]],
	"login": [[0, 14], [1]]
};