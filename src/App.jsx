import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import bookLogo from './assets/books.png';
import AllBooks from './components/Books';
import BookDetails from './components/BookDetails.jsx';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';

function App() {
  const [books, setBooks] = useState([]);

  return (
    <Router>
      <div>
        <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
        <Routes>
          <Route path="/books" element={<AllBooks books={books} setBooks={setBooks} />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;