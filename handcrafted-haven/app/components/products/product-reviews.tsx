import { fetchReviewsByProductId } from '@/app/lib/data';
import { ReviewButton } from './product-buttons';
import { getSession } from 'next-auth/react';
import { auth } from '@/auth';
import ProductReviewForm from './product-review-form';

export default async function ProductReviews({ id }: { id: string }) {
  const reviews = await fetchReviewsByProductId(id);
  const session = await auth();

  return (
    <div className="mt-[3rem]">
      <h2 className="mb-4 text-2xl font-semibold underline">Reviews</h2>
      {reviews.length < 1 && (
        <p>No reviews yet. Be the first to review this product</p>
      )}
      {session?.user ? <ProductReviewForm productId={id} /> : <ReviewButton />}
    </div>
  );
}
