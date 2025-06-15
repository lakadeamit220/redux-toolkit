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
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}...</p>
      </div>
    ));
  } else if (status === 'failed') {
    content = <div>Error: {error}</div>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
}