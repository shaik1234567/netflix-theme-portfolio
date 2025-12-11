// getContactMe.ts (STATIC MOCK)
import { ContactMe } from '../types';

export async function getContactMe(): Promise<ContactMe> {
  // Return static mock data
  return {
    profilePicture: { url: '/images/shivaji.jpg' },
    name: 'Shaik Shivaji',
    title: 'Software Development and AI/ML Engineer',
    summary: 'Have personal experience in software development and AI and ML models testing and training',
    companyUniversity: 'IIIT Kottayam',
    linkedinLink: 'https://www.linkedin.com/in/shivaji-shaik-b92b19270/',
    email: 'shaikshivaji123@gmail.com',
    phoneNumber: '+91 8341868519'
  };
}
