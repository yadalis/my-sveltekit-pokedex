<script>
	import SMI from '../components/StackedMenuItem.svelte';
	let centerMenuBandSVGItemPathList = [
        {
			svgPath: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
            title: 'Brush',
            isActive: false
		},
        {
			svgPath: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
            title: '2D Shapes',
            isActive: false
		},
        {
			svgPath: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
            title: '3D Shapes',
            isActive: true
		},
        {
			svgPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
            title: 'Stickers',
            isActive: false
		},
        {
			svgPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
            title: 'Text',
            isActive: false
		},
        {
			svgPath: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
            title: 'Effects',
            isActive: false
		},
        {
			svgPath: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5',
            title: 'Canvas',
            isActive: false
		},
        {
			svgPath: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
            title: '3D Library',
            isActive: false
		},

        
	];
    let rightMenuBandSVGItemPathList = [
		{
			svgPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
            title: 'Paste',
            isActive: false
		},
        {
			svgPath: 'M6 18L18 6M6 6l12 12',
            title: 'Undo',
            isActive: false
		},
        {
			svgPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
            title: 'History',
            isActive: false
		},
        {
			svgPath: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6',
            title: 'Redo',
            isActive: false
		},
	];
</script>

<div class="w-full flex justify-between h-20 bg-gray-800 opacity-80  items-end px-5 text-lg">
	<SMI menuText="Menu" svgElementPath="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 2v10h16V6H2z" />
	<div class="flex space-x-5 ">
		{#each centerMenuBandSVGItemPathList as svgItemPath}
			<SMI menuText={svgItemPath.title} svgElementPath={svgItemPath.svgPath} isActive={svgItemPath.isActive}/>
		{/each}
	</div>
    <div class="flex space-x-3">
		{#each rightMenuBandSVGItemPathList as svgItemPath}
			<SMI menuText={svgItemPath.title} svgElementPath={svgItemPath.svgPath} isActive={svgItemPath.isActive}/>
		{/each}
	</div>
</div>
