import React from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router";
import { PropertiesView } from "../modules/dashboard/components/PropertiesView";
import { Login } from "./Login";

export const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

const Layout = () => (
  <div>
    <Navbar />
    <div>
      <Outlet />
    </div>
  </div>
);

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

function Dashboard() {
  return <PropertiesView />;
}

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <Layout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
