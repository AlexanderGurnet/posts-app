import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PostContext } from '../../contexts/PostContext';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

import s from './postpage.module.scss';

const navigateBackDelta = -1;

const PostPage = () => {
  const obj = useContext(PostContext)[0];
  const navigate = useNavigate();

  return (
    <Card className={s.post}>
      <h2 className={s.title}>{obj.title}</h2>
      <p>{obj.body}</p>
      <Button className={s.button} onClick={() => navigate(navigateBackDelta)}>
        Go Back
      </Button>
    </Card>
  );
};

export default PostPage;
