<script>
	import { orgData, getChildOrgFieldsData, getParentOrgFieldsData } from '../stores/orgStore';
	export let isDirty;
	export let showPopup;
</script>

<div class="flex flex-col border-0 bg-gray-300/80 p-3 overflow-hidden">
	<div class="bg-gray-400/50 px-3 py-1">
		<div class="font-bold">Org Name(s)</div>
	</div>
	{#each $orgData as org}
		<div
			class=" bg-green-50 px-3 py-1  font-semibold text-blue-6000 select-none cursor-pointer hover:bg-indigo-100"
			on:click={() => {
				if (!isDirty) {
					getParentOrgFieldsData(org.orgID);
				} else {
					showPopup = true;
					//alert('View model has changes and you will lose those ?');
				}
			}}
		>
			{org.orgName} - (p)
		</div>
		{#each org.childOrgs as childOrg, index}
			<div
				class="flex bg-gray-100 px-3 py-1 text-blue-4000 italic justify-end  select-none cursor-pointer hover:bg-indigo-100"
				class:bg-gray-200={index % 2 === 0}
				on:click={() => {
					if (!isDirty) {
						getChildOrgFieldsData(childOrg.orgID);
					} else {
						showPopup = true;
						//alert('View model has changes and you will lose those ?');
					}
				}}
			>
				<div class="">{childOrg.orgName} - (c)</div>
			</div>
		{/each}
	{/each}
</div>
