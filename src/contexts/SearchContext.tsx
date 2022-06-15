import { createContext, useState, useRef } from 'react';

type initialValueType = [string, (_: string) => void, React.RefObject<HTMLInputElement>];

const initialValue: initialValueType = ['', () => {}, {} as React.RefObject<HTMLInputElement>];

export const SearchContext = createContext(initialValue);

interface SearchProviderProps {
  children: React.ReactElement;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchWord, setSearchWord] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const setData = (word: string): void => {
    setSearchWord(word);
  };

  return (
    <SearchContext.Provider value={[searchWord, setData, inputRef]}>
      {children}
    </SearchContext.Provider>
  );
};
