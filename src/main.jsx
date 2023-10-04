import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './components/home/Home';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Root from './components/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider';
import Orders from './components/order/Orders';
import PrivetRout from './routes/PrivetRout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "registration",
        element: <Registration></Registration>
      },
      {
        path: "/order",
        element: <PrivetRout>
          <Orders></Orders>
        </PrivetRout>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
