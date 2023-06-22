import { useCallback, useEffect, useState } from "react";
import Book from "../../components/Book";
import { booksService } from "../../services/books";
import Pagination from "../../components/Pagination";

const BooksPage = () => {
  const [books, setBooks] = useState<BookInfo[]>([]);
  const [total, setTotal] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const view = 10
  const getBooks = useCallback(async () => {
    const result = await booksService.getList(pageIndex * view, view);
    setBooks(result.data);
    setTotal(result.total);
  }, [pageIndex, view]);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 my-5">
        {books &&
          books.map((book) => {
            return <Book book={book} key={book.id} />;
          })}
      </div>
      <Pagination
        total={total}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        view={view}
      />
    </div>
  );
};

export default BooksPage;
