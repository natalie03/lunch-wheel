import App from './App.svelte';
import list from './data/list.json'; //Get from API eventually

const app = new App({
	target: document.body,
	props: {
		restaurants: list.restaurants
	}
});

export default app;