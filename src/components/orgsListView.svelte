<script>
	import {
		orgData,
		cancelCurrentChanges,
		getOrgFieldsData
	} from '../stores/orgStore';
	export let isDirty;
	let newOrgIDToLoad;
	let showPopup = false;
</script>

<div class="flex flex-col border-0 bg-gray-300/80 p-3 overflow-hidden">
	<div
		class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50"
		class:hidden={!showPopup}
	>
		<div class="bg-gray-200 w-96 h-52 p-10 text-lg rounded-lg  ">
			You have unsaved changes, changing Org will undo your current changes, do you want to proceed
			?
			<!-- {newOrgIDToLoad} - {currentOrgID} -->
			<hr class="h-0.5 bg-black mt-1" />
			<div class="flex justify-end">
				<button
					class="bg-red-200 items-center justify-center h-8 w-16 focus:bg-red-300 ring-1 ring-red-300 m-5 rounded-lg disabled:bg-gray-200 disabled:ring-0 disabled:text-gray-400/40"
					on:click={() => {
						showPopup = false;
						$cancelCurrentChanges = true;
						getOrgFieldsData(newOrgIDToLoad);
					}}
				>
					Yes
				</button>

				<button
					class=" bg-green-200 items-center justify-center h-8 w-16 focus:bg-green-300 ring-1 ring-green-300 m-5 rounded-lg disabled:bg-gray-200 disabled:ring-0 disabled:text-gray-400/40"
					on:click={() => {
						showPopup = false;
						$cancelCurrentChanges = false;
					}}
				>
					No
				</button>
			</div>
		</div>
	</div>

	<div class="bg-gray-400/50 px-3 py-1">
		<div class="font-bold">Org Name(s)</div>
	</div>
	{#each $orgData as org}
		<div
			class=" bg-green-50 px-3 py-1  font-semibold text-blue-6000 select-none cursor-pointer"
			class:bg-indigo-200={org.isSelected}
			class:hover:bg-indigo-100={!org.isSelected}
			on:click={() => {
				if (org.isSelected === false) {
					if (isDirty === false) {
						getOrgFieldsData(org.orgID);
					} else {
						showPopup = true;
						newOrgIDToLoad = org.orgID;
					}
				}
			}}
		>
			{org.orgName} - (p)
		</div>
		{#each org.childOrgs as childOrg, index}
			<div
				class="flex bg-gray-100 px-3 py-1 text-blue-4000 italic justify-end  select-none cursor-pointer"
				class:bg-gray-200={index % 2 === 0}
				class:bg-indigo-200={childOrg.isSelected}
				class:hover:bg-indigo-100={!childOrg.isSelected}
				on:click={() => {
					if (childOrg.isSelected === false) {
						if (isDirty === false) {
							getOrgFieldsData(childOrg.orgID);
						} else {
							showPopup = true;
							newOrgIDToLoad = childOrg.orgID;
						}
					}
				}}
			>
				<div class="">{childOrg.orgName} - (c)</div>
			</div>
		{/each}
	{/each}
</div>
