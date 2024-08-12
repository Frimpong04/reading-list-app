import React, { useState, useContext } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { bookContext } from '../context/Bookcontext';

// styles
import './NewBookForm.css';

const NewBookForm = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const { addBook } = useContext(bookContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);

        setTitle("");
        setAuthor("");
        // console.log(title,author)
    }

    return (
        <form onSubmit = {handleSubmit} className="book-form" id="book-form" name="addBook">
            <input type="text"  value={title} placeholder="book title" required
            onChange={(e) => setTitle(e.target.value)}/>
            <input type="text"  value={author} placeholder="book author" required
            onChange={(e) => setAuthor(e.target.value)}/>
            <input  type="submit" value="ADD BOOK"/>
        </form>
    )
}

export default NewBookForm;