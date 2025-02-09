// import { useState } from 'react'
// import bookLogo from './assets/books.png'
// import Register from './components/Register';
import Login from './components/Login';


function App() {
  // const [token, setToken] = useState([])

  return (
    <>
      {/* <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that theyve finished reading.</p>

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <p>Dont forget to set up React Router to navigate between the different views of your single page application!</p>

      <button onClick={() => <Register />}>Register</button> */}

    <main className='App'>
      <Login />
    </main>
    </>
  );
}

export default App;