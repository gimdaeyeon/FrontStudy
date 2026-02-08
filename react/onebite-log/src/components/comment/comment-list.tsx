import CommentItem from "@/components/comment/comment-item";
import { useCommentsData } from "@/hooks/mutations/comment/use-comments-data.ts";
import Fallback from "@/components/fallback.tsx";
import Loader from "@/components/loader.tsx";

export default function CommentList({ postId }: { postId: number }) {
  const {
    data: comments,
    error: fetchCommentsError,
    isPending: isFetchCommentPending,
  } = useCommentsData(postId);

  if (fetchCommentsError) return <Fallback />;
  if (isFetchCommentPending) return <Loader />;
  return (
    <div className="flex flex-col gap-5">
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}
