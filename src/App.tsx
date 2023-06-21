import Header from './components/Header'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import BooksPage from './pages/books/BooksPage'
import SignupPage from './pages/auth/SignupPage'
import NotFoundPage from './pages/NotFoundPage'
import CreateBookPage from './pages/books/CreateBookPage'
import DetailBookPage from './pages/books/DetailBookPage'

function App() {

  return (
    <>
      <Router>
        <Header />
        <div className='w-full px-3 sm:px-0 sm:w-4/5 mx-auto'>
        <Routes>
          <Route path='/' element={<Navigate to={'/books'}/>}/>
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={SignupPage} />
          <Route path="/books" Component={BooksPage} />
          <Route path="/books/:id" Component={DetailBookPage} />
          {/* <Route path="/books/:id/update" component={UpdateBookPage} */}
          <Route path="/create-book" Component={CreateBookPage} />
          <Route path='/*' Component={NotFoundPage} />
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
