import Header from "./components/Header";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import BooksPage from "./pages/books/BooksPage";
import SignupPage from "./pages/auth/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import CreateBookPage from "./pages/books/CreateBookPage";
import DetailBookPage from "./pages/books/DetailBookPage";
import Footer from "./components/Footer";
import UpdateBookPage from "./pages/books/UpdateBookPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="w-full px-3 sm:px-0 sm:w-4/5 mx-auto flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to={"/books"} />} />
            <Route path="/login" Component={LoginPage} />
            <Route path="/register" Component={SignupPage} />
            <Route path="/books" Component={BooksPage} />
            <Route path="/books/:bookId" Component={DetailBookPage} />
            <Route path="/books/:bookId/update" Component={UpdateBookPage}/>
            <Route path="/create-book" Component={CreateBookPage} />
            <Route path="/*" Component={NotFoundPage} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
