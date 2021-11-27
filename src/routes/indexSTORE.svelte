<script>
	import { onMount } from 'svelte';

	let pokemons = [];

	onMount(async () => {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
        const data = await res.json();
		pokemons = data.results.map((data, index) => ({
		name: data.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
	    }));
	});
</script>

<h1>Photo album</h1>

<div class="photos">
	{#each pokemons as photo}
        <img src="{photo.image}" style="height: 70px;width: 70px;" alt="">
		<figure>
			<figcaption>{photo.name}</figcaption>
		</figure>
	{:else}
		<!-- this block renders when pokemons.length === 0 -->
		<p>loading...dfdfdf {pokemons.length}</p>
	{/each}
</div>

<style>
	.photos {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 8px;
	}

	figure, img {
		width: 100%;
		margin: 0;
	}
</style>
