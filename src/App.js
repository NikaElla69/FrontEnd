import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import SimuleteApi from "./components/SimuleteApi";
import ToDoList from "./pages/ToDoList";
import React from "react";
import Home from "./pages/Home";
import List from "./pages/List";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
])


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
