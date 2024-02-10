// 'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import HandcraftedHavenLogo from './handcraftedhavenlogo';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

export default function Navbar({ loggedInUser }: { loggedInUser: {} | null }) {
  console.log(loggedInUser);
  // const [isOpen, setIsOpen] = useState(false);
  // const session = await auth();
  return (
    <nav className="sticky start-0 top-0 z-20 max-h-[150px] w-full  bg-light ">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <HandcraftedHavenLogo />
        {/* <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}> */}
        {/* Hamburger Icon */}
        {/* <svg
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
        </svg> */}
        {/* </button> */}
        <div
          className={`
          
          flex-col md:flex md:flex-row md:items-center md:space-x-8`}
        >
          <Link href="/" className="text-dark hover:text-gray-700 hover:italic">
            Home
          </Link>
          <Link href="/products" className="text-dark hover:text-gray-700 hover:italic">
            Products
          </Link>
          <Link href="/sellersproducts" className="text-dark hover:text-gray-700 hover:italic">
            Sellers Products
          </Link>

          <Link href="/sellers" className="text-dark hover:text-gray-700 hover:italic">
            Sellers
          </Link>
          {loggedInUser ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </nav>
  );
}

// ${
//   isOpen ? 'flex' : 'hidden'
// }
