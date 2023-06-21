import { useEffect, useState } from "react"
import Book from "../../components/Book"
import { booksService } from "../../services/books"

const BooksPage = () => {
  const [books, setBooks] = useState<BookInfo[]>([])
  const getBooks = async () => {
    const books = await booksService.getList()
    setBooks(books)
  }
  useEffect(() => {
    getBooks()
  }, [])
  
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 my-5">
      
      {books && books.map(book => {
        return (<Book book={book} key={book.id}/>)
      })}

    </div>
  )
}

export default BooksPage