import styles from '@/app/styles/home.module.css';
<div className={styles.shape} />;
import Navbar from '@/app/components/navbar';
import ProductList from '@/app/components/product-list';
import { Metadata } from 'next';
import sellersPage from './mandyStuff/components/sellersPage';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Products',
};

export default function Page() {
    return (
      <main className="flex min-h-screen flex-col p-6 bg-lightGreen">
        
        <Navbar />
        <ProductList />
        <sellersPage/>
      </main>
    )
  }