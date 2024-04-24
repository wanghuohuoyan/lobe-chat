import { ModelProviderCard } from '@/types/llm';

const Minimax: ModelProviderCard = {
  chatModels: [
    {
      description: '更复杂的格式化文本生成',
      displayName: 'ABAB-6 Chat ',
      enabled: true,
      id: 'abab6-chat',
      tokens: 32_768,
    },
    {
      description: '生产力场景',
      displayName: 'ABAB-5.5',
      enabled: true,
      id: 'abab5.5-chat',
      tokens: 16_384,
    },
    {
      description: '人设对话场景',
      displayName: 'ABAB5.5-S',
      enabled: true,
      id: 'abab5.5s-chat',
      tokens: 8192,
    },
  ],
  id: 'minimax',
};

export default Minimax;
