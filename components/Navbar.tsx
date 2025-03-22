"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50`}
      animate={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(9, 9, 9, 0)",
        boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-white">
            Bandipur House
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLinks />
          </div>
          <button
            className="md:hidden text-white focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute top-6 right-6 text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </motion.button>
            <NavLinks mobile onClick={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLinks = ({ mobile = false, onClick = () => {} }) => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Crew", href: "/crew" },
    { label: "Clubs", href: "/clubs" },
  ];

  return (
    <motion.div
      className={`${
        mobile ? "flex flex-col items-center space-y-8" : "flex space-x-4"
      }`}
      initial={mobile ? { opacity: 0, y: 20 } : {}}
      animate={mobile ? { opacity: 1, y: 0 } : {}}
      exit={mobile ? { opacity: 0, y: 20 } : {}}
      transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
    >
      {links.map(({ label, href }, index) => (
        <motion.div
          key={label}
          initial={mobile ? { opacity: 0, y: 20 } : {}}
          animate={mobile ? { opacity: 1, y: 0 } : {}}
          exit={mobile ? { opacity: 0, y: 20 } : {}}
          transition={{ duration: 0.3, delay: mobile ? 0.1 * index : 0 }}
        >
          <Link
            href={href}
            className={`text-white hover:text-gray-300 ${
              mobile ? "text-3xl" : ""
            }`}
            onClick={onClick}
          >
            {label}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Navbar;
