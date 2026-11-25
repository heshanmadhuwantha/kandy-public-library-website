import type { Service } from '../types';

export const services: Service[] = [
  { service_id: 1, name: 'Book Lending', description: 'Borrow fiction, non-fiction, academic and reference books with a valid library membership.', icon: 'book' },
  { service_id: 2, name: 'Reading Hall', description: 'A quiet, well-lit place for students and researchers to read and study.', icon: 'chair' },
  { service_id: 3, name: 'Reference & Research Assistance', description: 'Librarian support for locating reference material and research resources.', icon: 'search' },
  { service_id: 4, name: "Children's Reading Corner", description: 'Age-appropriate books and reading activities for young visitors.', icon: 'child' },
  { service_id: 5, name: 'Internet & Computer Access', description: 'Public computers for research, applications and digital learning.', icon: 'computer' },
  { service_id: 6, name: 'Inter-Library Loan', description: 'Request selected titles not currently held in the local catalogue.', icon: 'exchange' },
  { service_id: 7, name: 'Photocopying & Printing', description: 'Photocopying and printing assistance available at the front desk.', icon: 'printer' },
  { service_id: 8, name: 'Community Programmes', description: 'Workshops, book clubs and reading programmes for the local community.', icon: 'users' },
];
