import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { ImCross } from "react-icons/im";
import MgLogo from "../../assets/mgicon.png"; // Update the path to your logo

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full ">

    <div className="container mx-auto  justify-between items-center w-full 2xl:w-4/5 h-16  flex z-10">
      <div className="flex items-center ">
        <img src={MgLogo} alt="MG LOGO" className="h-16 w-16 mx-4 filter invert" />
      </div>
      <div className="flex items-center w-2/3 h-full relative">
        <div className="hidden sm:flex gap-8 justify-end mx-auto w-4/5 px-4">
          <div className="text-navlintext">
            <a href="#about">About</a>
          </div>
          <div className="text-navlintext">
            <a href="#skill">Skills</a>
          </div>
          <div className="text-navlintext">
            <a href="#Projects">Projects</a>
          </div>
          <div className="text-navlintext">
            <a href="#contact">Contact</a>
          </div>
        </div>
        <button
          className="ml-auto text-xl text-white hover:text-white shadow-md mr-4 sm:hidden"
          onClick={handleMenuClick}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? <ImCross /> : <GrMenu />}
        </button>
        {/* Menu Items for Mobile */}
        {menuOpen && (
          <div className="fixed inset-0 bg-gray-900 shadow-lg flex flex-col z-20 sm:hidden">
            <button
          className="ml-auto text-xl text-black hover:text-white shadow-md mr-4 mt-4 sm:hidden"
          onClick={handleMenuClick}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        ><ImCross /> 
        </button>

            <div className="py-2  justify-center items-center gap-4 text-3xl h-full flex flex-col">
              <a
                href="#hero"
                className="px-4 py-2 text-white hover:bg-gray-600"
              >
                Home
              </a>
              <a
                href="#skill"
                className="px-4 py-2 text-white hover:bg-gray-600"
              >
                Skills
              </a>
              <a
                href="#Projects"
                className="px-4 py-2 text-white hover:bg-gray-600"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-white hover:bg-gray-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
      </div>
    </header>
  );
};

export default NavBar;
