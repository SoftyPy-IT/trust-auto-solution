import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import Services from "../pages/Dashboard/Services";
import AddJobCard from "../pages/Dashboard/AddJobCard/AddJobCard";
import ViewJobCard from "../pages/Dashboard/AddJobCard/ViewJobCard";
import Profile from "../pages/Dashboard/Profile/Profile";
import Invoice from "../pages/Dashboard/AddJobCard/Invoice";
import AddInvoice from "../pages/Dashboard/AddJobCard/AddInvoice";
import AddProduct from "../pages/Dashboard/Products/AddProduct";
import Product from "../pages/Dashboard/Products/Product";
import Customer from "../pages/Dashboard/Customer/Customer";
import AddCustomer from "../pages/Dashboard/Customer/AddCustomer";
import Expense from "../pages/Dashboard/Expense/Expense";
import AddExpense from "../pages/Dashboard/Expense/AddExpense";


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
        {
          path: 'addjob',
          element: <AddJobCard/>
        },
        {
          path: 'view-job',
          element: <ViewJobCard/>
        },
        {
          path: 'profile',
          element: <Profile/>
        },
        {
          path: 'invoice',
          element: <Invoice/>
        },
        {
          path: 'add-invoice',
          element: <AddInvoice/>
        },
        {
          path: 'add-product',
          element: <AddProduct/>
        },
        {
          path: 'product',
          element: <Product/>
        },
        {
          path: 'customer',
          element: <Customer/>
        },
        {
          path: 'add-customer',
          element: <AddCustomer/>
        },
        {
          path: 'expense',
          element: <Expense/>
        },
        {
          path: 'add-expense',
          element: <AddExpense/>
        },
      ]
    }
  
  ]);

