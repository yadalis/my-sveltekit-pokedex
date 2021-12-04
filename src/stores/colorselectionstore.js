import { writable } from 'svelte/store';

export let colornameStore = writable(
	{
		color: 'gray',
		depth: 200
	}
)

export function handleColor(newColor) {
	//alert(id);
	colornameStore.update((currentColor) => {
		console.log(currentColor);
		currentColor  = newColor ;
		console.log(currentColor);
		return currentColor;
	});
}

// export let colorname = 'pink';