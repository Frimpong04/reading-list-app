import React, { useContext } from 'react';
import { bookContext } from "../context/Bookcontext";

// styles import
import "./BookDetails.css";

const BookDetail = ({ book }) => {

    const { removeBook } = useContext(bookContext);

    return (
        <li onClick={() => removeBook(book.id)} className="list">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
        </li>
    )
}

export default BookDetail;