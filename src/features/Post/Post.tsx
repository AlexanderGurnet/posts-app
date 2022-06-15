import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import PostContext from '../../contexts/PostContext';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

import s from './post.module.scss';

interface PostProps {
  title: string;
  body: string;
  tags: string[];
  reactions: number;
  id: number;
}

const Post: React.FC<PostProps> = ({ title, body, tags, reactions, id }) => {
  const addPostData = useContext(PostContext)[1];

  return (
    <Card className={s.post}>
      <Link to={`/posts/${id}`} onClick={() => addPostData({ title, body })}>
        <h2 className={s.title}>{title}</h2>
      </Link>
      <p>{body}</p>
      <div className={s.tags}>
        {tags.map((tag) => (
          <span key={tag} className={s.tag}>{`#${tag}`}</span>
        ))}
      </div>
      <Button className={s.button}>
        Like <span>{reactions}</span>
      </Button>
    </Card>
  );
};

export default Post;
