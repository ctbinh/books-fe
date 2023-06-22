const Pagination = ({
  total,
  setPageIndex,
  view,
  pageIndex,
}: {
  total: number;
  setPageIndex: React.Dispatch<number>;
  view: number;
  pageIndex: number;
}) => {
  const goBack = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };
  const calMaxPage = (total: number) => {
    const maxPage =
      total % view !== 0 ? Math.round(total / view) : total / view;
    return maxPage;
  };
  const goNext = () => {
    if (pageIndex < calMaxPage(total) - 1) setPageIndex(pageIndex + 1);
  };
  return (
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium"> {pageIndex * view+1} </span>
          to
          <span className="font-medium"> {pageIndex * view + view < total ? pageIndex * view + view : total} </span>
          of
          <span className="font-medium"> {total} </span>
          results
        </p>
      </div>
      <div>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            onClick={goBack}
            className="relative cursor-pointer inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          {Array.from({ length: calMaxPage(total) ?? 1 }, (_, index) => (
            <a
              key={index}
              onClick={() => setPageIndex(index)}
              aria-current="page"
              className={`relative cursor-pointer z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
              ${pageIndex === index ? "bg-sky-700 text-white" : "text-gray-400"}`}
            >
              {index + 1}
            </a>
          ))}
          <a
            onClick={goNext}
            className="relative cursor-pointer inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
