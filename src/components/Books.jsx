import { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

function AllBooks({ setBooks }) {
  const fetchAllBooks = async () => {
    try {
      const response = await axios.get(`${API_URL}/books`, {
        headers: {
          // Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return null; // This component doesn't need to render anything itself
}
AllBooks.propTypes = {
  setBooks: PropTypes.func.isRequired,
};

export default AllBooks;