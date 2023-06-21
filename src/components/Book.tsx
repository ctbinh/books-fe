import { Link } from 'react-router-dom'
import defaultBookImg from '../assets/default-book-icon.png'
const Book = ({book}: {book: BookInfo}) => {
  return (
    <Link to={`/books/${book.id}`} className="group cursor-pointer">
      <div className="w-full h-80 rounded-md bg-neutral-100 xl:aspect-h-8 xl:aspect-w-7 p-3 flex items-center justify-center">
        <img src={book.imageUrl ?? defaultBookImg}
          alt="image"
          className="group-hover:scale-105 duration-500"/>
      </div>
      <h3 className="mt-3 font-bold text-md text-gray-700 hover:text-sky-700">{book.title}</h3>
      <h3 className="mt-1 text-sm text-gray-700">{book.author}</h3>
      <p className="text-lg font-medium text-gray-900">${book.price}</p>
    </Link>
  )
}

export default Book