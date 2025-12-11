// getProjects.ts (STATIC MOCK)
import { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  // Return static mock data
  return [
    {
      title: 'Invoice Extraction & Quality Control Service',
      description: 'Comprehensive Invoice Extraction and Quality Control Service for B2B invoice processing.',
      techUsed: 'Python, HTML5, Node.js',
      image: { url: '/images/projects/invoice.png' }
    },
    {
      title: 'AI-Powered Driver Drowsiness Detection System',
      description: 'Android app using AI-powered facial analysis to detect driver drowsiness.',
      techUsed: 'Android Studio, Python, EAR',
      image: { url: '/images/projects/drowsiness.jpeg' }
    }
    // ...add more static projects as needed
  ];
}
