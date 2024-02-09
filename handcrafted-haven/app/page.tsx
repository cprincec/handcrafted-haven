import styles from '@/app/styles/home.module.css';
import Link from 'next/link';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Handcrafted Haven | Home',
};

export default function Page() {
  return (
    <>
      <div className="mt-6 rounded-lg bg-light px-6 py-10 border border-dark text-xl text-gray-800 md:text-3xl md:leading-normal md:px-20">
        <strong>Welcome to Handcrafted Haven.</strong> Connect with creativity
        and browse handcrafted and handmade products.
      </div>
      
      <div className='flex justify-center space-x-10'>
        <Link href={'/sellers'}><button className="mt-6 rounded-lg bg-brown px-6 py-10 border border-dark text-xl text-light md:text-3xl md:leading-normal md:px-20 hover:italic hover:text-dark">
          Sellers
        </button>
        </Link>
        <Link href={'/products'}><button className="mt-6 rounded-lg bg-brown px-6 py-10 border border-dark text-xl text-light md:text-3xl md:leading-normal md:px-20 hover:italic hover:text-dark">
          Shop
        </button>
        </Link>     
      </div>
  
      <div className="mt-14 flex flex-col items-stretch align-center gap-4 md:flex-row md:h-1/2">
        <div className="flex items-center justify-center md:h-full md:w-3/5">
          <img
            src="/images/girl-creating.jpg"
            alt="girl-creating"
            className="h-full w-full border border-dark mx-2 rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center justify-center md:h-full md:w-3/5">
          <img
            src="/images/crafts.webp"
            alt="crafts"
            className="h-full w-full mx-2 border border-dark rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}
