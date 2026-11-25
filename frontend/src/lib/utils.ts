import { publicAsset } from './assets';

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function formatAvailability(value: number) {
  return value === 1 ? 'Available' : 'On Loan';
}

export function safeCoverImage(value?: string | null) {
  return value && value.trim() ? value : publicAsset('/images/default-cover.svg');
}

export function getLibraryStats(books: Book[]) {
  const available = books.filter((book) => book.available === 1).length;
  return {
    total: books.length,
    available,
    unavailable: books.length - available,
  };
}

export interface Book {
  book_id: number;
  title: string;
  author: string;
  category: string;
  description?: string | null;
  available: number;
  cover_image?: string | null;
}
