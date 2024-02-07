'use client';

import styles from '@/app/styles/home.module.css';
import ProductList from '@/app/components/product-list';
import { products } from '@/app/components/product-list';
import { Metadata } from 'next';
import PageLayout from '@/app/components/page-layout';
import { useParams } from 'next/navigation';
import Image from 'next/image';

// export const metadata: Metadata = {
//   title: 'Handcrafted Haven | Products',
// };

function getProductById(id: Number) {
  return products.find((product) => product.id === id);
}

export default function Page() {
  const params = useParams();
  const product = getProductById(Number(params.id));

  return (
    <>
      <PageLayout>
        {product && (
          <div className="container mx-auto bg-lightGreen p-4 md:mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:max-w-1/2 mb-6 max-w-full md:mb-0">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col text-white">
                <h1 className="mb-2 text-2xl font-bold md:text-3xl">
                  {product?.name}
                </h1>
                <p className="mb-4">{product?.description}</p>
                <p className="mb-2">Seller: {product?.seller}</p>
                <p className="text-xl font-bold text-dark">${product?.price}</p>
              </div>
            </div>
            {/* Add a section for reviews or other content */}
            <div className="mt-[3rem]">
              <h2 className="text-2xl font-semibold underline">Reviews</h2>
            </div>
          </div>
        )}
      </PageLayout>
    </>
  );
}
