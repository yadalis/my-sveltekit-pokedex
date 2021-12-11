<script>
	import { orgData } from '../stores/orgStore';
</script>

<div class="flex flex-col mb-5 mt-5">
	<div class="grid grid-cols-4 gap-10 bg-gray-400/50 px-3 py-1">
		<div class="font-bold">Org Name</div>
		<div class="font-bold">Late Fee</div>
		<div class="font-bold">City</div>
		<div class="font-bold">Invoice Terms</div>
	</div>

	{#each $orgData as org}
		<div class="grid grid-cols-4 gap-10 bg-gray-100 px-3 py-1  font-semibold text-blue-600">
			<div class="">{org.orgName}</div>
			{#each org.fieldValues as fieldValue}
				<div class="">{fieldValue.value}</div>
			{/each}
		</div>

		{#each org.childOrgs as childOrg, index}
			<div
				class="grid grid-cols-4 gap-10 bg-gray-100 px-3 py-1 text-blue-400 italic"
				class:bg-gray-200={index % 2 === 0}
			>
				<div class="inline-flex justify-end">{childOrg.orgName}</div>
				{#each childOrg.fieldValues as fieldValue}
					<div class="">{fieldValue.value}</div>
				{/each}
			</div>
		{/each}
	{/each}
</div>
