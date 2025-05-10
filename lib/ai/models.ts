export const DEFAULT_CHAT_MODEL: string = 'chat-model-flash';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model-flash',
    name: 'Chat model flash',
    description: 'Primary model for all-purpose chat',
  },
  {
    id: 'chat-model-pro',
    name: 'Chat model pro',
    description: 'More intelligent model for complex queries',
  },
];
