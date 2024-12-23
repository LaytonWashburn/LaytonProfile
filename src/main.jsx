import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navbar } from './Components/Navbar.jsx';
import { Projects } from './Components/Projects.jsx';
import { Tutor } from "./Components/TypingTutor/Tutor.jsx"
import { Compiler } from './Components/Compiler/Compiler.jsx';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";


const router = createHashRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "/Projects",
        element: <Projects/>,    
      },
      {
        path: "/TypingTutor",
        element: <Tutor/>
      },
      {
        path: "/Compiler",
        element: <Compiler/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
)
