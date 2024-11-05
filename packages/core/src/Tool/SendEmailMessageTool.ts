import { ActionTool } from '@dmitryrechkin/foundation-core';
import { emailMessageSchema } from '../Type/Message';
import { type SendMessageActionInterface } from '../Interface/SendMessageActionInterface';

/**
 * The tool for sending a message.
 */
export class SendEmailMessageTool extends ActionTool<typeof emailMessageSchema, typeof emailMessageSchema>
{
	/**
	 * Constructor.
	 *
	 * @param {SendMessageActionInterface} service - The service to use.
	 */
	constructor(service: SendMessageActionInterface)
	{
		super(
			'sendEmailMessage',
			'Sends an email message with or without attachments from a given address to the recepients.',
			emailMessageSchema,
			emailMessageSchema,
			service
		);
	}
}
