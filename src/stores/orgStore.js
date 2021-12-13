import { writable } from 'svelte/store';
import deepCloneMe from 'lodash/cloneDeep';

export const fieldData = writable([
	{ id: 1, fieldName: 'lateFee' },
	{ id: 2, fieldName: 'City' },
	{ id: 3, fieldName: 'invoiceTerms' }
]);

export let cancelCurrentChanges = writable(false);

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
		parentOrgID: 0,
		isSelected: false,
		childOrgs: [
			{
				id: 2,
				orgID: 125,
				orgName: 'ABC Health Care',
				fieldValues: [
					{ name: 'Late Fee', value: 153 },
					{ name: 'City', value: 'Overland Park 11' },
					{ name: 'Invoice Terms', value: 8 }
				],
				parentOrgID: 100,
				isSelected: true,
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
				parentOrgID: 100,
				isSelected: false,
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
				parentOrgID: 100,
				isSelected: false,
				childOrgs: []
			}
		]
	},
	// {
	// 	id: 1,
	// 	orgID: 200,
	// 	orgName: 'DEF Health Care - Billing Center',
	// 	fieldValues: [
	// 		{ name: 'Late Fee', value: 15 },
	// 		{ name: 'City', value: 'Lenexa' },
	// 		{ name: 'Invoice Terms', value: 9 }
	// 	],
	// 	parentOrgID: 0,
	// 	isSelected: false,
	// 	childOrgs: [
	// 		{
	// 			id: 2,
	// 			orgID: 225,
	// 			orgName: 'DEF Health Care',
	// 			fieldValues: [
	// 				{ name: 'Late Fee', value: 153 },
	// 				{ name: 'City', value: 'Lenexa 1' },
	// 				{ name: 'Invoice Terms', value: 8 }
	// 			],
	// 			parentOrgID: 100,
	// 			isSelected: true,
	// 			childOrgs: []
	// 		},
	// 		{
	// 			id: 3,
	// 			orgID: 235,
	// 			orgName: 'Geneva Emporium',
	// 			fieldValues: [
	// 				{ name: 'Late Fee', value: 1545 },
	// 				{ name: 'City', value: 'Lenexa 2' },
	// 				{ name: 'Invoice Terms', value: 7 }
	// 			],
	// 			parentOrgID: 100,
	// 			isSelected: false,
	// 			childOrgs: []
	// 		},
	// 		{
	// 			id: 4,
	// 			orgID: 245,
	// 			orgName: 'Swiss Pharmacy Services',
	// 			fieldValues: [
	// 				{ name: 'Late Fee', value: 152222 },
	// 				{ name: 'City', value: 'Lenexa 3' },
	// 				{ name: 'Invoice Terms', value: 6 }
	// 			],
	// 			parentOrgID: 100,
	// 			isSelected: false,
	// 			childOrgs: []
	// 		}
	// 	]
	// }
];

export let orgData = writable();
orgData.set(localData);

function findOrgById(orgID) {
	let parentOrg = localData.find((parentOrgItem) => {
		if (parentOrgItem.orgID === orgID) {
			return parentOrgItem;
		}
	});

	let childOrg;

	if (parentOrg) {
		return parentOrg;
	} else {
		localData.find((parentOrgItem) => {
			return parentOrgItem.childOrgs.find((childOrgItem) => {
				if (childOrgItem.orgID.toString() === orgID.toString()) return (childOrg = childOrgItem);
			});
		});
		return childOrg;
	}
}

export function getOrgFieldsData(orgID) {
	let selectedOrg = findOrgById(orgID);

	selectedOrgDataStore.update((previouSelectedOrgItem) => {
		return selectedOrg;
	});

	orgData.update((orgsData) => {
		return orgsData.map((parentOrgItem) => {
			return {
				...parentOrgItem,
				isSelected: selectedOrg.parentOrgID === 0,
				childOrgs: parentOrgItem.childOrgs.map((childOrgItem) => {
					return { ...childOrgItem, isSelected: childOrgItem.orgID === selectedOrg.orgID };
				})
			};
		});
	});
}

getOrgFieldsData(125);