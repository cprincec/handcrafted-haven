'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function ReviewButton() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleAddReview() {
    const params = new URLSearchParams(searchParams);
    params.set('reviewProduct', '1');
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <button onClick={handleAddReview} className="text-light">
      Click here to add the first review
    </button>
  );
}
