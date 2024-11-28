import React, { useState } from "react";

const Navbar = () => {
  
  const [activeSection, setActiveSection] = useState("home");

  
  const handleClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-50 dark:bg-zinc-900" id="nav">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center justify-center">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Projects", id: "projects" },
              { name: "Contact", id: "contact" },
            ].map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleClick(id)}
                  className={`${
                    activeSection === id
                      ? "text-emerald-600 dark:text-emerald-400 "
                      : "text-gray-900 dark:text-white hover:underline"
                  }`}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
