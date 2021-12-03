<script>
	import {centerMenuBandSVGItemPathList,rightMenuBandSVGItemPathList} from '../stores/menubandstore';
	export let menuText = '';
	export let svgElementPath = '';
	// export let isDisabled = false;
	export let isActive = false;
	export let id = 0;

	function handleCenterMenuItemsClick(id) {
		let foundMenuItem  = centerMenuBandSVGItemPathList.update((centerMenuList => {
			return centerMenuList.map(item => {
				if (item.id === id)
					return {...item, isActive: true}
				else
					return {...item, isActive: false}
			});
		}));
		//resetRightMenuItems
		rightMenuBandSVGItemPathList.update((rightMenuList => {
			return rightMenuList.map(item => {
					return {...item, isActive: false}
			});
		}));
	};

	function handleRightMenuItemsClick(id) {
		let foundMenuItem  = rightMenuBandSVGItemPathList.update((rightMenuList => {
			return rightMenuList.map(item => {
				if (item.id === id)
					return {...item, isActive: true}
				else
					return {...item, isActive: false}
			});
		}));
		//resetCenterMenuItems
		centerMenuBandSVGItemPathList.update((centerMenuList => {
			return centerMenuList.map(item => {
					return {...item, isActive: false}
			});
		}));
	};
</script>

<!-- focus:bg-gradient-to-tr focus:from-blue-900  focus:to-indigo-500 
  class:bg-gradient-to-tr={isActive}
    class:from-blue-900={isActive}
    class:to-indigo-500={isActive}
-->

<button
	{id}
	class="flex flex-col justify-center items-center  hover:bg-gray-700 space-y-3 w-20 py-2
    {isActive === true ? 'bg-gradient-to-tr from-blue-900  to-indigo-500': ''} "
	on:click={() => {
		if (id <= 8 ) {
			handleCenterMenuItemsClick(id);	
		} else {
			handleRightMenuItemsClick(id);
		}
	}}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		class="h-5 w-8 text-white  "
		stroke="currentColor"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d={svgElementPath}
		/></svg
	>
	<span class="text-white font-thin text-sm tracking-tight whitespace-nowrap">{menuText}</span>
</button>
