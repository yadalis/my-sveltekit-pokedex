<script>
	import OrgsListView from '../components/orgsListView.svelte';
	import OldNewChangesView from '../components/oldNewChangesView.svelte';
	import FullDataSet from '../components/fullDataSet.svelte';
	import { selectedOrgDataStore, cancelCurrentChanges } from '../stores/orgStore';
	import deepCloneMe from 'lodash/cloneDeep';
	import { onMount } from 'svelte';

	let viewModel = deepCloneMe($selectedOrgDataStore);
	let oldViewModel = deepCloneMe($selectedOrgDataStore);
	$: isParentSelected = viewModel.childOrgs.length > 0;
	let isInEditMode = true;
	$: orgName = viewModel.orgName;
	$: orgFieldValues = viewModel.fieldValues;
	$: isDirty =
		oldViewModel.fieldValues[0].value.toString() !== viewModel.fieldValues[0].value.toString() ||
		oldViewModel.fieldValues[1].value.toString() !== viewModel.fieldValues[1].value.toString() ||
		oldViewModel.fieldValues[2].value.toString() !== viewModel.fieldValues[2].value.toString();

	selectedOrgDataStore.subscribe((newOrg) => {
		viewModel = deepCloneMe(newOrg);
		oldViewModel = deepCloneMe(newOrg);
		//You dont need the below code since the popup modal dialog is handling to check if there are changes and the data is dirty
		// if (newOrg) {
		// 	if (isDirty === false) {
		// 		viewModel = deepCloneMe(newOrg);
		// 		oldViewModel = deepCloneMe(newOrg);
		// 	}
		// }
	});

	$: {
		if ($cancelCurrentChanges === true) {
			isInEditMode = false;
			viewModel = deepCloneMe(oldViewModel);
			$cancelCurrentChanges = false;
			console.log('asdfasdf');
		}
	}
	//This style works too...
	// cancelCurrentChanges.subscribe((shouldCancel) => {
	// 	if (shouldCancel) {
	// 		if (shouldCancel === true) {
	// 			isInEditMode = false;
	// 			viewModel = deepCloneMe(oldViewModel);
	// 		}
	// 	}
	// });
</script>

<svelte:head><title>Paint 3D - full app work!</title></svelte:head>

<div class="relative min-h-screen h-screen flex flex-col p-5">
	<!-- Top section -->
	<div class="flex justify-between space-x-5 flex-auto">
		<!-- left panel -->
		<div class="p-0 bg-gray-100 flex flex-shrink-0  flex-none ">
			<!-- Org list section -->
			<OrgsListView {isDirty}  currentOrgID={viewModel.orgID}/>
			<!-- data editing section -->
			<div class="flex flex-col bg-gray-100  flex-none w-[400px] ">
				<!-- Org Name Heading -->
				<div
					class="text-center text-blue-4000 py-1 text-lg"
					class:font-bold={isParentSelected}
					class:italic={!isParentSelected}
				>
					{orgName}
				</div>
				<hr />
				<!-- Edit button -->
				<div class="flex justify-end mt-12">
					<button
						class="bg-red-200 flex items-center justify-center h-8 w-16 focus:bg-red-300 ring-1 ring-red-300 m-5 rounded-lg disabled:bg-gray-200 disabled:ring-0 disabled:text-gray-400/40"
						disabled={isInEditMode}
						on:click={() => {
							isInEditMode = true;
						}}
					>
						Edit
					</button>
				</div>
				<hr />
				<!-- Data Fields Generation block -->
				<div class="m-1 flex justify-center flex-col">
					<div class="grid grid-cols-2 gap-y-3 bg-gray-3000 ">
						{#if isInEditMode === false}
							<!-- In Display mode -->
							{#each orgFieldValues as fieldValue}
								<div class="flex text-indigo-5000 justify-end w-28 items-center h-8 bg-gray-1000">
									{fieldValue.name}:
								</div>
								<div class="-ml-12 flex items-center rounded-lg px-1 h-8 font-semibold outline-none focus:border-b-2 focus:border-indigo-400">{fieldValue.value}</div>
							{/each}
						{:else}
							<!-- In Edit mode -->
							{#each orgFieldValues as fieldValue}
								<div class="flex text-indigo-5000 justify-end w-28 items-center h-8 bg-gray-1000">
									{fieldValue.name}:
								</div>
								<div>
									<input
										type=""
										name=""
										id=""
										bind:value={fieldValue.value}
										class="-ml-8 rounded-lg px-1 h-8 bg-gray-200 outline-none focus:border-b-2 focus:border-indigo-400"
									/>
								</div>
							{/each}
						{/if}
					</div>
				</div>
				<hr />
				<!-- Cancel/Save buttons -->
				{#if isInEditMode}
					<div class="flex justify-end mt-12">
						<button
							class=" bg-red-200 flex items-center justify-center h-8 w-16 focus:bg-red-300 ring-1 ring-red-300 m-5 rounded-lg disabled:bg-gray-200 disabled:ring-0 disabled:text-gray-400/40"
							class:hidden={isDirty}
							on:click={() => {
								isInEditMode = false;
							}}
						>
							Exit
						</button>

						<button
							class="bg-red-200 flex items-center justify-center h-8 w-32 focus:bg-red-300 ring-1 ring-red-300 m-5 rounded-lg disabled:bg-gray-200 disabled:ring-0 disabled:text-gray-400/40"
							class:hidden={!isDirty}
							on:click={() => {
								isInEditMode = false;
								viewModel = deepCloneMe(oldViewModel);
							}}
						>
							Cancel Changes
						</button>

						<button
							class="bg-green-200 flex items-center justify-center h-8 w-16 focus:bg-green-300 ring-1 ring-green-300 m-5 rounded-lg disabled:bg-gray-200 disabled:ring-0 disabled:text-gray-400/40"
							on:click={() => {}}
						>
							Save
						</button>
					</div>
				{/if}
			</div>
		</div>

		<!-- right panel -->
		<div class="flex-auto"><OldNewChangesView {viewModel} /></div>
	</div>

	<!-- Bottom table - Full data -->
	<FullDataSet />
</div>
