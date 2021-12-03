<script>
	import { handleCenterMenuItemsClick, handleRightMenuItemsClick } from '../stores/menubandstore';

	export let item = {};

	// let id = 0;
	// let svgPath = '';
	// let menuText = '';
	// let isActive = false;
	
	// id = item.id;
	// svgPath = item.svgPath;
	// menuText = item.menuText;
	// isActive = item.isActive;
	// alert(menuText);
	// const { id, svgPath, menuText, isActive } = { ...menuItemAttrs };
</script>

<!-- focus:bg-gradient-to-tr focus:from-blue-900  focus:to-indigo-500 
  class:bg-gradient-to-tr={isActive}
    class:from-blue-900={isActive}
    class:to-indigo-500={isActive}
-->

<button
	id={item.id}
	class="flex flex-col justify-center items-center  hover:bg-gray-700 space-y-2 w-20 pt-2 rounded-t-md 
    {item.isActive === true ? 'bg-gradient-to-bl from-indigo-500 to-blue-700': ''} "
	on:click={() => {
		if (item.id > 0 && item.id <= 8 ) {
			handleCenterMenuItemsClick(item.id);	
		} else if(item.id > 8 && item.id <= 12){
			handleRightMenuItemsClick(item.id);
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
		d={item.svgPath}
	/></svg
	>
	<span class="text-white font-thin text-sm tracking-tight whitespace-nowrap">{item.menuText}</span>
</button>
