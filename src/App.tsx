import { Navigate, Routes, Route } from 'react-router-dom';

import { PostPage } from './features/PostPage';
import { PostContainer } from './features/PostContainer';

import s from './app.module.scss';

const App = () => {
  return (
    <main className={s.container}>
      <Routes>
        <Route path="/posts" element={<PostContainer />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="*" element={<Navigate to="/posts" replace />} />
      </Routes>
    </main>
  );
};

export default App;
