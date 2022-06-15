import { createContext, useState } from 'react';

type initialValueType = [CurrentPost, (_: CurrentPost) => void];

const initialValue: initialValueType = [
  { title: '', body: '' } as CurrentPost,
  (_: CurrentPost): void => {},
];

export const PostContext = createContext(initialValue);

interface PostProviderProps {
  children: React.ReactElement;
}

interface CurrentPost {
  title: string;
  body: string;
}

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [currentPostData, setCurrentPostData] = useState({ title: '', body: '' } as CurrentPost);

  const setData = (data: CurrentPost): void => {
    setCurrentPostData(data);
  };

  return <PostContext.Provider value={[currentPostData, setData]}>{children}</PostContext.Provider>;
};

export default PostContext;
