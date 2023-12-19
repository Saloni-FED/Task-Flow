import Header from "./components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Auth from "./components/auth/Auth";
import Dashboard from "./components/dashboard/Dashboard";
import Tasks from "./components/task/Tasks";
import GetAllTask from "./components/task/AllTask";
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    errorElement: <Error />,
  },
  {
    path: "/main",
    element: <Header />,
    children: [
      {
        path: "create",
        element: <Tasks />,
      },
      {
        path:'getalltask',
        element: <GetAllTask/>
      }
    ],
  },
]);

export default router;
