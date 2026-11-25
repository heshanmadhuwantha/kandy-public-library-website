import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { BookCard } from '../components/books/BookCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { books } from '../data/books';

export function BooksPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [availability, setAvailability] = useState('All');
  const [sort, setSort] = useState('title');
  const categories = useMemo(() => ['All', ...Array.from(new Set(books.map((book) => book.category)))], []);
  const filtered = useMemo(() => books.filter((book) => {
    const term = search.trim().toLowerCase();
    const matchesTerm = !term || book.title.toLowerCase().includes(term) || book.author.toLowerCase().includes(term);
    const matchesCategory = category === 'All' || book.category === category;
    const matchesAvailability = availability === 'All' || (availability === 'Available' ? book.available === 1 : book.available === 0);
    return matchesTerm && matchesCategory && matchesAvailability;
  }).sort((a, b) => sort === 'author'
    ? a.author.localeCompare(b.author)
    : a.title.localeCompare(b.title)), [search, category, availability, sort]);

  return (
    <main>
      <section className="page-hero"><div className="site-container"><SectionHeading eyebrow="Catalogue" title="Explore our book collection" description="Search by title or author and narrow the collection by category." /></div></section>
      <section className="section site-container">
        <div className="filter-bar">
          <label className="search-field"><span className="sr-only">Search by title or author</span><Search className="h-4 w-4" /><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search title or author" /></label>
          <label><span className="sr-only">Category</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item} value={item}>{item === 'All' ? 'All categories' : item}</option>)}</select></label>
          <label><span className="sr-only">Availability</span><select value={availability} onChange={(event) => setAvailability(event.target.value)}><option value="All">Any availability</option><option value="Available">Available</option><option value="On Loan">On loan</option></select></label>
          <label><span className="sr-only">Sort books</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="title">Sort by title</option><option value="author">Sort by author</option></select></label>
          {(search || category !== 'All' || availability !== 'All' || sort !== 'title') && <button type="button" className="clear-button" onClick={() => { setSearch(''); setCategory('All'); setAvailability('All'); setSort('title'); }}><X className="h-4 w-4" /> Clear</button>}
        </div>
        {filtered.length ? <div className="book-grid">{filtered.map((book) => <BookCard key={book.book_id} book={book} />)}</div> : <div className="empty-state"><h2>No books found</h2><p>Try another title, author or category.</p></div>}
      </section>
    </main>
  );
}
