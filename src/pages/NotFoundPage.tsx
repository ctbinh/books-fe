
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl">Oops! Page not found.</p>
      <p className="mt-8">The page you are looking for could not be found.</p>
      <a href="/books" className="text-blue-500 hover:underline mt-4">Go back to the homepage</a>
    </div>
  )
}

export default NotFoundPage