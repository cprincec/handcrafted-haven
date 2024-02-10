import Link from 'next/link';

export default function LoginButton() {
  return (
    <div>
      <Link
        href="/login"
        className="flex items-center gap-5 self-start rounded-lg bg-brown text-sm font-medium text-light transition-colors  hover:italic hover:text-dark hover:outline hover:outline-1 hover:outline-brown md:text-base"
      >
        <button
          type="button"
          className="flex-shrink-0 whitespace-nowrap px-4 dark:focus:ring-dark "
        >
          <span className="hover:text-dark">Log in</span>
        </button>
      </Link>
    </div>
  );
}
