import defaultBookImg from "../../assets/default-book-icon.png";

const DetailBookPage = () => {
  return (
    <div className="grid grid-cols-4 gap-3 mt-5">
          <div className="col-span-1 w-full h-50 rounded-md xl:aspect-h-8 xl:aspect-w-7">
            <img src={defaultBookImg} alt="image" />
          </div>
          <div className="col-span-3">
            <div className="font-bold text-4xl text-neutral-700">Giovanni's Room</div>
            <div className="text-sky-800">Binh cao <span className="text-neutral-500">(author)</span></div>
          </div>
        </div>
  )
}

export default DetailBookPage