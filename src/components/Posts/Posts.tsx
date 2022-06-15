import React from 'react';

import { PostItem } from '../../types/interfaces';
import { Post } from '../../features/Post';

interface PostsProps {
  posts: PostItem[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post
          id={post.id}
          key={post.id}
          title={post.title}
          body={post.body}
          tags={post.tags}
          reactions={post.reactions}
        />
      ))}
    </>
  );
};

export default Posts;
