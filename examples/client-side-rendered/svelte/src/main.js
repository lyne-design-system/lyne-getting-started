import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		buttonLabel: 'lyne-cta-button used in svelte'
	}
});

export default app;
