import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import PreOrder from "./components/order/PreOrder";
import Admin from "./components/AdminComponents/Admin";
import AdminCardForm from "./components/Login/AdminCardForm";
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
      path:"/admin",
      element:<Admin/>
    },
    {
      path:'/test',
      element:<AdminCardForm/>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
        
    </div>
  );
}

export default App;
