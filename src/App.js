
import './App.css';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import NewBookForm from './components/NewBookForm';
import BookContextProvider from './context/Bookcontext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
  
    </div>
  );
}

export default App;
