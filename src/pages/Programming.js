import React, { useEffect, useState, useContext } from "react";
import "./Styling.css";
import { cartContext } from "../components/CartContext";

const Programming = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const {addToCart} = useContext(cartContext)


  useEffect(() => {
    fetch("https://gutendex.com/books/?search=computer")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.results);
      })
      .catch((err) => console.log("Failed to fetch books", err));
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-list">
      {filteredBooks.map((book) => (
        <div className="book-card" key={book.id}>
          <h4>{book.title}</h4>
          {book.formats["image/jpeg"] && (
            <img src={book.formats["image/jpeg"]} alt={book.title} />
          )}
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

export default Programming;
