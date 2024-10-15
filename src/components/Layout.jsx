import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet /> {/* Aquí se renderizan los componentes hijos (las rutas) */}
    </div>
  );
};

export default Layout;
