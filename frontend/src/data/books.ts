import type { Book } from '../types';
import { publicAsset } from '../lib/assets';

export const books: Book[] = [
  { book_id: 1, title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Classic Fiction', description: 'A witty portrait of manners, marriage and society in 19th-century England.', available: 1, cover_image: publicAsset('/assets/books/book-001.jpg') },
  { book_id: 2, title: 'A Brief History of Time', author: 'Stephen Hawking', category: 'Science', description: 'An accessible introduction to cosmology and the nature of the universe.', available: 1, cover_image: publicAsset('/assets/books/book-002.jpg') },
  { book_id: 3, title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', description: 'A shepherd travels in search of a worldly treasure and self-discovery.', available: 1, cover_image: publicAsset('/assets/books/book-003.jpg') },
  { book_id: 4, title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', category: 'History', description: 'An exploration of how Homo sapiens came to dominate the world.', available: 0, cover_image: publicAsset('/assets/books/book-004.jpg') },
  { book_id: 5, title: 'Clean Code', author: 'Robert C. Martin', category: 'Technology', description: 'A practical handbook of agile software craftsmanship for programmers.', available: 1, cover_image: publicAsset('/assets/books/book-005.jpg') },
  { book_id: 6, title: 'The Diary of a Young Girl', author: 'Anne Frank', category: 'Biography', description: 'The wartime diary of a young girl in hiding during World War II.', available: 1, cover_image: publicAsset('/assets/books/book-006.jpg') },
  { book_id: 7, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', category: 'Technology', description: 'A comprehensive textbook on algorithms and data structures.', available: 1, cover_image: publicAsset('/assets/books/book-007.jpg') },
  { book_id: 8, title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam', category: 'Biography', description: 'The autobiography of a scientist and India\'s former president.', available: 1, cover_image: publicAsset('/assets/books/book-008.jpg') },
  { book_id: 9, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', category: 'Classic Fiction', description: 'A landmark novel of magical realism following the Buendia family.', available: 0, cover_image: publicAsset('/assets/books/book-009.jpg') },
  { book_id: 10, title: 'Atomic Habits', author: 'James Clear', category: 'Self-Help', description: 'A practical guide to building good habits and breaking bad ones.', available: 1, cover_image: publicAsset('/assets/books/book-010.jpg') },
  { book_id: 11, title: 'Silent Spring', author: 'Rachel Carson', category: 'Science', description: 'A foundational text of the modern environmental movement.', available: 1, cover_image: publicAsset('/assets/books/book-011.jpg') },
  { book_id: 12, title: 'The Little Prince', author: 'Antoine de Saint-Exupery', category: 'Children', description: 'A poetic tale about a young prince exploring the universe.', available: 1, cover_image: publicAsset('/assets/books/book-012.jpg') },
];
