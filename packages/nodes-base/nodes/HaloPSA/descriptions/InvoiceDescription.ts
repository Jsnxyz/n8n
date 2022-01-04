import { INodeProperties } from 'n8n-workflow';

export const invoiceDescription: INodeProperties[] = [
	{
		displayName: 'Field:',
		name: 'field',
		type: 'string',
		default: '',
		description: 'Enter field name',
		placeholder: '',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['invoice'],
			},
		},
	},
];