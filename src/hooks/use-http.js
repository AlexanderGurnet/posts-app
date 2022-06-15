import { useState, useCallback } from 'react';

const getMethodLiteral = 'GET';
const responseErrorMsg = 'Request failed!';
const serverErrorMsg = 'Something went wrong!';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
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
    } catch (error) {
      setError(error.message || serverErrorMsg);
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
