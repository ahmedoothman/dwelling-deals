import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

// styles
import styles from './main.module.scss';

// router
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
// redux
import store from './store/index.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
);
