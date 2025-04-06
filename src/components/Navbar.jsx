"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ThemeSwitchDemo";
const Navbar = () => {
  const [shouldHide, setShouldHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setLastScrollY(window.scrollY);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShouldHide(true);
      } else if (currentScrollY < lastScrollY) {
        setShouldHide(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 w-full
          bg-slate-50
          dark:bg-gradient-to-r dark:from-black dark:via-gray-900 dark:to-black
         
          transition-all duration-700 ease-in-out
          ${
            shouldHide
              ? "transform -translate-y-full opacity-0"
              : "transform translate-y-0 opacity-100"
          }
        `}
      >
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-cyan-900/10 to-blue-100/5 opacity-50" />

        {/* Lightning effects on edges */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-full" />
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full" />

        {/* Main content */}
        <div className="relative w-full px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Left section - Logo with glow effect */}

            <div className="relative flex items-center">
              <img src="/main/igebraLogo.png" className="w-48  "></img>
            </div>

            {/* Center navigation links - visible on larger screens */}
            <div className="hidden lg:flex space-x-8">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Products", href: "/products" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 dark:text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Right section - Button with light effect */}
            <div className="flex items-center space-x-4">
              <ModeToggle />

              <button
              className="
              relative overflow-hidden bg-gradient-to-br from-purple-600 to-cyan-600
              text-white px-6 py-2 rounded-md transition-all duration-300 ease-in-out
              hover:from-purple-500 hover:to-cyan-500 hover:shadow-lg 
              dark:from-purple-800 dark:to-cyan-800 dark:hover:from-purple-700 dark:hover:to-cyan-700
              dark:hover:shadow-purple-800/30 hover:shadow-purple-500/30
                border border-purple-300/20 dark:border-gray-700 group hidden sm:block">
                <span className="relative z-10 text-white">Get Started</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 to-cyan-400 dark:from-purple-600 dark:to-cyan-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <span className="absolute -inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 dark:via-purple-500 to-transparent" />
                <span className="absolute -inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400 dark:via-cyan-500 to-transparent" />
              </button>

              {/* Mobile menu button */}
              <div
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
                onClick={toggleMenu}
              >
                <span
                  className={`bg-gray-300 h-0.5 w-6 rounded-lg transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-1.5" : "transform-none"
                  }`}
                />
                <span
                  className={`bg-gray-300 h-0.5 w-6 rounded-lg my-1 transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`bg-gray-300 h-0.5 w-6 rounded-lg transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-1.5" : "transform-none"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Animated line at bottom */}
        <div className="relative h-0.5 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-cyan-500 to-blue-300 animate-pulse" />
        </div>
      </nav>

      {/* Mobile menu overlay with CSS transitions */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden pt-20 bg-black bg-opacity-95 backdrop-blur-md
          transition-all duration-300 ease-in-out
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div
          className={`
          flex flex-col items-center p-8 space-y-6
          transition-all duration-300 ease-in-out
          ${menuOpen ? "translate-y-0" : "-translate-y-8"}
        `}
        >
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Products", href: "/products" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`
                text-xl text-gray-200 hover:text-cyan-400 
                transition-all duration-300
                ${menuOpen ? "opacity-100" : "opacity-0"}
              `}
              style={{
                transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
              }}
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
          <div
            className={`
            pt-6
            transition-all duration-300 ease-in-out delay-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }
          `}
          >
            <Button
              className="
                bg-gradient-to-r from-purple-700 to-cyan-700 text-white px-10 py-3 rounded-md 
                shadow-lg shadow-purple-900/30 hover:shadow-cyan-900/40 transition-all duration-300
              "
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Animated background elements - cosmic starfield effect */}
    </>
  );
};

export default Navbar;
