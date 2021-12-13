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
	}
];

export let orgData = writable();
orgData.set(localData);

// export function getParentOrgFieldsData(orgID) {
// 	selectedOrgDataStore.update((selectedOrg) => {
// 		return localData.find((org) => {
// 			if (org.orgID === orgID) {
// 				return org;
// 			}
// 		});
// 	});

// 	orgData.update((orgsData) => {
// 		return orgsData.map((org) => {
// 			return {
// 				...org,
// 				isSelected: true,
// 				childOrgs: org.childOrgs.map((childOrg) => {
// 					return { ...childOrg, isSelected: false };
// 					// if (childOrg.orgID === orgID) {
// 					// 	return { ...childOrg, isSelected: true };
// 					// } else {
// 					// 	return { ...childOrg, isSelected: false };
// 					// }
// 				})
// 			};
// 		});
// 	});
// }

// export function getChildOrgFieldsData(orgID) {
// 	let parentOrg = localData.find((org) => {
// 		if (org.orgID === 100) {
// 			return org;
// 		}
// 	});

// 	selectedOrgDataStore.update((selectedOrg) => {
// 		return (selectedOrg = parentOrg.childOrgs.find((org) => {
// 			if (org.orgID === orgID) {
// 				return org;
// 			}
// 		}));
// 	});

// 	orgData.update((orgsData) => {
// 		return orgsData.map((org) => {
// 			return {
// 				...org,
// 				isSelected: false,
// 				childOrgs: org.childOrgs.map((childOrg) => {
// 					if (childOrg.orgID === orgID) {
// 						return { ...childOrg, isSelected: true };
// 					} else {
// 						return { ...childOrg, isSelected: false };
// 					}
// 				})
// 			};
// 		});
// 	});
// }

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
		parentOrg = localData.find((parentOrgItem) => {
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

		// if (selectedOrg.parentOrgID === 0) {
		// 	return orgsData.map((parentOrgItem) => {
		// 		return {
		// 			...parentOrgItem,
		// 			isSelected: true,
		// 			childOrgs: parentOrgItem.childOrgs.map((childOrgItem) => {
		// 				return { ...childOrgItem, isSelected: false };
		// 			})
		// 		};
		// 	});
		// } else {
		// 	return orgsData.map((parentOrgItem) => {
		// 		return {
		// 			...parentOrgItem,
		// 			isSelected: false,
		// 			childOrgs: parentOrgItem.childOrgs.map((childOrgItem) => {
		// 				if (childOrgItem.orgID === selectedOrg.orgID) {
		// 					return { ...childOrgItem, isSelected: true };
		// 				} else {
		// 					return { ...childOrgItem, isSelected: false };
		// 				}
		// 			})
		// 		};
		// 	});
		// }
	});
}

getOrgFieldsData(125);
