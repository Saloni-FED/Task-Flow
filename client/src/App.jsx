import Header from "./components/Header";
import { createBrowserRouter,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Auth from "./components/auth/Auth";
import Dashboard from "./components/dashboard/Dashboard";
import Tasks from "./components/auth/posts/Tasks";
function App() {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children:[
      {
         path: 'auth',
         element: <Auth/>
      },
      {
        path: 'dashboard',
        element: <Dashboard/>
     },
     {
      path:'createTask',
      element: <Tasks/>
     }
    ]
  },
]);

export default router;
