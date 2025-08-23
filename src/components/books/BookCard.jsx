
export function BookCard({ book }) {
  return (
    <div
      className="relative w-28 h-50 text-white p-2 mt-4 rounded shadow hover:scale-103 transition flex flex-col justify-end"
      style={{ background: book.colour }}
    >
      {/* Image overlay */}
      {book.image && (
        <img
          src={book.image}
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />
      )}
      {/* Title text */}
      <div className="relative text-sm h-50 w-24" >
        {book.title}
        <br></br>
        <div className="pt-2">
          <i >By {book.author}</i>
        </div>
      </div>
    </div>
  );
}
  