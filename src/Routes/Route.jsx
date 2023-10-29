import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import Services from "../pages/Dashboard/Services";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        
      ],
      
    },
    {
      path: 'dashboard',
      element: <DashboardLayout/>,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard/>
        },
        {
          path: 'additem',
          element: <AddItem/>
        },
        {
          path: 'services',
          element: <Services/>
        },
      ]
    }
  
  ]);