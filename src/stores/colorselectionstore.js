import { writable } from 'svelte/store';

export let colornameStore = writable(
	{
		color: 'gray',
		depth: 200,
		toggle3D: false
	}
)

export function handleColor(newColor) {
	colornameStore.update((currentColor) => {
		return currentColor  = newColor;
	});
}


export function handle3DView() {
	colornameStore.update((currentColor) => {
		return currentColor  = {...currentColor, toggle3D: !currentColor.toggle3D};
	});
}
