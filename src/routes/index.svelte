<script>
	import { pokemon } from '../stores/pokestore';
</script>

<svelte:head><title>Poke stuff</title></svelte:head>

<h1 class="text-center mt-5 uppercase">svelte kit - pokedex</h1>

<div class="mt-5 grid grid-cols-3 m-3 gap-x-1 gap-y-2 border-gray-300 border-0">
	{#each $pokemon as pokeman}
		<div class="flex flex-col items-center bg-gray-100 w-full hover:bg-indigo-100 shadow-sm hover:scale-105 hover:shadow-lg select-none transition-all">
			<img src={pokeman.image} style="height: 50px;width: 50px;" alt="" />
			<h2 class="text-xs uppercase">
				{pokeman.name}
			</h2>
		</div>
	{:else}
		<!-- this block renders when pokemons.length === 0 -->
		<p>Loading... {pokemon.length}</p>
	{/each}
</div>