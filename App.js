// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import About from './src/Components/About';
import Footer from './src/Components/Footer';
import Contact from './src/Components/Contact';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from './src/Components/Error';
import RestaurantMenu from './src/Components/RestaurantMenu';
import Profile from './src/Components/Profile';
import { Provider } from 'react-redux';
import appStore from './src/utils/appStore';
import Cart from './src/Components/Cart';

const App = () => {
  return (
    <Provider store={appStore}>
      <>
      <Header />
      <Outlet />
      <Footer />
      </>
    </Provider>
  );
}; 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
        index: true // This makes it the default child route
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

