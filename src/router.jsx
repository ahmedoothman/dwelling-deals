// router
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const App = lazy(() => import('./App.jsx'));
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));
const DashboardBase = lazy(() => import('./pages/Dashboard/DashboardBase.jsx'));
const Home = lazy(() => import('./pages/Dashboard/Home.jsx'));
const AuthBase = lazy(() => import('./pages/Auth/AuthBase.jsx'));
const Login = lazy(() => import('./pages/Auth/LoginPage.jsx'));

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '/dashboard',
        element: <DashboardBase />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
      {
        path: '/auth',
        element: <AuthBase />,
        children: [
          {
            index: true,
            element: <Login />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
