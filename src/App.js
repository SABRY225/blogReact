// App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Articles from "./component/Pages/Articles";
import Courses from "./component/Pages/Courses";
import Project from "./component/Pages/Project";
import Contact from "./component/Pages/Contact";
import BlogNav from "./component/BlogNav";
import NewPost from "./component/Pages/NewPost"
const App = () => {
  const routes =createBrowserRouter([
    {
      path:"/" ,element:<BlogNav />,children:[
        {index:true, element:<Articles />},
        {path:"courses" ,element:<Courses />},
        {path:"project" ,element:<Project />},
        {path:"contact" ,element:<Contact />}
      ]
    },
    {
      path:"/article" ,element:<BlogNav />,children:[
        {path:"new" ,element:<NewPost />},
      ]
    },
  ])
	return (
		<div className="main-container" >
    <RouterProvider router={routes} />
		</div>
	);
};

export default App;

