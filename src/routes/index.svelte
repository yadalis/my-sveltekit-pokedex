<script>
	import MenuBand from "../components/menuband.svelte";
	import Content from "../components/content.svelte";
</script>
<svelte:head><title>Paint 3D - full app work!</title></svelte:head>

<!-- Paint-3D Window Container  -->
<div class="min-h-screen flex flex-col items-center bg-red-100   ">

	<!-- Menu Band -->
	<MenuBand/>

	<!-- Sub-Menu/Content & Context based content band-->
	<Content/>

</div>