import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

export function PostsList() {
  const dispatch = useDispatch();
  
  const { 
    posts = [], 
    status = 'idle', 
    error = null 
  } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-gray-600">Loading posts...</span>
      </div>
    );
  } else if (status === 'succeeded') {
    content = posts.map((post) => (
      <div 
        key={post.id}
        className="p-4 mb-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
      </div>
    ));
  } else if (status === 'failed') {
    content = (
      <div className="p-4 mb-4 bg-red-50 border-l-4 border-red-500 text-red-700">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-15">
      <h2 className="text-center text-5xl font-bold text-green-700">Posts</h2>
      {content}
    </section>
  );
}