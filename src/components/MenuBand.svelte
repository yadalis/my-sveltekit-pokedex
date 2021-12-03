<script>
	import MenuItem from './stackedmenuitem.svelte';
	import {
		centerMenuBandSVGItemPathList,
		rightMenuBandSVGItemPathList
	} from '../stores/menubandstore';

	const leftMmenuItem = {
		id: 0,
		svgPath:
			'M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 2v10h16V6H2z',
		menuText: 'Menu',
		isActive: false
	};
</script>

<div class="w-full h-20 flex justify-between items-end  bg-gray-800 opacity-80">
	<MenuItem
		id={leftMmenuItem.id}
		menuText={leftMmenuItem.menuText}
		svgPath={leftMmenuItem.svgPath}
		isActive={leftMmenuItem.isActive}
	/>
	<div class="flex space-x-5">
		{#each $centerMenuBandSVGItemPathList as svgItem}
			<MenuItem
				id={svgItem.id}
				menuText={svgItem.menuText}
				svgPath={svgItem.svgPath}
				isActive={svgItem.isActive}
			/>
		{/each}
	</div>
	<div class="flex space-x-3">
		{#each $rightMenuBandSVGItemPathList as svgItem}
			<MenuItem
				id={svgItem.id}
				menuText={svgItem.menuText}
				svgPath={svgItem.svgPath}
				isActive={svgItem.isActive}
			/>
		{/each}
	</div>
</div>
