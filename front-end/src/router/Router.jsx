// import React from 'react'
import { 
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom'
import LandingPage from '../pages/LandingPage';

// Imports Pages //
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import PasswordChanged from '../pages/PasswordChanged';
import TestQuestion from '../pages/TestQuestion';
import Error from '../pages/Error';
import YourModel from '../pages/YourModel';
import ProfileForm from '../pages/ProfileForm';
import { CommonLayout } from "../component/CommonLayout";

//=== Imports Pages ===//

// const router = createBrowserRouter([
//     {
//         path:'/home',
//         element: <LandingPage />,
//         errorElement:<Error/>
//     },
//     {
//       path: '*', // Catch-all route for 404 errors
//       element: <Error />, // Render your error component
//     },
//     {
//       path:'/signin',
//       element: <SignIn />
//     },
//     {
//       path:'/signup',
//       element: <SignUp />
//     },
//     {
//       path:'/resetpassword',
//       element: <ResetPassword />
//     },
//     {
//       path:'/passwordchanged',
//       element: <PasswordChanged />
//     },
//     {
//       path:'exam',
//       element: <TestQuestion/>
//     },
//     {
//       path:'yourmodel',
//       element: <YourModel/>
//     }
//     ,
//     {
//       path:'ProfileForm',
//       element: <ProfileForm/>
//     }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} errorElement={<Error />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/password-changed" element={<PasswordChanged />} />
      <Route path="/generate-model" element={<TestQuestion />} />
      <Route element={<CommonLayout />}>
        <Route path="/user-model" element={<YourModel />} />
        <Route path="/user-profile" element={<ProfileForm />} />
      </Route>
      <Route path="*" element={<Error />} /> {/* Catch-all route for 404 */}
    </>
  )
);


function Router() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Router
