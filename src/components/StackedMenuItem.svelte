<script>
	import { handleCenterMenuItemsClick, handleRightMenuItemsClick } from '../stores/menubandstore';

	export let item = {};

	const { id, svgPath, menuText } = { ...item };
	$: isActive = item.isActive; //$: is required for isActive prop, since the menu refresh happens on update to isActive prop.
</script>

<!-- 
	focus:bg-gradient-to-tr focus:from-blue-900  focus:to-indigo-500 
  	class:bg-gradient-to-tr={isActive}
    class:from-blue-900={isActive}
    class:to-indigo-500={isActive}
	{isActive === true ? 'bg-gradient-to-bl from-blue-500 to-indigo-600' : ''} "
	class:bg-gradient-to-tr={item.isActive}
    class:from-blue-900={item.isActive}
    class:to-indigo-500={item.isActive}
-->

<div class="from-indigo-600 to-blue-400 from-red-600 to-yellow-400 from-red-700 to-red-300 hidden">
	
</div>

<button
	{id}
	class="flex flex-col justify-center items-center  hover:bg-gray-700 space-y-2 w-20 pt-2 rounded-t-sm 
	{isActive === true ? 'bg-gradient-to-bl from-red-600 to-red-300' : ''} "
 
	on:click={() => {
		if (id > 0 && id <= 8) {
			handleCenterMenuItemsClick(id);
		} else if (id > 8 && id <= 12) {
			handleRightMenuItemsClick(id);
		}
	}}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		class="h-5 w-8 text-white  "
		stroke="currentColor"
		><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={svgPath} /></svg
	>
	<span class="text-white font-thin text-sm tracking-tight whitespace-nowrap">{menuText}</span>
</button>
