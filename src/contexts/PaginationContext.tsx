import { createContext, useState } from 'react';

type initialValueType = [number, number, number, (_: number) => void, (_: number) => void];

const initialValue: initialValueType = [10, 1, 0, () => {}, () => {}];

export const PaginationContext = createContext(initialValue);

interface PaginationProviderProps {
  children: React.ReactElement;
}

export const PaginationProvider: React.FC<PaginationProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [numberOfPostsToBeSkipped, setNumberOfPostsToBeSkipped] = useState(
    () => currentPage * postsPerPage - postsPerPage
  );

  const setData = (number: number): void => {
    setNumberOfPostsToBeSkipped(number);
  };

  return (
    <PaginationContext.Provider
      value={[postsPerPage, currentPage, numberOfPostsToBeSkipped, setData, setCurrentPage]}
    >
      {children}
    </PaginationContext.Provider>
  );
};
