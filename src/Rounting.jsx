
// import React from 'react';
// import TopNabver from './Components/Navber/TopNavber/HomeNav'

// import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
// import Sidebar from './Components/Navber/Navber';
// import Home from './Components/Main/Home/Home';
// import About from './Components/Main/About/About';
// import Product from './Components/Main/Product/Product';
// import Contact from './Components/Main/Contact/Contact';

// import Footer from './Components/Footer/Footer';

// // import { useTranslation } from 'react-i18next';




// const router = createBrowserRouter([



//   {
//     path: "/",
//     element: <Layout />,
//     children: [

//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "Product",
//         element: <Product />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);



// function Layout() {



//   const { pathname } = useLocation();
//   const location = useLocation(); // You need this for the `Routes` key

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);



//   return (
//     <div className="App">
//       <Sidebar />
//       <main>
//         <TopNabver />
//         <Outlet />
//         <Footer />
//       </main>
//     </div>

//   );
// }




// const App = () => {
//   return (
//     <RouterProvider router={router} />

//   )
// };

// export default App;







import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import TopNavbar from './Components/Navber/TopNavber/HomeNav';
import Sidebar from './Components/Navber/Navber';
import Home from './Components/Main/Home/Home';
import About from './Components/Main/About/About';
import Product from './Components/Main/Product/Product';
import Contact from './Components/Main/Contact/Contact';
import Footer from './Components/Footer/Footer';

// Define routes
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
        path: "product", // Ensure route paths are consistently lowercase
        element: <Product />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

// Layout component
function Layout() {
  const { pathname } = useLocation(); // Get the current route

  // Scroll to the top when route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [pathname]);

  return (
    <div className="App">
      <Sidebar />
      <main>
        <TopNavbar />
        <Outlet /> {/* Renders the matched child route component */}
        <Footer />
      </main>
    </div>
  );
}

// Main App component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
