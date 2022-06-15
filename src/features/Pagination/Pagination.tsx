import React, { useContext } from 'react';

import { Button } from '../../components/Button';
import { PaginationContext } from '../../contexts/PaginationContext';

import s from './pagination.module.scss';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  children?: any;
  paginate: (e: React.MouseEvent, pageNumber: number) => void;
}

const maxDefaultLengthOfPagination = 15;

const Pagination: React.FC<PaginationProps> = ({
  postsPerPage,
  totalPosts,
  children,
  paginate,
}) => {
  const currentPage = useContext(PaginationContext)[1];

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const prevPage = (e: React.MouseEvent, currPage: number) => {
    if (currPage > 1) {
      paginate(e, currPage - 1);
    }
  };

  const nextPage = (e: React.MouseEvent, currPage: number) => {
    if (currPage < pageNumbers.length) {
      paginate(e, currPage + 1);
    }
  };

  return (
    <>
      {children}
      <Button
        className={`${s.buttonPrev} ${
          pageNumbers.length > maxDefaultLengthOfPagination ? s.offset : ''
        }`}
        disabled={!(currentPage > 1)}
        onClick={(e) => prevPage(e, currentPage)}
      >
        &larr;
      </Button>
      <ul className={s.pagination}>
        {pageNumbers.map((number) => {
          return (
            <a
              className={`${s.pagelink} ${number === currentPage ? s.selected : ''}`}
              key={number}
              href="#!"
              onClick={(e) => paginate(e, number)}
            >
              <li>{number}</li>
            </a>
          );
        })}
      </ul>
      <Button
        className={s.buttonNext}
        disabled={!(currentPage < pageNumbers.length)}
        onClick={(e) => nextPage(e, currentPage)}
      >
        &rarr;
      </Button>
    </>
  );
};

export default Pagination;
