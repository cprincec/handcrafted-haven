'use client';

import { lusitana } from '@/app/styles/fonts';
import { useState } from 'react';
import { useFormState } from 'react-dom';

export default function ProductReviewForm({
  productId,
}: {
  productId: string;
}) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data before submitting
    if (rating < 1 || rating > 5 || !review.trim()) {
      // Handle validation error
      return;
    }

    // Call the onSubmit callback with the review data
    // onSubmit({ rating, review });

    // Clear form after submission
    setRating(0);
    setReview('');
  };
  const reviewProduct = (prevstate, fromData) => {
    return prevstate;
  };
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(reviewProduct, initialState);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>Review form</h1>
        <div className="flex gap-1">
          <label htmlFor="rating">Rating:</label>
          <input type="text" name="rating" value={rating} hidden />
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRatingChange(star)}
                className={`cursor-pointer ${
                  star <= rating ? 'text-gold' : 'text-gray'
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <button type="submit">Submit Review</button>
      </div>
      {/* <LoginButton /> */}
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {/* {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )} */}
      </div>
    </form>
  );
}
