import styles from '@/app/styles/home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Home',
};

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <div className="ml-14 flex flex-col justify-center gap-4 rounded-lg bg-light px-6 py-10 md:w-2/5 md:px-20">
        <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
          <strong>Welcome to Handcrafted Haven.</strong> Connect with creativity
          and browse handcrafted and handmade products.
        </p>
      </div>
      <div className="flex items-center justify-center md:h-full md:w-3/5">
        <img
          src="/images/girl-creating-440x660.jpg"
          alt="girl-creating"
          style={{ maxWidth: '80%' }}
          className=" mx-2 rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
