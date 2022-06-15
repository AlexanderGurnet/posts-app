import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { SearchProvider } from './contexts/SearchContext';
import { PostProvider } from './contexts/PostContext';
import { PaginationProvider } from './contexts/PaginationContext';
import App from './App';

import './styles/globals.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <SearchProvider>
    <PaginationProvider>
      <PostProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostProvider>
    </PaginationProvider>
  </SearchProvider>
);
