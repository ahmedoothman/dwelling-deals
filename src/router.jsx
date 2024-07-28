// router
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const App = lazy(() => import('./App.jsx'));
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));
const DashboardBase = lazy(() => import('./pages/Dashboard/DashboardBase.jsx'));
const Home = lazy(() => import('./pages/Dashboard/Home.jsx'));
const SalePage = lazy(() => import('./pages/Dashboard/SalePage.jsx'));
const RentPage = lazy(() => import('./pages/Dashboard/RentPage.jsx'));
// auth
const AuthBase = lazy(() => import('./pages/Auth/AuthBase.jsx'));
const Login = lazy(() => import('./pages/Auth/LoginPage.jsx'));
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage.jsx'));
const VerifyEmail = lazy(() => import('./pages/Auth/VerificationPage.jsx'));
const WishlistPage = lazy(() => import('./pages/Dashboard/WishlistPage.jsx'));
const MyHousesPage = lazy(() => import('./pages/Dashboard/MyHousesPage.jsx'));
const ForgotPasswordPage = lazy(() =>
  import('./pages/Auth/ForgotPasswordPage.jsx')
);
const ResetPasswordPage = lazy(() =>
  import('./pages/Auth/ResetPasswordPage.jsx')
);

// error
const ErrorPage = lazy(() => import('./pages/ErrorPage.jsx'));
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'about-us',
        element: <LandingPage />,
      },
      {
        path: 'contact-us',
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
          {
            path: 'sale',
            element: <SalePage />,
          },
          {
            path: 'rent',
            element: <RentPage />,
          },
          {
            path: 'wishlist',
            element: <WishlistPage />,
          },
          {
            path: 'myhouses',
            element: <MyHousesPage />,
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
          {
            path: 'register',
            element: <RegisterPage />,
          },
          {
            path: 'verify-email',
            element: <VerifyEmail />,
          },
          {
            path: 'forgot-password',
            element: <ForgotPasswordPage />,
          },
          {
            path: 'reset-password',
            element: <ResetPasswordPage />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
