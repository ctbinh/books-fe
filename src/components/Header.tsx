import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="z-10 backdrop-blur-2xl border-b border-neutral-200 sticky top-0">
      <div className='w-full px-3 sm:px-0 sm:w-4/5 flex items-center h-16 mx-auto'>
        <h1 className="font-bold">Books</h1>
        <div className="grow">
          <div className="flex items-center justify-center gap-4">
            <Link to={'books'} className="hover:text-sky-600 text-sm">
              Home
            </Link>
            <Link to={'create-book'} className="hover:text-sky-600 text-sm">
              Create book
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link to={'login'} className="text-sm hover:text-sky-600">
            Login
          </Link>
          <Link
            to={'register'}
            className="px-3 text-sm py-1 border border-sky-600 rounded-md text-white bg-sky-600 hover:bg-transparent hover:text-sky-600 duration-300"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header