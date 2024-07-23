
import React from 'react';
import TopNabver from './Components/Navber/TopNavber/HomeNav'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Sidebar from './Components/Navber/Navber';
import Home from './Components/Main/Home/Home';
import About from './Components/Main/About/About';
import Product from './Components/Main/Product/Product';
import Contact from './Components/Main/Contact/Contact';

import Footer from './Components/Footer/Footer';

// import { useTranslation } from 'react-i18next';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Product",
        element: <Product />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);



function Layout() {


  return (
    <div className="App">
      <Sidebar />
      <main>
        <TopNabver />
        <Outlet />
        <Footer />
      </main>
    </div>

  );
}




const App = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default App;
