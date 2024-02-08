'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import HandcraftedHavenLogo from './handcraftedhavenlogo';
import LoginButton from './login-button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky start-0 top-0 z-20 max-h-[150px] w-full border-b border-gray-200 bg-light dark:border-gray-600">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <HandcraftedHavenLogo />
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* Hamburger Icon */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row md:items-center md:space-x-8`}
        >
          <Link href="/" className="text-dark hover:text-gray-700">
            Home
          </Link>
          <Link href="/products" className="text-dark hover:text-gray-700">
            Products
          </Link>
          <Link href="/sellers" className="text-dark hover:text-gray-700">
            Sellers
          </Link>
          <LoginButton />
        </div>
      </div>
    </nav>
  );
}
