'use client';

import { reviewProduct } from '@/app/lib/actions';
import { lusitana } from '@/app/styles/fonts';
import { useState } from 'react';
import { useFormState } from 'react-dom';

export default function ProductReviewForm({
  productId,
}: {
  productId: string;
}) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const initialState = { message: null, errors: {} };

  const [state, dispatch] = useFormState(
    (prevState: {}, payload: FormData) =>
      reviewProduct(productId, prevState, payload),
    initialState,
  );

  return (
    <form
      action={(payload) => {
        setRating(0);
        setComment('');
        dispatch(payload);
      }}
      className="mt-8"
    >
      <div className="rounded-lg bg-light px-6 py-4 md:max-w-[32%]">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>Review form</h1>
        <div className="flex items-center gap-1">
          <label htmlFor="rating">Rating:</label>
          <input type="text" name="rating" value={rating} hidden readOnly />
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRatingChange(star)}
                className={`text-2xl`}
                style={{
                  cursor: 'pointer',
                  color: star <= rating ? 'gold' : 'gray',
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="mt-2 flex flex-col">
          <label htmlFor="comment">Review:</label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 rounded-md bg-brown px-4 py-2 text-light"
        >
          Add Review
        </button>
      </div>
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      ></div>
    </form>
  );
}
