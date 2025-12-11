// getWorkPermit.ts (STATIC MOCK)
import { WorkPermit } from '../types';

export async function getWorkPermit(): Promise<WorkPermit> {
  // Return static mock data
  return {
    visaStatus: 'Graduate Visa',
    expiryDate: new Date('2027-12-31'),
    summary: 'I am currently on a Graduate Visa in the UK.',
    additionalInfo: 'My visa allows me to work and gain experience in the UK tech industry.'
  };
}
