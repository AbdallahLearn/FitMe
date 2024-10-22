// import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/LandingPage';

// Imports Pages //
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import PasswordChanged from '../pages/PasswordChanged';
import TestQuestion from '../pages/TestQuestion';
import Error from '../pages/Error';
//=== Imports Pages ===//

const router = createBrowserRouter([
    {
        path:'/home',
        element: <LandingPage />,
        errorElement:<Error/>
    },
    {
      path: '*', // Catch-all route for 404 errors
      element: <Error />, // Render your error component
    },
    {
      path:'/signin',
      element: <SignIn />
    },
    {
      path:'/signup',
      element: <SignUp />
    },
    {
      path:'/resetpassword',
      element: <ResetPassword />
    },
    {
      path:'/passwordchanged',
      element: <PasswordChanged />
    },
    {
      path:'exam',
      element: <TestQuestion/>
    }
]);

function Router() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Router
