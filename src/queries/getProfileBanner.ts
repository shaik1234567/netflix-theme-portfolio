// getProfileBanner.ts (STATIC MOCK)
import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  // Return static mock data
  return {
    backgroundImage: { url: '/images/blue.png' },
    headline: 'Shaik Shivaji - Software and AI/ML Engineer',
    resumeLink: { url: 'https://drive.google.com/file/d/1FfZngs9JekoKCvJnb74KhXF2sCrCSui2/view?usp=sharing' },
    linkedinLink: 'https://www.linkedin.com/in/shivaji-shaik-b92b19270/',
    profileSummary: 'Passionate Software Developer specializing in AI/ML technologies with expertise in building scalable applications and intelligent systems.'
  };
}
