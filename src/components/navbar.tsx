'use client'

import React, { useState } from 'react'
import Image from "next/image"
import { ModeToggle } from "./modeToogle"
import Link from "next/link"
import WalletButtons from "./walletButtons"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#", label: "Explore" },
    { href: "/#", label: "Stats" },
    { href: "/#", label: "My NFTs" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center px-7 py-6 max-sm:px-4 max-sm:py-4 relative">
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={10}
        className="w-100 h-8 object-cover"
      />
      
      {/* Desktop Navigation */}
      <div className="flex items-center gap-8 max-md:gap-6">
        <nav className="max-md:hidden">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <li className="text-16px font-semibold">{link.label}</li>
              </Link>
            ))}
          </ul>
        </nav>
        
        <div className="max-md:hidden flex items-center gap-4">
          <WalletButtons />
          <ModeToggle />
        </div>

        {/* Mobile Menu Container */}
        <div className="md:hidden relative">
          <div className="flex items-center gap-4">
            <WalletButtons />
            
            {/* Menu Toggle Button */}
            <button 
              onClick={toggleMenu} 
              className="z-50 relative"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Overlay */}
          {isMenuOpen && (
            <div 
              className="
                fixed inset-0 bg-black/50 z-40
                transition-opacity duration-300 ease-in-out
              "
              onClick={toggleMenu}
            />
          )}

          {/* Mobile Menu Drawer */}
          <div 
            className={`
              fixed top-0 right-0 w-64 h-full 
              bg-white dark:bg-grey-back
              transform transition-transform duration-300 ease-in-out
              z-50 shadow-lg
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            {/* Close Button */}
            <button 
              onClick={toggleMenu} 
              className="absolute top-4 right-4 z-50"
            >
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Mobile Menu Content */}
            <div className="flex flex-col p-6 pt-16 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={toggleMenu}
                    className="
                      text-gray-700 dark:text-gray-300
                      hover:text-blue-600 dark:hover:text-blue-400
                      transition-colors duration-300
                      text-lg block py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Mode Toggle */}
              <div className="mt-4">
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;