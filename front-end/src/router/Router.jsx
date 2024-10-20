// import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/LandingPage';

// Imports Pages //
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import PasswordChanged from '../pages/PasswordChanged';

//=== Imports Pages ===//

const router = createBrowserRouter([
    {
        path:'/home',
        element: <LandingPage />
    },
    {
    
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
