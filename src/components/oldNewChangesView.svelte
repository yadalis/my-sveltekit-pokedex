<script>
	import { selectedOrgDataStore, applyChanges } from '../stores/orgStore';
	export let viewModel = {};
	export let isSaveDone;
</script>

<div class="font-bold text-center text-2xl underline mb-3">{viewModel.orgName}</div>
<div class="flex flex-col flex-shrink-0 flex-grow-0">
	<div class="grid grid-cols-3 gap-36 bg-gray-400/50 px-3 py-1">
		<div class="font-bold">Field</div>
		<div class="font-bold">Before Update</div>
		<div class="font-bold">After Update</div>
	</div>
	<div class="grid grid-cols-3 gap-36 bg-gray-100 px-3 py-1">
		<div class="">Late Fee</div>
		<div class="">{$selectedOrgDataStore.fieldValues[0].value}</div>
		<div class="">{viewModel.fieldValues[0].value}</div>
	</div>
	<div class="grid grid-cols-3 gap-36 bg-gray-200/90 px-3 py-1">
		<div class="">City</div>
		<div class="">{$selectedOrgDataStore.fieldValues[1].value}</div>
		<div class="">{viewModel.fieldValues[1].value}</div>
	</div>
	<div class="grid grid-cols-3 gap-36 bg-gray-100 px-3 py-1">
		<div class="">Invoice Terms</div>
		<div class="">{$selectedOrgDataStore.fieldValues[2].value}</div>
		<div class="">{viewModel.fieldValues[2].value}</div>
	</div>
</div>
<div class="flex">
	<button
		class="bg-green-200 flex items-center justify-center h-8 w-16 focus:bg-green-300 ring-1 ring-green-300 m-5 rounded-lg disabled:bg-gray-200 disabled:ring-0 disabled:text-gray-400/40"
		class:hidden={!isSaveDone}
		on:click={() => {
			applyChanges();
			isSaveDone = false;
		}}
	>
		Update
	</button>
</div>
