import Header from './components/Header'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import BooksPage from './pages/books/BooksPage'
import SignupPage from './pages/auth/SignupPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to={'/books'}/>}/>
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={SignupPage} />
          <Route path="/books" Component={BooksPage} />
          {/* <Route path="/book/:id" component={DetailBookPage} />
          <Route path="/book/:id/update" component={UpdateBookPage} />
          <Route path="/create-book" component={CreateBookPage} /> */}
          <Route path='/*' Component={NotFoundPage} />
        </Routes>
      </Router>
    </>
  )
}

export default App
