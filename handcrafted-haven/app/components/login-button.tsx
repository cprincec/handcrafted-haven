import React from 'react';
import Link from 'next/link';

export default function LoginButton() {
  return (
    <div>
      <Link
        href="/login"
        className="flex items-center gap-5 self-start rounded-lg bg-brown text-sm font-medium text-light transition-colors hover:bg-light hover:italic hover:text-brown hover:outline hover:outline-1 hover:outline-brown md:text-base"
      >
        <button
          type="button"
          className="flex-shrink-0 whitespace-nowrap px-4 py-2 dark:focus:ring-dark "
        >
          <span>Seller Log in</span>
        </button>
      </Link>
    </div>
  );
}
