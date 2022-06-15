import React, { useContext, useState } from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { SearchContext } from '../../contexts/SearchContext';
import { PaginationContext } from '../../contexts/PaginationContext';
import { validate } from '../../utils/validate';

import s from './searchbar.module.scss';

const placeholderText = 'Type a word or words for which you want to search...';

const SearchBar: React.FC = () => {
  const setSearchWord = useContext(SearchContext)[1];
  const inputRef = useContext(SearchContext)[2];

  const setNumberOfPostsToBeSkipped = useContext(PaginationContext)[3];
  const setCurrentPage = useContext(PaginationContext)[4];

  const [errorMsg, setErrorMsg] = useState('');

  const setSearchWordState = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inputRef.current && validate(inputRef, setErrorMsg)) {
      setSearchWord(inputRef.current.value);
      setNumberOfPostsToBeSkipped(0);
      setCurrentPage(1);
      inputRef.current.value = '';
    }
  };

  return (
    <Card className={s.container}>
      <form className={s.form}>
        <input ref={inputRef} className={s.input} type="text" placeholder={placeholderText} />
        <Button onClick={(e) => setSearchWordState(e)} className={s.button}>
          Find
        </Button>
      </form>
      {errorMsg.length !== 0 && <p className={s.error}>{errorMsg}</p>}
    </Card>
  );
};

export default SearchBar;
