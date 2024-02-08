import { fetchReviewsByProductId } from '@/app/lib/data';
import Link from 'next/link';

export default async function ProductReviews({ id }: { id: string }) {
  const reviews = await fetchReviewsByProductId(id);
  return (
    <div className="mt-[3rem]">
      <h2 className="mb-4 text-2xl font-semibold underline">Reviews</h2>
      {reviews.length < 1 && (
        <Link href="/" className="text-light">
          Click here to add the first review
        </Link>
      )}
    </div>
  );
}
