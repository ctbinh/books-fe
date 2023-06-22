import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";

const CommentForm = ({ closeForm }: { closeForm: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      by: "",
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <form
      action="#"
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
      className="my-5 bg-neutral-50 rounded-md p-3 shadow-lg"
    >
      <div className="grid gap-1">
        <Input
          id="by"
          type="text"
          placeholder="Comment by..."
          label="Comment by"
          register={register}
          errors={errors}
          required={true}
        />
        <Input
          id="comment"
          type="textarea"
          placeholder="Write your comment..."
          label="Comment"
          register={register}
          errors={errors}
          required={true}
        />
      </div>
      <div className="mt-2 flex gap-2">
        <button
          type="submit"
          className="block w-20 border border-sky-700 rounded-md hover:border hover:border-sky-700 bg-sky-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-transparent hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 duration-300"
        >
          Post
        </button>
        <button
          onClick={() => closeForm()}
          className="block w-20 border border-neutral-400 rounded-md hover:border hover:border-neutral-400 bg-neutral-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-transparent hover:text-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400 duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
