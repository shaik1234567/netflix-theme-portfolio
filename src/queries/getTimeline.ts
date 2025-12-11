// getTimeline.ts (STATIC MOCK)
import { TimelineItem } from '../types';

export async function getTimeline(): Promise<TimelineItem[]> {
  // Return static mock data
  return [
    {
      timelineType: 'work',
      name: 'GitHub',
      title: 'Open Source Contributor',
      techStack: 'Documentation, API Design, Best Practices',
      summaryPoints: ['Enhanced project documentation by restructuring README.'],
      dateRange: '2025 - Present'
    },
    {
      timelineType: 'education',
      name: 'Indian Institute of Information Technology Kottayam',
      title: ",Bachelor's Degree",
      techStack: '',
      summaryPoints: ['Pursuing Bachelor\'s degree in Computer Science and Engineering.'],
      dateRange: '2022 - 2026'
    }
  ];
}
