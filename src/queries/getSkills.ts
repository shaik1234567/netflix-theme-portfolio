// getSkills.ts (STATIC MOCK)
import { Skill } from '../types';

export async function getSkills(): Promise<Skill[]> {
  // Return static mock data
  return [
    { name: 'React', category: 'Frontend', description: 'UI Library', icon: 'FaReact' },
    { name: 'Node.js', category: 'Backend', description: 'JavaScript Runtime', icon: 'FaNodeJs' },
    { name: 'Python', category: 'Backend', description: 'Programming Language', icon: 'FaPython' },
    { name: 'AWS', category: 'Cloud & DevOps', description: 'Cloud Platform', icon: 'FaAws' }
    // ...add more static skills as needed
  ];
}
