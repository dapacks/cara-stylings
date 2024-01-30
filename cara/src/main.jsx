import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./routes/Home.jsx";
import Shop from "./Routes/shop.jsx";
import Blog from "./Routes/Blog.jsx";
import About from "./Routes/About.jsx";
import Contact from "./Routes/Contact.jsx";
import Cart from "./Routes/Cart.jsx";
import "./index.css";
import caraStore from "./Store/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index:true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "blog", element: <Blog /> },
      { path: "about", element: <About/> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={caraStore}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
