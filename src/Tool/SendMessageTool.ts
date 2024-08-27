import { ActionTool } from '@dmitryrechkin/foundation-core';
import { messageSchema } from '../Type/Message';
import { type SendMessageActionInterface } from '../Interface/SendMessageActionInterface';

/**
 * The tool for sending a message.
 */
export class SendMessageTool extends ActionTool<typeof messageSchema, typeof messageSchema>
{
	/**
	 * Constructor.
	 *
	 * @param {SendMessageActionInterface} service - The service to use.
	 */
	constructor(service: SendMessageActionInterface)
	{
		super(
			'sendMessage',
			'Sends a message with or without attachments from a given address to the recepients.',
			messageSchema,
			messageSchema,
			service
		);
	}
}
