import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainRoute from './MainRoute/MainRoute';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Context from './Context/Context';
import AddTouristsSpot from './Components/AddTouristsSpot';
import Update from './Components/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/touristsSpot"),
        element: <Home></Home>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element:<SignUp></SignUp>
      },
      {
        path : "/addTourists",
        element: <AddTouristsSpot></AddTouristsSpot>
      },
      {
        path: "/update/:id",
        loader: ({params}) => fetch(`http://localhost:5000/touristsSpot/${params.id}`),
        element: <Update></Update>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
