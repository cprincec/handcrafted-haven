import styles from '@/app/styles/home.module.css';
<div className={styles.shape} />;
import { lusitana } from '@/app/styles/fonts';
import Image from 'next/image';
import { Metadata } from 'next';
import PageLayout from './components/page-layout';
 
export const metadata: Metadata = {
  title: 'Handcrafted Haven | Home',
};

export default function Page() {
  return (
      <PageLayout>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-light px-6 py-10 md:w-2/5 md:px-20">
          <div/>
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Handcrafted Haven.</strong> Connect with creativity and browse handcrafted and handmade products.
          </p>  
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/images/girl-creating.webp"
            width={860}
            height={2000}
            className="md:block rounded-lg"
            alt="girl-creating"
          />
        </div>
      </div>
      </PageLayout>
  );
}
