import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const bookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);

    const addBook = (title, author) => {
        setBooks([...books, {
            title,
            author,
            id: uuidv4()
        }]);
    }

    const removeBook = (id) => {
        // console.log("remove book")
        // return books.filter(book => book.id !== id);
        // console.log(id)
        setBooks(prevState => prevState.filter(item => item.id !== id));
    }

    return (
        <bookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </bookContext.Provider>
    )
}

export default BookContextProvider;