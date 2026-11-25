import { BookOpenCheck, Library } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '../ui/Modal';
import { publicAsset } from '../../lib/assets';
import type { Book } from '../../types';
import { cn, formatAvailability, safeCoverImage } from '../../lib/utils';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const imageUrl = safeCoverImage(book.cover_image);
  const [open, setOpen] = useState(false);

  return (
    <>
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
      <div className="relative">
        <img
          src={imageUrl}
          alt={`Cover of ${book.title}`}
          className="book-cover-image transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          onError={(event) => {
            const target = event.currentTarget;
            target.onerror = null;
            target.src = publicAsset('/images/default-cover.jpg');
          }}
        />
        <span
          className={cn(
            'absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium shadow-sm',
            book.available === 1 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800',
          )}
        >
          {book.available === 1 ? <BookOpenCheck className="h-3.5 w-3.5" /> : <Library className="h-3.5 w-3.5" />}
          {formatAvailability(book.available)}
        </span>
      </div>

      <div className="space-y-3 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">{book.category}</p>
          <h3 className="mt-2 text-xl font-semibold leading-tight text-slate-900">{book.title}</h3>
        </div>

        <p className="text-sm text-slate-600">by {book.author}</p>
        <p className="line-clamp-4 text-sm leading-6 text-slate-600">{book.description || 'No description available yet.'}</p>
        <button type="button" onClick={() => setOpen(true)} className="text-sm font-semibold text-emerald-800 underline-offset-4 hover:underline">
          View details
        </button>
      </div>
    </article>
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className="grid gap-6 sm:grid-cols-[180px_1fr]">
        <img src={imageUrl} alt={`Cover of ${book.title}`} className="book-modal-cover" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = publicAsset('/images/default-cover.jpg'); }} />
        <div>
          <p className="eyebrow">{book.category}</p>
          <h2 id="book-modal-title" className="mt-2 text-3xl font-semibold text-slate-900">{book.title}</h2>
          <p className="mt-2 text-slate-600">by {book.author}</p>
          <p className="mt-5 leading-7 text-slate-600">{book.description || 'No description available yet.'}</p>
          <span className={`mt-5 inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${book.available === 1 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
            {formatAvailability(book.available)}
          </span>
        </div>
      </div>
    </Modal>
    </>
  );
}
