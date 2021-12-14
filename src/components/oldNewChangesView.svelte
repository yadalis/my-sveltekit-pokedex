<script>
	import { selectedOrgDataStore, orgData } from '../stores/orgStore';
	export let viewModel = {};
</script>
{viewModel.orgName}
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
		<div class="">Street</div>
		<div class="">{$selectedOrgDataStore.fieldValues[2].value}</div>
		<div class="">{viewModel.fieldValues[2].value}</div>
 
	</div>
</div>
