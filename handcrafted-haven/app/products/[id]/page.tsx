import { Metadata } from 'next';
import ProductDetails from '@/app/components/products/product-details';

export const metadata: Metadata = {
  title: `{}`,
};

export default function Page({ params }: { params: { id: string } }) {
  return <ProductDetails id={params.id} />;
}
