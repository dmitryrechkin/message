import { z } from 'zod';
import { createResponseSchema } from '@dmitryrechkin/foundation-core';

// Zod schema for TypeEmailAddress
export const emailAddressSchema = z.object({
	email: z.string().email().describe('The email address of the sender or recipient.'),
	name: z.string().optional().describe('The name associated with the email address, if available.')
});

export const messageAddressSchema = emailAddressSchema;

// Zod schema for TypeMessageAttachment
export const messageAttachmentSchema = z.object({
	path: z.string().optional().describe('The file path of the attachment, if available.'),
	filename: z.string().describe('The name of the attached file.'),
	content: z.string().optional().describe('The base64 encoded content of the attachment, if available.'),
	contentDisposition: z.string().optional().describe('Specifies the disposition of the content, typically "inline" or "attachment".')
});

// Zod schema for TypeMessage
export const messageSchema = z.object({
	id: z.string().optional().describe('A unique identifier for the message.'),
	grantId: z.string().optional().describe('A unique identifier for the grant that allows to send messages on behalf of a given email, associated with the message.'),
	body: z.string().describe('The main HTML content of the message.'),
	attachments: z.array(messageAttachmentSchema).optional().describe('A list of attachments included with the message.'),
	date: z.number().optional().describe('The timestamp when the message was created, typically in milliseconds since the Unix epoch.'),
	from: z.array(messageAddressSchema).optional().describe('An array of email addresses representing the sender(s) of the message.')
});

// Zod schema for TypeEmailMessage
export const emailMessageSchema = messageSchema.extend({
	replyToMessageId: z.string().optional().describe('The ID of the message this email is replying to, if applicable.'),
	to: z.array(messageAddressSchema).optional().describe('An array of email addresses representing the primary recipient(s) of the email.'),
	cc: z.array(messageAddressSchema).optional().describe('An array of email addresses representing the recipients who will receive a carbon copy of the email.'),
	bcc: z.array(messageAddressSchema).optional().describe('An array of email addresses representing the recipients who will receive a blind carbon copy of the email.'),
	replyTo: z.array(messageAddressSchema).optional().describe('An array of email addresses that will be used when the recipient replies to the email.'),
	subject: z.string().optional().describe('The subject line of the email.'),
	sendAt: z.number().optional().describe('The scheduled time to send the email, typically in milliseconds since the Unix epoch.')
});

export const messageOrEmailSchema = z.union([messageSchema, emailMessageSchema]).describe('Schema that validates either a simple message or an email message.');

// Zod schema for TypeMessageThread
export const messageThreadSchema = z.object({
	id: z.string().optional().describe('A unique identifier for the message thread.'),
	grantId: z.string().optional().describe('A unique identifier for the grant that allows to send messages on behalf of a given email, associated with the message thread.'),
	to: z.array(messageAddressSchema).optional().describe('An array of email addresses representing the primary recipient(s) in the thread.'),
	cc: z.array(messageAddressSchema).optional().describe('An array of email addresses representing the recipients who will receive a carbon copy in the thread.'),
	bcc: z.array(messageAddressSchema).optional().describe('An array of email addresses representing the recipients who will receive a blind carbon copy in the thread.'),
	replyTo: z.array(messageAddressSchema).optional().describe('An array of email addresses that will be used when the recipient replies to any message in the thread.'),
	subject: z.string().optional().describe('The subject line for the entire thread, if applicable.'),
	messages: z.array(messageOrEmailSchema).describe('An array of messages or email messages that make up the thread.'),
	from: z.array(messageAddressSchema).describe('An array of email addresses representing the sender(s) of the messages in the thread.'),
	receivedAt: z.number().optional().describe('The timestamp when the thread was received, typically in milliseconds since the Unix epoch.')
});

export const messageResponseSchema = createResponseSchema(messageOrEmailSchema).describe('Schema for the response containing the result of sending a message or email.');

// Infer the TypeScript types from the Zod schemas
export interface TypeEmailAddress extends z.infer<typeof emailAddressSchema> {}
export interface TypeMessageAddress extends TypeEmailAddress {} // Same as TypeEmailAddress
export interface TypeMessageAttachment extends z.infer<typeof messageAttachmentSchema> {}
export interface TypeMessage extends z.infer<typeof messageSchema> {}
export interface TypeEmailMessage extends z.infer<typeof emailMessageSchema> {}
export type TypeMessageOrEmail = TypeMessage | TypeEmailMessage;
export interface TypeMessageThread extends z.infer<typeof messageThreadSchema> {}
