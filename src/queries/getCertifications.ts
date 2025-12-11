// getCertifications.ts (STATIC MOCK)
import { Certification } from '../types';

export async function getCertifications(): Promise<Certification[]> {
  // Return static mock data
  return [
    {
      title: 'Cognitive Class Certification',
      issuer: 'Cognitive Class',
      issuedDate: '2024',
      link: 'https://courses.cognitiveclass.ai/certificates/c1e9b63e8e8244f5b9de0c06516e682a',
      iconName: 'microsoft'
    },
    {
      title: 'Machine learning',
      issuer: 'Istudio',
      issuedDate: '2024',
      link: 'https://drive.google.com/file/d/1_OtRQXSAxgXbnJUntYVRR4vzVRNj9Jqf/view',
      iconName: 'istudio'
    }
    // ...add more static certifications as needed
  ];
}
