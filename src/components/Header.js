import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            NEYE
          </motion.div>

          {/* Theme Toggle right next to the logo */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Desktop Navigation (Centered) */}
        <div className="hidden md:flex items-center space-x-8 mx-auto">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <SocialIcon icon={<Github className="w-5 h-5" />} href="https://github.com/neyeah" />
          <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="https://linkedin.com/in/neyeah" />
          <SocialIcon icon={<Twitter className="w-5 h-5" />} href="https://twitter.com/neyehh" />
          <SocialIcon icon={<Mail className="w-5 h-5" />} href="mailto:arohchinenye895@gmail.com" />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            <NavLink href="#about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink href="#projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
            <NavLink href="#skills" onClick={() => setMenuOpen(false)}>Skills</NavLink>
            <NavLink href="#contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            <div className="pt-4">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

function SocialIcon({ icon, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}
