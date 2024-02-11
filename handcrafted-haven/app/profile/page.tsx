import { Metadata } from 'next';
import SellerDetails from '../components/seller-details';

export const metadata: Metadata = {
  title: 'Product page',
};

export default function Page( ) {
  return <SellerDetails />;
}
