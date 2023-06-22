import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import defaultBookImg from "../../assets/default-book-icon.png";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import { booksService } from "../../services/books";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/Button";

const UpdateBookPage = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      imageUrl: "",
      author: "",
      description: "",
      price: null,
      publishedDate: "",
    },
  });

  useEffect(() => {
    const getBookById = async () => {
      if (bookId) {
        const book = await booksService.getById(bookId);
        setValue("title", book.title);
        setValue("imageUrl", book.imageUrl);
        setValue("author", book.author);
        setValue("description", book.description);
        setValue("price", book.price);
        setValue("publishedDate", book.publishedDate);
      }
    };
    getBookById();
  }, [bookId, setValue, navigate]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      if (!bookId) return;
      setIsLoading(true);
      const result = await booksService.update(bookId, {
        title: data.title,
        author: data.author,
        description: data.description,
        price: data.price,
        imageUrl: data.imageUrl,
        publishedDate: data.publishedDate,
      });
      if (result) {
        setTimeout(() => {
          setIsLoading(false);
          toast.success("Update book successfully!");
          navigate("/");
        }, 1000);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message);
      setIsLoading(false);
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
            <img
              src={
                watch("imageUrl") !== "" ? watch("imageUrl") : defaultBookImg
              }
              alt="image"
            />
          </div>
          <div className="col-span-3 grid gap-3">
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
                id="publishedDate"
                type="date"
                placeholder="Published date..."
                label="Published date"
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
          <Button isLoading={isLoading} title="Update book" />
        </div>
      </form>
    </>
  );
};

export default UpdateBookPage;
