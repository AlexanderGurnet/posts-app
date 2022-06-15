import { useState, useCallback } from 'react';

import { PostsJSON } from '../types/interfaces';

const getMethodLiteral = 'GET';
const responseErrorMsg = 'Request failed!';
const serverErrorMsg = 'Something went wrong!';

interface requestConfig {
  url: string;
  method?: string;
  headers?: {};
  body?: string;
}

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (
      requestConfig: requestConfig,
      applyData: React.Dispatch<React.SetStateAction<PostsJSON>>
    ) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : getMethodLiteral,
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

        if (!response.ok) {
          throw new Error(responseErrorMsg);
        }

        const data = await response.json();

        applyData(data);
      } catch (error: any) {
        if (error) {
          setError(error.message || serverErrorMsg);
        }
      }

      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
