'use client';

import { useRouter } from 'next/navigation';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default function deleteProduct(props) {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          // get the cookie
          const productsInCookies = getParsedCookie('cart');
          const foundProduct = productsInCookies.filter((productInCookie) => {
            return productInCookie.id !== props.product.id;
          });

          setStringifiedCookie('cart', foundProduct);
          router.refresh();
        }}
      >
        Remove
      </button>
    </div>
  );
}
