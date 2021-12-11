import { writable } from 'svelte/store';
import deepCloneMe from "lodash/cloneDeep";

export const fieldData = writable([
	{ id: 1, fieldName: 'lateFee' },
	{ id: 2, fieldName: 'City' },
	{ id: 3, fieldName: 'invoiceTerms' }
]);

export let selectedOrgDataStore = writable();

let localData = [
	{
		id: 1,
		orgID: 100,
		orgName: 'ABC Health Care - Billing Center',
		fieldValues: [
			{ name: 'Late Fee', value: 15 },
			{ name: 'City', value: 'Overland Park' },
			{ name: 'Invoice Terms', value: 9 }
		],
		childOrgs: [
			{
				id: 2,
				orgID: 125,
				orgName: 'ABC Health Care',
				fieldValues: [
					{ name: 'Late Fee', value: 153 },
					{ name: 'City', value: 'Overland Park 11' },
					{ name: 'Invoice Terms', value: 8}
				],
				childOrgs: []
			},
			{
				id: 3,
				orgID: 135,
				orgName: 'Med Emporium',
				fieldValues: [
					{ name: 'Late Fee', value: 1545 },
					{ name: 'City', value: 'Overland Park 2' },
					{ name: 'Invoice Terms', value: 7 }
				],
				childOrgs: []
			},
			{
				id: 4,
				orgID: 145,
				orgName: 'Riverside Pharmacy Services',
				fieldValues: [
					{ name: 'Late Fee', value: 152222 },
					{ name: 'City', value: 'Overland Park 3' },
					{ name: 'Invoice Terms', value: 6 }
				],
				childOrgs: []
			}
		]
	}
];

export let orgData = writable();
orgData.set(localData);

export function getParentOrgFieldsData(orgID) {
	selectedOrgDataStore.update((selectedOrg) => {
		return localData.find((org) => {
			if (org.orgID === orgID) {
				return org;
			}
		});
	});
}

export function getChildOrgFieldsData(orgID) {
	let parentOrg = localData.find((org) => {
		if (org.orgID === 100) {
			return org;
		}
	});

	selectedOrgDataStore.update((selectedOrg) => {
		return selectedOrg = parentOrg.childOrgs.find((org) => {
			if (org.orgID === orgID) {
				return org;
			}
		});
	});
}

getChildOrgFieldsData(125);