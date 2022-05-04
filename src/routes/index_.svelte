<script>
	import MenuBand from "../components/menuband.svelte";
	import Content from "../components/content.svelte";
</script>
<svelte:head><title>Paint 3D - full app work!</title></svelte:head>

<!-- Paint-3D Window Container  -->
<div class="min-h-screen h-screen flex flex-col items-center bg-red-100   ">

	<!-- Menu Band -->
	<div class="w-full h-20 flex justify-between items-end  bg-gray-800 opacity-80"><MenuBand/></div>

	<!-- Sub-Menu/Content & Context based content band-->
	<div class="w-full flex justify-between bg-red-700 flex-auto"><Content/></div>

</div>