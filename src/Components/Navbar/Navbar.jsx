import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "/dashboard", name: "Dashboard", id: 5 },
  ];

  return (
    <>
      <nav className="bg-amber-500 p-6">
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open === true ? <IoMdClose size={22} /> : <IoMdMenu size={22} />}
        </div>
        <ul
          className={`absolute bg-yellow-200 px-6 text-black shadow-lg duration-1000 md:static md:flex ${open ? "top-16" : "-top-60"}`}
        >
          {routes.map((route, index) => (
            <Link key={index} route={route} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
