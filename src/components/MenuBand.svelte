<script>
	import SMI from '../components/StackedMenuItem.svelte';
	import {centerMenuBandSVGItemPathList,rightMenuBandSVGItemPathList} from '../stores/menubandstore';
    
    // let centerList = [];
    // let rightList = [];
    
    // centerMenuBandSVGItemPathList.subscribe((data) => centerList = data);
    // rightMenuBandSVGItemPathList.subscribe((data) => rightList = data );

</script>

<div class="w-full flex justify-between h-20 bg-gray-800 opacity-80  items-end px-5 text-lg">
	<SMI
		id=0
		menuText="Menu"
		svgPath="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 2v10h16V6H2z"
		isActive=false
	/>
	<div class="flex space-x-5">
		{#each $centerMenuBandSVGItemPathList as svgItem}
			<SMI
                id={svgItem.id}
				menuText={svgItem.menuText}
				svgPath={svgItem.svgPath}
				isActive={svgItem.isActive}
			/>
		{/each}
	</div>
	<div class="flex space-x-3">
		{#each $rightMenuBandSVGItemPathList as svgItem}
			<SMI
                id={svgItem.id}
				menuText={svgItem.menuText}
				svgPath={svgItem.svgPath}
				isActive={svgItem.isActive}
			/>
		{/each}
	</div>
</div>
