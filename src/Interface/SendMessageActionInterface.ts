import { type ActionInterface } from '@dmitryrechkin/foundation-core';
import { type TypeMessage, type TypeEmailMessage } from '../Type/Message';

export interface SendMessageActionInterface extends ActionInterface<TypeMessage | TypeEmailMessage, TypeMessage | TypeEmailMessage>
{
}
