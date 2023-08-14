import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  { path: "/", element: <div>Home</div> },
  { path: "/login", element: <div>Login</div> },
]);
const MyRoutes = () => <RouterProvider router={routes} />;

export default MyRoutes;
