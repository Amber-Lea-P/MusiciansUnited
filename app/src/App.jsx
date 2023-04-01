import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from "./pages/home/Home"
import Footer from './components/footer/Footer';
import Gigs from "./pages/gigsCategories/Gigs";
import Gig from "./pages/gigMusician/Gig";
import Orders from "./pages/orders/Orders"
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import "./app.scss";
import Login from './pages/login/Login';
import Register from "./pages/register/Register";

function App() {

  const Layout =() =>{
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/gig/:id",
          element: <Gig />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/mygigs",
          element: <MyGigs />
        },
        
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ]
    },
  ]);

  return (
    <div>
       <RouterProvider router={router} />
    </div>
    
  )
}

export default App
