import { BookCard } from "./BookCard";

export function BookShelf({ year, books }) {
  return (
    <div className="my-2 relative">
      {/* Shelf date */}
      <div className="text-4xl font-serif px-2 py-2 bg-indigo-100 text-colour1">
        {year !== null ? year : <span className="block w-full">&nbsp;</span>}
      </div>
      {/* Books and Plants */}
      <div className="flex gap-1 overflow-x-auto overflow-y-hidden px-1 bg-cover bg-indigo-50">
        {books.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>
    </div>
  );
}