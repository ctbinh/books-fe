import { useParams } from "react-router-dom";
import defaultBookImg from "../../assets/default-book-icon.png";
import { useEffect, useState } from "react";
import { booksService } from "../../services/books";
import CommentsSection from "../../components/CommentsSection";
import commentsDummyData from "../../assets/comments.json";
import { Link } from "react-router-dom";

const DetailBookPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState<BookInfo>();
  const [comments, setComments] = useState<CommentInfo[]>([]);
  useEffect(() => {
    setComments(commentsDummyData);
    const getBookById = async () => {
      if (bookId) {
        const book = await booksService.getById(bookId);
        setBook(book);
      }
    };
    getBookById();
  }, [bookId]);

  

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-5 mt-5 w-4/5 mx-auto">
      <div className="col-span-4 sm:col-span-1 w-full rounded-md xl:aspect-h-8 xl:aspect-w-7">
        <img src={book?.imageUrl ?? defaultBookImg} alt="image" />
      </div>
      <div className="grid col-span-4 sm:col-span-3 gap-2">
        <div className="grid border-b gap-1 pb-2">
          <div className="flex items-center justify-between">
            <div className="font-bold text-4xl text-neutral-700">
              {book?.title}
            </div>
            <Link to={`update`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer hover:text-sky-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sky-800">By: {book?.author}</div>
            <div className="text-neutral-500 text-sm">
              Publish date: {book?.publishedDate}
            </div>
          </div>
        </div>
        <div className="uppercase text-sm">Price</div>
        <div className="border-2 w-40 p-3 rounded-md border-sky-800 hover:cursor-pointer">
          <div className="text-sky-700">Hardcover</div>
          <span className="text-2xl">${book?.price}</span>
        </div>
        <div className="text-3xl">Description</div>
        <p className="font-light">{book?.description}</p>
      </div>
      <CommentsSection comments={comments} />
    </div>
  );
};

export default DetailBookPage;
