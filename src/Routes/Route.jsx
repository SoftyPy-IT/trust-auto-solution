import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import JobCardList from "../pages/Home/AddJobCard/JobCardList";
import AddEmployee from "../pages/Home/Employee/AddEmployee";
import ViewInvoice from "../pages/Home/Invoice/ViewInvoice";
import Detail from "../pages/Home/Invoice/Detail";
import UpdateInvoice from "../pages/Home/Invoice/UpdateInvoice";
import Invoice from "../pages/Home/Invoice/Invoice";
import QutationList from "../pages/Home/AddJobCard/QutationList";
import Details from "../pages/Home/AddJobCard/Details";
import UpdateQutation from "../pages/Home/AddJobCard/UpdateQutation";
import Qutation from "../pages/Home/AddJobCard/Qutation";
import AddRole from "../pages/Home/Role/AddRole";
import Role from "../pages/Home/Role/Role";
import Employee from "../pages/Home/Employee/Employee";
import UpdateCustomer from "../pages/Home/Customer/UpdateCustomer";
import AddExpense from "../pages/Home/Expense/AddExpense";
import Expense from "../pages/Home/Expense/Expense";
import AddCustomer from "../pages/Home/Customer/AddCustomer";
import Customer from "../pages/Home/Customer/Customer";
import Product from "../pages/Home/Products/Product";
import AddProduct from "../pages/Home/Products/AddProduct";
import Profile from "../pages/Home/Profile/Profile";
import UpdateJobCard from "../pages/Home/AddJobCard/UpdateJobCard";
import PreviewJobCard from "../pages/Home/AddJobCard/PreviewJobCard";
import ViewJobCard from "../pages/Home/AddJobCard/ViewJobCard";
import AddJobCard from "../pages/Home/AddJobCard/AddJobCard";
import Services from "../pages/Home/Services";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "additem",
      //   element: <AddItem/>,
      // },
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
        path: "preview",
        element: <PreviewJobCard />
      },
      {
        path: "update-job-card",
        element: <UpdateJobCard />,
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
        path: "update-qutation",
        element: <UpdateQutation />,
      },
      {
        path: "details",
        element: <Details />,
      },
      {
        path: "qutation-view",
        element: <QutationList />,
      },
      {
        path: "invoice",
        element: <Invoice />,
      },
      {
        path: "update-invoice",
        element: <UpdateInvoice />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
      {
        path: "invoice-view",
        element: <ViewInvoice />,
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
