import { trpc } from "../utils/trpc";

interface IProps {
  user: {
    image?: string | null;
    name?: string | null;
  };
}

export const Posts: React.FC = () => {
  const posts = trpc.useQuery(["posts.getAll"]);
  return posts.data ? (
    <div className="flex flex-col gap-2">
      <h3>Posts</h3>

      {posts.data.map((post) => {
        const dateCreated = post.createdAt.toString();
        return (
          <div
            key={dateCreated}
            className="flex flex-col gap-1 rounded-lg shadow-xl border-2 border-gray-800 p-4 "
          >
            <h5 className="font-bold">{post.title}</h5>
            <span>{post.body}</span>
            <span className="text-xs">Created: {dateCreated}</span>
          </div>
        );
      })}
    </div>
  ) : (
    <span>Loading...</span>
  );
};
