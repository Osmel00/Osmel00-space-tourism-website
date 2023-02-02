import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Destination from "../Pages/Destination";
import Crew from "../Pages/Crew";
import Technology from "../Pages/Technology";
import Header from "../components/Header";
import { RootLayout } from "../layout/RootLayout";

export const router = createBrowserRouter([
  
   {
      path: "/",
      element: <RootLayout/>,
      children: [
         {
          index:true,
          element: <Home />,
        },
        {
          path: "/Destination",
          element: <Destination />,
        },
        {
          path: "/Crew",
          element: <Crew />,
        },
        {
          path: "/Technology",
          element: <Technology />,
        },
        {
          element: <Header />,
        },

      ]
    },
  
]);
