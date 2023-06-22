type CommentInfo = {
  id: string;
  by: string;
  createdAt: number;
  comment: string;
  childs: ChildCommentInfo[]
};

type ChildCommentInfo = {
  id: string;
  by: string;
  createdAt: number;
  comment: string;
}

type CreateCommentData = {
  by: string;
  comment: string;
};
