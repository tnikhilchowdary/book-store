import React, { useEffect, useState, useContext } from "react";
import "./Styling.css";
import { cartContext } from "../components/CartContext";

const Home = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const { addToCart } = useContext(cartContext);

  useEffect(() => {
    fetch("https://gutendex.com/books/?languages=en")
      .then((res) => res.json())
      .then((data) => setBooks(data.results))
      .catch((err) => console.log("Failed to Fetch books", err));
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-list">
      {filteredBooks.map((book) => (
        <div className="book-card" key={book.id}>
          <img
            src={`https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`}
            alt={book.title}
          />
          <h4>{book.title}</h4>
          <button
            onClick={() =>
              addToCart({
                id: book.id,
                title: book.title,
                price: 10,
                image: `https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`,
              })
            }
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
