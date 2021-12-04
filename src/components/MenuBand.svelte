<script>
	import MenuItem from './stackedmenuitem.svelte';
	import { centerMenuBandSVGItemStore, rightMenuBandSVGItemStore } from '../stores/menubandstore';

	const leftMmenuItem = {
		id: 0,
		svgPath:
			'M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 2v10h16V6H2z',
		menuText: 'Menu',
		isActive: false
	};
</script>

<MenuItem item={leftMmenuItem} />
<div class="flex space-x-5">
	{#each $centerMenuBandSVGItemStore as item}
		<MenuItem {item} />
	{/each}
</div>
<div class="flex space-x-3">
	{#each $rightMenuBandSVGItemStore as item}
		<MenuItem {item} />
	{/each}
</div>
