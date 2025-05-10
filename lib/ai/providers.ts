import {
  customProvider,
} from 'ai';
import { google } from '@ai-sdk/google';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model-flash': chatModel,
        'chat-model-pro': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model-flash': google('gemini-2.5-flash-preview-04-17'),
        'chat-model-pro': google('gemini-2.5-pro-exp-03-25'),
        'title-model': google('gemini-2.5-flash-preview-04-17'),
        'artifact-model': google('gemini-2.5-flash-preview-04-17'),
      },
    });
