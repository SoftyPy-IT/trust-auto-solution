import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddItem from "../pages/Dashboard/Employee/Employee";
import Services from "../pages/Dashboard/Services";
import AddJobCard from "../pages/Dashboard/AddJobCard/AddJobCard";
import ViewJobCard from "../pages/Dashboard/AddJobCard/ViewJobCard";
import Profile from "../pages/Dashboard/Profile/Profile";
import AddProduct from "../pages/Dashboard/Products/AddProduct";
import Product from "../pages/Dashboard/Products/Product";
import Customer from "../pages/Dashboard/Customer/Customer";
import AddCustomer from "../pages/Dashboard/Customer/AddCustomer";
import Expense from "../pages/Dashboard/Expense/Expense";
import AddExpense from "../pages/Dashboard/Expense/AddExpense";
import UpdateCustomer from "../pages/Dashboard/Customer/UpdateCustomer";
import Employee from "../pages/Dashboard/Employee/Employee";
import Role from "../pages/Dashboard/Role/Role";
import AddRole from "../pages/Dashboard/Role/AddRole";
import Qutation from "../pages/Dashboard/AddJobCard/Qutation";
import Details from "../pages/Dashboard/AddJobCard/Details";
import Invoice from "../pages/Dashboard/Invoice/Invoice";
import Detail from "../pages/Dashboard/Invoice/Detail";
import AddEmployee from "../pages/Dashboard/Employee/AddEmployee";
import SignUp from "../pages/Signup/SignUp";
import Login from "../pages/Login/Login";
import JobCardList from "../pages/Dashboard/AddJobCard/JobCardList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "additem",
        element: <AddItem />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "addjob",
        element: <AddJobCard />,
      },
      {
        path: "view-job",
        element: <ViewJobCard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "invoice",
        element: <Invoice />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "customer",
        element: <Customer />,
      },
      {
        path: "add-customer",
        element: <AddCustomer />,
      },
      {
        path: "expense",
        element: <Expense />,
      },
      {
        path: "add-expense",
        element: <AddExpense />,
      },
      {
        path: "update-customer",
        element: <UpdateCustomer />,
      },
      {
        path: "employee",
        element: <Employee />,
      },
      {
        path: "role",
        element: <Role />,
      },
      {
        path: "add-role",
        element: <AddRole />,
      },
      {
        path: "qutation",
        element: <Qutation />,
      },
      {
        path: "details",
        element: <Details />,
      },
      {
        path: "invoice",
        element: <Invoice />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
      {
        path: "add-employee",
        element: <AddEmployee />,
      },
      {
        path: "jobcard-list",
        element: <JobCardList />,
      },
    ],
  },
]);
