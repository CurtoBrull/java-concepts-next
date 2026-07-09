import { BlockInfo } from '@/types/concept';

export const BLOCKS: BlockInfo[] = [
  { id: 'JAVA_CORE', label: 'Java Core', color: 'bg-blue-600' },
  { id: 'JPA_HIBERNATE', label: 'JPA/Hibernate', color: 'bg-green-600' },
  { id: 'SPRING', label: 'Spring', color: 'bg-green-700' },
  { id: 'SPRING_BOOT', label: 'Spring Boot', color: 'bg-emerald-600' },
  { id: 'CLEAN_CODE_SOLID', label: 'Clean Code / SOLID', color: 'bg-purple-600' },
  { id: 'TOOLS', label: 'Tools', color: 'bg-orange-600' },
  { id: 'APIS', label: 'APIs', color: 'bg-teal-600' },
];

export function getBlockInfo(blockId: string): BlockInfo {
  return BLOCKS.find(b => b.id === blockId) || BLOCKS[0];
}
