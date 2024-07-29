// router
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const App = lazy(() => import('./App.jsx'));
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));
const DashboardBase = lazy(() => import('./pages/Dashboard/DashboardBase.jsx'));
const Home = lazy(() => import('./pages/Dashboard/Home.jsx'));
const SalePage = lazy(() => import('./pages/Dashboard/SalePage.jsx'));
const RentPage = lazy(() => import('./pages/Dashboard/RentPage.jsx'));
const HouseDetailsPage = lazy(() =>
  import('./pages/Dashboard/HouseDetails.jsx')
);
const ApproveHousePage = lazy(() =>
  import('./pages/Dashboard/ApproveHousePage.jsx')
);
const WishlistPage = lazy(() => import('./pages/Dashboard/WishlistPage.jsx'));
const MyHousesBase = lazy(() =>
  import('./pages/Dashboard/MyHouses/MyHousesBase.jsx')
);
const MyHousesPage = lazy(() =>
  import('./pages/Dashboard/MyHouses/MyHousesPage.jsx')
);
const AddHousePage = lazy(() =>
  import('./pages/Dashboard/MyHouses/AddHouse.jsx')
);

const UpdateHousePage = lazy(() =>
  import('./pages/Dashboard/MyHouses/UpdateHouse.jsx')
);

// auth
const AuthBase = lazy(() => import('./pages/Auth/AuthBase.jsx'));
const Login = lazy(() => import('./pages/Auth/LoginPage.jsx'));
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage.jsx'));
const VerifyEmail = lazy(() => import('./pages/Auth/VerificationPage.jsx'));
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
            path: 'housedetails/:id',
            element: <HouseDetailsPage />,
          },
          {
            path: 'myhouses',
            element: <MyHousesBase />,
            children: [
              {
                index: true,
                element: <MyHousesPage />,
              },
              {
                path: 'add',
                element: <AddHousePage />,
              },
              {
                path: 'update/:id',
                element: <UpdateHousePage />,
              },
            ],
          },
          {
            path: 'admin',
            element: <ApproveHousePage />,
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
