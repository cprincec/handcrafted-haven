import { fetchReviewsByProductId } from '@/app/lib/data';
import { ReviewButton } from './product-buttons';
import { auth } from '@/auth';
import ProductReviewForm from './product-review-form';
import { Review } from '@/app/lib/definitions';
import { table } from 'console';

export default async function ProductReviews({ id }: { id: string }) {
  const reviews = await fetchReviewsByProductId(id);
  const session = await auth();

  return (
    <div className="mx-3 mt-[3rem]">
      <h2 className="mb-4 text-2xl font-semibold underline">Reviews</h2>
      {reviews.length < 1 ? (
        <p className="mb-8 text-light">
          No reviews yet. Be the first to review this product
        </p>
      ) : (
        <ul className="flex flex-col gap-4">
          {reviews.map((review: Review) => {
            const ratingStars = [];
            for (let i = 0; i < review.rating; i++) ratingStars.push('★');
            return (
              <li key={review.id} className="bg-light p-4">
                <div className="flex gap-6">
                  <p>{review.name}</p>
                  <p>{new Date(review.created_at).toLocaleDateString()}</p>
                </div>
                <div>
                  {ratingStars.map((star) => (
                    <span key={star} className={`text-2xl text-yellow-300`}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg text-green-600">{review.comment}</p>
              </li>
            );
          })}
        </ul>
      )}
      {session?.user ? <ProductReviewForm productId={id} /> : <ReviewButton />}
    </div>
  );
}
