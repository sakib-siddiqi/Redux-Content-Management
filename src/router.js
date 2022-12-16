import { createBrowserRouter } from "react-router-dom";
import Main from "./views/layout/Main";
import TableView from "./views/TableView/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <h1 className="text-4xl font-bold text-indigo-500">HOME</h1>,
      },
      {
        path: "/table-view",
        element: <TableView />,
      },
    ],
  },
]);
export default router;
