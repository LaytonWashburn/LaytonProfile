import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Navbar } from './Components/Navbar.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Navbar/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
)
