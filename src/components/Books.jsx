import { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../index.css';
// import { AuthContext } from '../context/AuthProvider';

const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

function AllBooks({ books, setBooks }) {
  const fetchAllBooks = async () => {
    try {
      const response = await fetch(`${API_URL}/books`, {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${AuthContext.token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      setBooks(result);
    } catch (err) {
      console.error("Uh oh, trouble fetching books!", err);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <div className="AllBooks">
      {Array.isArray(books) && books.length > 0 ? (
        books.map((book) => (
          <div className="bookBox" key={book.id}>
            <h2>{book.title}</h2>
            <img className="bookImg" src={book.imageUrl} alt={book.title} />
            &nbsp;
            {/* <button onClick={() => SingleBook(book.id)}>See Details</button> */}
          </div>
        ))
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
}

AllBooks.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default AllBooks;