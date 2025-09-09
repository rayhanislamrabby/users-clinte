import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout.jsx";
import NewUsers from "./Components/NewUsers.jsx";
import DeleteUsers from "./Components/DeleteUsers.jsx";
import UpdateUsers from "./Components/UpdateUsers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    loader: () => fetch("http://localhost:5000/users"),
  },

  {
    path: "newusers",
    element: <NewUsers></NewUsers>,
  },
  {
    path: "deleteusers",
    element: <DeleteUsers></DeleteUsers>,
  },
  {
    path: "updateusers/:id",

    element: <UpdateUsers></UpdateUsers>,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
