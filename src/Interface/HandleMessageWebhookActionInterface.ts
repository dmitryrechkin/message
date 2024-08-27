import { type TypeMessageThread } from '../Type/Message';
import { type ActionInterface } from '@dmitryrechkin/foundation-core';

export interface HandleMessageWebhookActionInterface<TypePayload> extends ActionInterface<TypePayload, TypeMessageThread>
{
}
