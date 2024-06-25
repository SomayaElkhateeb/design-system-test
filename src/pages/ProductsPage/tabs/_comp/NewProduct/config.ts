export const productTypeCollection = [
	'virtual',
	'food',
	'simple',
	'bundle',
	'configurable',
] as const;

export const productTypeMap: {
	[Key in (typeof productTypeCollection)[number]]: (typeof productTypeCollection)[number];
} = {
	virtual: 'virtual',
	food: 'food',
	simple: 'simple',
	bundle: 'bundle',
	configurable: 'configurable',
};
