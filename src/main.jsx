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
import TouristsSpotDetails from './Components/TouristsSpotDetails';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import AllTouristsSpot from './Components/AllTouristsSpot';
import MyList from './Components/MyList';
import Error from './Error/Error';
import CountryTourists from './Components/CountryTourists';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://trek-trove-sarver.vercel.app/touristsSpot"),
        element: <Home></Home>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/addTourists",
        element: <PrivetRoute>
          <AddTouristsSpot></AddTouristsSpot>
        </PrivetRoute>
      },
      {
        path: "/update/:id",
        loader: ({ params }) => fetch(`https://trek-trove-sarver.vercel.app/touristsSpot/${params.id}`),
        element: <PrivetRoute>
          <Update></Update>
        </PrivetRoute>
      },
      {
        path: "/touristsDetails/:id",
        loader: ({ params }) => fetch(`https://trek-trove-sarver.vercel.app/touristsSpot/${params.id}`),
        element: <PrivetRoute>
          <TouristsSpotDetails></TouristsSpotDetails>
        </PrivetRoute>
      },
      {
        path: "/allTouristsSpot",
        loader: () => fetch("https://trek-trove-sarver.vercel.app/touristsSpot"),
        element:<AllTouristsSpot></AllTouristsSpot>
      },
      {
        path:"/mylist",
        element:<PrivetRoute>
          <MyList></MyList>
        </PrivetRoute>
      },
      {
        path: "/countryTourists/:countryName",
        loader: ({params}) => fetch(`https://trek-trove-sarver.vercel.app/touristsSpot/countryName/${params.countryName}`),
        element:<CountryTourists></CountryTourists>
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
