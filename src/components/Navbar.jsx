import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollNav = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Wait for navigation to complete
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
     <nav className="fixed left-0 w-full bg-white text-gray-700 shadow-md z-50 border-b border-gray-200 md:justify-end md:flex">
      <div className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4">

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 rounded-md hover:bg-indigo-50 hover:text-colour1 transition" onClick={() => handleScrollNav("home")}>Home</button>
          <button className="px-4 py-2 rounded-md hover:bg-indigo-50 hover:text-colour1 transition" onClick={() => handleScrollNav("work")}>Work</button>
          {/* <button className="px-4 py-2 rounded-md hover:bg-indigo-50 hover:text-colour1 transition" onClick={() => handleScrollNav("education")}>Education</button> */}
          <button className="px-4 py-2 rounded-md hover:bg-indigo-50 hover:text-colour1 transition" onClick={() => handleScrollNav("projects")}>Projects</button>
          <button className="px-4 py-2 rounded-md hover:bg-indigo-50 hover:text-colour1 transition" onClick={() => handleScrollNav("readings")}>Reading</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-4 pb-4 space-y-2">
          <button className="px-4 py-2 rounded-md hover:bg-indigo-50 hover:text-colour1 transition" onClick={() => handleScrollNav("home")}>Home</button>
          <button className="px-4 py-2 rounded-md hover:bg-indigo-50 hover:text-colour1 transition" onClick={() => handleScrollNav("work")}>Work</button>
          {/* <button className="px-4 py-2 rounded-md hover:bg-indigo-50 hover:text-colour1 transition" onClick={() => handleScrollNav("education")}>Education</button> */}
          <button className="px-4 py-2 rounded-md hover:bg-indigo-50 hover:text-colour1 transition" onClick={() => handleScrollNav("projects")}>Projects</button>
          <button className="px-4 py-2 rounded-md hover:bg-indigo-50 hover:text-colour1 transition" onClick={() => handleScrollNav("readings")}>Reading</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

