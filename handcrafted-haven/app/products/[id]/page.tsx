import { Metadata } from 'next';
import ProductDetails from '@/app/components/products/product-details';
import ProductReviews from '@/app/components/products/product-reviews';

export const metadata: Metadata = {
  title: `{}`,
};

export default function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: {
    reviewProduct?: string;
  };
}) {

  
  return (
    <>
      <ProductDetails id={params.id} />
      <ProductReviews id={params.id} />
    </>
  );
}
