
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import TopNavbar from './Components/Navber/TopNavber/HomeNav';
import Sidebar from './Components/Navber/Navber';
import Home from './Components/Main/Home/Home';
import About from './Components/Main/About/About';
import Product from './Components/Main/Product/Product';
import Contact from './Components/Main/Contact/Contact';
import Footer from './Components/Footer/Footer';
import PreLoader from './Components/PreLoader';


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
        path: "product",
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

  const location = useLocation();
  const [loading, setLoading] = useState(true);


  const pageVariants = {
    initial: {
      opacity: 0,
      y: 50, // Start from slightly below
    },
    animate: {
      opacity: 1,
      y: 0, // End at the original vertical position
      transition: {
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    exit: {
      opacity: 0,
      y: -50, // Move up slightly as it exits
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">

      {loading ? <PreLoader />
        :
        <AnimatePresence mode="wait">
          <main>
            <Sidebar />
            <TopNavbar />

            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              key={location.pathname} // Ensures AnimatePresence detects route changes
            >
              <Outlet />
            </motion.div>
            <Footer />
          </main>
        </AnimatePresence>

      }
    </div>
  );
}

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
