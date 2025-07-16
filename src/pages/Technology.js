import React, { useEffect, useState, useContext } from "react";
import "./Styling.css";
import { cartContext } from "../components/CartContext";


const Technology = ({ searchTerm }) => {
  const [techBooks, setTechBooks] = useState([]);
  const {addToCart} = useContext(cartContext)

  useEffect(() => {
    fetch("https://gutendex.com/books/?search=technology")
      .then((res) => res.json())
      .then((data) => setTechBooks(data.results))
      .catch((err) => console.log("Failed to fetch books", err));
  }, []);

  const filteredBooks = techBooks.filter((book) =>
    book.title?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );

  return (
    <div className="book-list">
      {filteredBooks.map((book) => (
        <div key={book.id} className="book-card">
          <h4>{book.title}</h4>
          <img
            src={`https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`}
            alt={book.title}
          />
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

export default Technology;
