import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import defaultBookImg from "../../assets/default-book-icon.png";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import { booksService } from "../../services/books";

const CreateBookPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      imageUrl: "",
      author: "",
      description: "",
      price: null,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const result = await booksService.create({
        title: data.title,
        author: data.author,
        description: data.description,
        price: data.price,
        imageUrl: data.imageUrl
      })
      toast.success(result);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toast.error(err.message);
    }
  };

  return (
    <>
      <form
        action="#"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5"
      >
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-1 w-full h-50 rounded-md xl:aspect-h-8 xl:aspect-w-7">
            <img src={watch('imageUrl') !== '' ? watch('imageUrl') : defaultBookImg} alt="image" />
          </div>
          <div className="col-span-3">
            <Input
              id="title"
              type="text"
              placeholder="Book title..."
              label="Title"
              register={register}
              errors={errors}
              required={true}
            />
            <Input
              id="imageUrl"
              type="text"
              placeholder="Book image..."
              label="Book image"
              register={register}
              errors={errors}
              required={true}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                id="author"
                type="text"
                placeholder="Author name..."
                label="Author name"
                register={register}
                errors={errors}
                required={true}
              />
              <Input
                id="price"
                type="number"
                step={0.01}
                placeholder="Price..."
                label="Price"
                register={register}
                errors={errors}
                required={true}
              />
            </div>
            <Input
              id="description"
              type="textarea"
              placeholder="Description..."
              label="Description"
              register={register}
              errors={errors}
              required={true}
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full border border-sky-700 rounded-md hover:border hover:border-sky-700 bg-sky-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-transparent hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 duration-300"
          >
            Create new book
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateBookPage;
