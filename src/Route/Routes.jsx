import { createBrowserRouter } from "react-router-dom";
import MainLayOutes from "../Layouts/MainLayOutes";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCards from "../Components/CoffeeCards";
import CoffeeDetails from "../Pages/CoffeeDetails";

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayOutes></MainLayOutes>,
      errorElement: <div>You come in a wrong route</div>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader: ()=> fetch('../categories.json'),
          children:[
            {
              path:'/',
              element: <CoffeeCards></CoffeeCards>,
              loader: ()=> fetch('../coffees.json')
            },
            {
              path:'/category/:category',
              element: <CoffeeCards></CoffeeCards>,
              loader: ()=> fetch('../coffees.json')
            },
          ]
        },
        {
          path:'/coffees',
          element:<Coffees></Coffees>,
          loader: ()=> fetch('../coffees.json')
        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>
        },
        {
          path: '/coffees/:id',
          element: <CoffeeDetails></CoffeeDetails>,
          loader: ()=> fetch('../coffees.json')
        }
      ]
    }
  ])

export default routes;