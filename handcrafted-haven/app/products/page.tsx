import ProductList from '@/app/components/products/product-list';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Handcrafted Haven | Products',
};

export default function Page() {
  return <ProductList />;
}
