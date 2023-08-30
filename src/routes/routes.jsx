import { createBrowserRouter } from "react-router-dom";
import Main from "../module/Main";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
  },
]);

export default routes;
