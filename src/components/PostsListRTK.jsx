// features/posts/PostsList.js
import React from "react";
import {
  useGetPostsQuery,
  useDeletePostMutation,
} from "../features/api/apiSlice";

export const PostsListRTK = () => {
  const { data: posts, isLoading, isError, error } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  if (isError)
    return <div className="text-red-500 py-4">Error: {error.toString()}</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-center text-5xl font-bold text-green-700 py-5">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-3">{post.body}</p>
            <button
              onClick={() => deletePost(post.id)}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded transition-colors"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
