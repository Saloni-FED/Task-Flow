import Header from "./components/Header";
import { createBrowserRouter,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Auth from "./components/auth/Auth";
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
      }
    ]
  },
]);

export default router;
