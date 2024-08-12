import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { bookContext } from '../context/Bookcontext';
import BookDetail from './BookDetail';

// styles
import "./BookList.css";

const BookList = () => {

    const {books} = useContext(bookContext);

    return (
        <div className="booklist" >
            <ul className="list-items">
                {books.map(book => {
                    return (
                        < BookDetail book={book} key={uuidv4()} />
                    )
                })}
            </ul>
        </div>
    )
}
export default BookList;