import { writable } from 'svelte/store';

export const pokemon = writable([]);

const fetchPokemon = async (limit) => {
	
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
	const pokemonCollectionJSON = await response.json();
	const loadedPokemon = pokemonCollectionJSON.results.map((pokeman, index) => ({
		name: pokeman.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
	}));
	pokemon.set(loadedPokemon);
};

fetchPokemon(150);

// setTimeout(() => {
//     fetchPokemon(150);
// }, 3000);