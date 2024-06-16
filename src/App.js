import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import PreOrder from "./components/order/PreOrder";
import Admin from "./components/AdminComponents/Admin";
import AdminCardForm from "./components/Login/AdminCardForm";
import AdminHome from "./components/AdminComponents/AdminHome";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/preOrder',
      element:<PreOrder/>
    },
    {
      path:"/adminAddForm",
      element:<Admin/>
    },
    {
      path:'/test',
      element:<AdminCardForm/>
    },
    {
      path:'/adminHome',
      element:<AdminHome/>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
        
    </div>
  );
}

export default App;
