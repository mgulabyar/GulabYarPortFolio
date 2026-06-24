import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Hero from "../main/Hero";
import About from "../main/About";
import Contact from "../main/Contact";
import Header from "../Navbar/Header";
import Expertise from "../main/Expertise";
import Projects from "../main/Projects";
import ProjectDetail from "../main/ProjectDetail";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/expertise", element: <Expertise /> },
      { path: "/projects", element: <Projects /> },
      { path: "project/:id", element: <ProjectDetail /> },
    ],
  },
]);



const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;


