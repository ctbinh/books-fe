import { useState } from "react";
import CommentForm from "./CommentForm";
import moment from "moment";

const ChildComment = ({ comment }: { comment: ChildCommentInfo }) => {
  const [openFormComment, setOpenFormComment] = useState(false);
  return (
    <div className="w-full flex gap-2">
      <div className="">
        <div className="h-10 w-10 rounded-full ring-2 ring-white flex items-center justify-center bg-sky-400">
          <span className="text-white text-lg font-bold">{comment.by.slice(0, 2)}</span>
        </div>
      </div>
      <div className="grid w-full gap-1">
        <div className="grid border border-neutral-200 gap-2 bg-neutral-50 p-2 rounded-md">
          <div>
            <div>{comment.by}</div>
            <div className="text-sm font-light text-neutral-500">
              {moment(comment.createdAt*1000).fromNow()}
            </div>
          </div>
          <p className="font-light">
            {comment.comment}
          </p>
        </div>
        <div
          className="cursor-pointer text-sky-700 text-sm flex items-center gap-1"
          onClick={() => setOpenFormComment(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 rotate-90"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"
            />
          </svg>
          Reply
        </div>
        {openFormComment && (
          <CommentForm closeForm={() => setOpenFormComment(false)} />
        )}
      </div>
    </div>
  );
};

export default ChildComment;
