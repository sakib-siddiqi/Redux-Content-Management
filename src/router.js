import { createBrowserRouter } from "react-router-dom";
import ErrorHandler from "./views/Error-Handler/ErrorHandler";
import Dashboard from "./views/layout/Dashboard";
import Main from "./views/layout/Main";
import Home from "./views/pages/Home";
import DashboardIndex from "./views/Dashboard";
import Cart from "./views/pages/Purchase/Cart";
import Shop from "./views/pages/Shop";
import TableView from "./views/TableView";
import DashboardProducts from "./views/Dashboard/Products";

const notFoundError = new Error("404 not found.");
notFoundError.code = 404;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/table-view",
        element: <TableView />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorHandler />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardIndex/>,
      },
      {
        path: "/dashboard/products",
        element: <DashboardProducts />,
      },
    ],
    errorElement: <ErrorHandler />,
  },
  {
    path: "*",
    element: <ErrorHandler error={notFoundError} />,
  },
]);
export default router;
