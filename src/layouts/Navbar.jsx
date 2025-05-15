import React, { useState } from 'react';
import Menu from '../components/Menu.jsx';
import AuthBtn from '../components/AuthBtn.jsx';
import menuImg from "../assets/ci_hamburger-lg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="wrapper">
      <nav className="container mx-auto">
        <section>
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold">Shortly</h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              <Menu />
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex">
              <AuthBtn />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                <img src={menuImg} alt="menu" />
              </button>
            </div>
          </div>

          {/* Mobile Dropdown (Modal Style) */}
          {isOpen && (
            <div className="absolute top-20 left-5  w-full max-w-[90%] h-70vh bg-[#3b3054] flex flex-col items-center justify-center space-y-6 z-50 rounded-lg px-8 py-4">
              <button href="#" className="text-lg font-bold text-white  hover:bg-[#73D7D8]   hover:rounded-full w-full px-6 py-2">Features</button>
              <button href="#" className="text-lg font-bold  hover:bg-[#73D7D8] hover:rounded-full w-full px-6 py-2   text-white">Pricing</button>
              <button href="#" className="text-lg font-bold  hover:bg-[#73D7D8] hover:rounded-full w-full px-6 py-2  text-white">Resources</button>
              <hr className="w-full border-gray-500 my-2" />
              <button className="text-lg text-white  font-bold hover:bg-[#73D7D8] hover:rounded-full w-full px-6 py-2 ">Login</button>
              <button className="text-white hover:bg-[#73D7D8]  hover:rounded-full px-6 py-2 font-bold w-full">Sign Up</button>
            </div>
          )}
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
