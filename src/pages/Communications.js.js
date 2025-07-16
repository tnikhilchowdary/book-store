import React, { useEffect, useState, useContext } from "react";
import "./Styling.css";
import { cartContext } from "../components/CartContext";


const Communications = ({ searchTerm }) => {
  const [comm, setComm] = useState([]);
  const {addToCart} = useContext(cartContext);

  useEffect(() => {
    fetch("https://gutendex.com/books/?search=communication")
      .then((res) => res.json())
      .then((data) => setComm(data.results))
      .catch((err) => console.log("error", err));
  }, []);

  const filteredBooks = comm.filter((book) =>
    book.title?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  );

  return (
    <div className="book-list">
      {filteredBooks.map((book) => (
        <div className="book-card" key={book.id}>
          <h4>{book.title}</h4>
          <img
            src={
              book.formats["image/jpeg"]
                ? book.formats["image/jpeg"]
                : `https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg`
            }
            alt={book.title}
            width="150"
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

export default Communications;
