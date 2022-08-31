import { useState } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import memories from "../assets/images/memories.jpeg";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/" },
    { name: "Blog", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className="shadow-md relative w-full bg-[#4292c0]">
      <div className="md:flex justify-between py-4 md:px-10 px-4">
        <div className="flex items-center font-bold cursor-pointer">
          <div className="hidden w-[75px] h-auto mr-4 md:block">
            <img src={memories} alt="Memories" className="rounded-full" />
          </div>
          <h1 className="md:text-4xl text-3xl title-font">Memories</h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          {open ? <FaRegWindowClose /> : <FaBars />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-4 md:static absolute bg-[#4292c0] md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all duration-300 ease-in ${
            open ? "top-[60px] opacity-100" : "top-[-500px] opacity-0"
          } md:opacity-100`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-6">
              <a
                href={link.link}
                className="hover:text-gray-700 duration-200 font-bold"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="md:ml-8 text-xl md:my-0 my-6">
            <a
              href="/login"
              className="hover:text-gray-700 duration-200 font-bold"
            >
              Login
            </a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-6 border-2 p-2 rounded-sm border-black hover:border-white hover:text-gray-700 duration-200 font-bold md:mr-0 mr-4 text-center">
            <a
              href="/register"
              className=""
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
