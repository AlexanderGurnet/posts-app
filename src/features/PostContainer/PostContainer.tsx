import { useEffect, useState, useContext } from 'react';

import { PaginationContext } from '../../contexts/PaginationContext';
import { SearchContext } from '../../contexts/SearchContext';
import { Pagination } from '../Pagination';
import { SearchBar } from '../SearchBar';
import { LoadingSpinner } from '../../components/Spinner';
import { Posts } from '../../components/Posts';
import { Card } from '../../components/Card';
import useHttp from '../../hooks/use-http';

import { PostItem } from '../../types/interfaces';
import s from './postcontainer.module.scss';

interface PostsJSON {
  limit: number;
  posts: PostItem[] | [];
  skip: string;
  total: number;
}

const initialPostsObject: PostsJSON = { limit: 0, posts: [], skip: '0', total: 0 };

export const PostContainer: React.FC = () => {
  const [posts, setPosts] = useState<PostsJSON>(initialPostsObject);
  const { isLoading, error, sendRequest } = useHttp();
  const [postsPerPage, currentPage, numberToSkip, setNumberOfPostsToBeSkipped, setCurrentPage] =
    useContext(PaginationContext);
  const searchWord = useContext(SearchContext)[0];

  const paginate = (e: React.MouseEvent, pageNumber: number) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const numberOfPostsToBeSkipped = currentPage * postsPerPage - postsPerPage;
    setNumberOfPostsToBeSkipped(numberOfPostsToBeSkipped);
  }, [setNumberOfPostsToBeSkipped, currentPage, postsPerPage]);

  useEffect(() => {
    const URL = searchWord
      ? `https://dummyjson.com/posts/search?q=${searchWord}&limit=${postsPerPage}&skip=${numberToSkip}`
      : `https://dummyjson.com/posts?limit=${postsPerPage}&skip=${numberToSkip}`;

    sendRequest(
      {
        url: URL,
      },
      setPosts
    );
  }, [sendRequest, postsPerPage, numberToSkip, searchWord]);

  return (
    <>
      <SearchBar />
      {(posts.posts.length > 0 || isLoading) && (
        <Card className={s.paginationContainer}>
          {isLoading && <LoadingSpinner />}
          {posts.posts.length > 0 && (
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.total} paginate={paginate} />
          )}
        </Card>
      )}

      {posts.posts.length > 0 && <Posts posts={posts.posts} />}

      {posts.posts.length === 0 && !isLoading && !error && <Card>NOT FOUND</Card>}

      {error && <Card>{error}</Card>}
    </>
  );
};
