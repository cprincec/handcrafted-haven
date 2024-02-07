import styles from '@/app/styles/home.module.css';
<div className={styles.shape} />;
import ProductList from '@/app/components/product-list';
import { Metadata } from 'next';
import PageLayout from '@/app/components/page-layout';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Products',
};

export default function Page() {
  return (
    <>
      <PageLayout>
        <ProductList />
      </PageLayout>
    </>
  );
}
