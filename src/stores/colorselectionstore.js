import { writable } from 'svelte/store';

export let colornameStore = writable(
	{
		color: 'gray',
		depth: 200
	}
)

export function handleColor(newColor) {
	colornameStore.update((currentColor) => {
		return currentColor  = newColor;
	});
}