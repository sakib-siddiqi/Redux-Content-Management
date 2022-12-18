import { createBrowserRouter } from "react-router-dom";
import ErrorHandler from "./views/Error-Handler/ErrorHandler";
import Main from "./views/layout/Main";
import Home from "./views/pages/Home/Index";
import Cart from "./views/pages/Purchase/Cart";
import TableView from "./views/TableView/Index";

const notFoundError = new Error("404 not found.");
notFoundError.code = 404;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/table-view",
        element: <TableView />,
      },
      {
        path: "/cart",
        element: <Cart />,
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
