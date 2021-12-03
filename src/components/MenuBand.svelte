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
		menuText="Menu"
		svgElementPath="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 2v10h16V6H2z"
	/>
	<div class="flex space-x-5">
		{#each $centerMenuBandSVGItemPathList as svgItemPath}
			<SMI
                id={svgItemPath.id}
				menuText={svgItemPath.title}
				svgElementPath={svgItemPath.svgPath}
				isActive={svgItemPath.isActive}
			/>
		{/each}
	</div>
	<div class="flex space-x-3">
		{#each $rightMenuBandSVGItemPathList as svgItemPath}
			<SMI
                id={svgItemPath.id}
				menuText={svgItemPath.title}
				svgElementPath={svgItemPath.svgPath}
				isActive={svgItemPath.isActive}
			/>
		{/each}
	</div>
</div>
