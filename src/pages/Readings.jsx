import { BookShelf } from "../components/books/BookShelf";
import { useState } from 'react';
import { colorOptions, flowerImageOptions } from '../components/books/Options';

const books = [
  {
    title: "PostgreSQL Query Optimization",
    author: "H. Dombrovskaya, A. Bailliekova, B. Novikov",
    year: "2025-01-09",
    colour: colorOptions[2],
    image: flowerImageOptions[4],
  },
  {
    title: "Surely You're Joking, Mr. Feynman!",
    author: "Richard P. Feynman",
    year: "2025-01-10",
    colour: colorOptions[0],
    image: flowerImageOptions[1],
  },
  {
    title: "What Do You Care What Other People Think?",
    author: "Richard P. Feynman",
    year: "2025-06-15",
    colour: colorOptions[1],
    image: flowerImageOptions[7],
    quote: "What do you care what other people think?"
  },
  {
    title: "Braiding Sweetgrass",
    author: "Robin Wall Kimmerer",
    year: "2025-08-01",
    colour: colorOptions[2],
    image: flowerImageOptions[4],
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    year: "2025-03-12",
    colour: colorOptions[3],
    image: flowerImageOptions[5],
    quotes: "Stay in action, not motion.",
  }, 
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    year: "2025-03-12",
    colour: colorOptions[4],
    image: flowerImageOptions[2],
    quotes: "Paradoxical intention can reverse one's anticipatory anxiety.; Everything great is as difficult to realize as it is rare to find.",
  },
  {
    title: "Tuesdays with Morrie",
    author: "Mitch Albom",
    year: "2025-03-12",
    colour: colorOptions[5],
    image: flowerImageOptions[1],
    quotes: "So many people walk around with a meaningless life. They seem half-asleep, even when they're busy doing things they think are important. This is because they're chasing the wrong things.",
  },
  {
    title: "The World's I See",
    author: "Fei-Fei Li",
    year: "2025-03-12",
    colour: colorOptions[0],
    image: flowerImageOptions[4],
  },
  {
    title: "Never Eat Lunch Alone",
    author: "Keith Ferrazzi",
    year: "2024-03-12",
    colour: colorOptions[5],
    image: flowerImageOptions[1],
  },
  {
    title: "Algorithm Design",
    author: "Jon Kleinberg and Eva Tardos",
    year: "2024-01-09",
    colour: colorOptions[4],
    image: flowerImageOptions[2],
  },
  {
    title: "Algorithms",
    author: "C. Papadimitriou, S. Dasgupta, U. Vazirani",
    year: "2024-01-09",
    colour: colorOptions[4],
    image: flowerImageOptions[4],
  },
  {
    title: "Introduction to Algorithms",
    author: "CLRS",
    year: "2024-01-09",
    colour: colorOptions[3],
    image: flowerImageOptions[5],
  },
  {
    title: "Operating Systems",
    author: "William Stallings",
    year: "2024-01-09",
    colour: colorOptions[0],
    image: flowerImageOptions[4],
  },
  
  {
    title: "Computer Networking",
    author: "Kurose and Ross",
    year: "2024-01-09",
    colour: colorOptions[5],
    image: flowerImageOptions[1],
  },
  {
    title: "Concurrent and Parallel Programming Course Notes",
    author: "Peter Buhr",
    year: "2024-01-09",
    colour: colorOptions[0],
    image: flowerImageOptions[1],
  },
  {
    title: "Modern Control Systems",
    author: "Richard C. Dorf and Robert H. Bishop",
    year: "2024-01-09",
    colour: colorOptions[2],
    image: flowerImageOptions[4],
  },
  {
    title: "Biological Psychology",
    author: "James W. Kalat",
    year: "2024-01-09",
    colour: colorOptions[3],
    image: flowerImageOptions[11],
  },
  {
    title: "Educated",
    author: "Tara Westover",
    year: "2023-03-12",
    colour: colorOptions[0],
    image: flowerImageOptions[4],
  },
  {
    title: "Cognitive Psychology",
    author: "J. Stolz, J. Fugelsang, M. Fernandes",
    year: "2023-01-09",
    colour: colorOptions[3],
    image: flowerImageOptions[11],
  },
  {
    title: "Introduction to Combinatorics",
    author: "David G. Wagner",
    year: "2023-01-09",
    colour: colorOptions[2],
    image: flowerImageOptions[4],
  },
  {
    title: "Database System Concepts",
    author: "A. Silberschatz, H. F. Korth, S. Sudarshan",
    year: "2023-01-09",
    colour: colorOptions[5],
    image: flowerImageOptions[1],
  },
  {
    title: "Foundations of Sequential Programs Course Notes",
    author: "Gregor Richards",
    year: "2022-01-09",
    colour: colorOptions[1],
    image: flowerImageOptions[4],
  },
  {
    title: "STAT 230 Probability Course Notes",
    author: "Chris Springer",
    year: "2022-01-09",
    colour: colorOptions[5],
    image: flowerImageOptions[2],
  },
  {
    title: "STAT 231 Course Notes",
    author: "The University of Waterloo",
    year: "2022-01-09",
    colour: colorOptions[4],
    image: flowerImageOptions[1],
  },
  {
    title: "The Wealthy Barber",
    author: "David Chilton",
    year: "2021-03-12",
    colour: colorOptions[3],
    image: flowerImageOptions[1],
  },
  {
    title: "Angela's Ashes",
    author: "Frank McCourt",
    year: "2021-03-12",
    colour: colorOptions[2],
    image: flowerImageOptions[5],
  },
  
];


export default function Readings() {
  const [addingBookByYear, setAddingBookByYear] = useState(null);

  const groupedByYear = books.reduce((acc, book) => {
    // don't ask why its in utc time, no one knows, just accept it :)
    const year = book.year ? new Date(book.year).getUTCFullYear() : null;
    if (!acc[year]) acc[year] = [];
    acc[year].push(book);
    return acc;
  }, {});

  return (
    <div className="py-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
    <h1 className="text-4xl font-bold mb-8 text-center text-colour1">What I'm Reading</h1>
    <div className="">
      <div className="backdrop-blur-sm min-h-screen bg-white/80 py-2">
        {/* Shelves */}
        {Object.entries(groupedByYear)
          .sort((a, b) => b[0] - a[0])
          .map(([year, books]) => (
            <BookShelf
            key={year}
            year={year}
            books={books}
            onAdd={setAddingBookByYear}
            />
          ))}
        {/* Empty bottom shelf */}
        <div className="text-4xl px-2 py-2 mt-2 bg-indigo-100 text-white">
          <span className="block w-full">&nbsp;</span>
        </div>
      </div>
    </div>
    </div>
  );
}
