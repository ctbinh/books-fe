import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { useState } from "react";

const CommentsSection = ({ comments }: { comments: CommentInfo[] }) => {
  const [openFormComment, setOpenFormComment] = useState(false);
  return (
    <div className="col-span-4">
      <div className="border-b text-2xl">Comments</div>
      <button
        onClick={() => setOpenFormComment(true)}
        hidden={openFormComment}
        className="w-full mt-3 bg-neutral-50 border border-sky-700 hover:bg-sky-700 duration-300 rounded-md text-sky-700 hover:text-white text-sm p-3 text-center"
      >
        Add your comment
      </button>
      {openFormComment && (
        <CommentForm closeForm={() => setOpenFormComment(false)} />
      )}
      <div className="mt-3">
        {comments.length > 0 ? (
          <div className="grid gap-2">
            {comments.map((comment) => {
              return <Comment comment={comment} />;
            })}
          </div>
        ) : (
          <div className="p-3 bg-neutral-100 text-center text-neutral-400">
            No comments
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
