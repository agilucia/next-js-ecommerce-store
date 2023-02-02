'use client';

import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function CookieBanner() {
  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] = useState(false);

  // this only exists on the clien/browser
  useEffect(() => {
    // this function triggers on first render

    // check if there is a localStorage field for the CookieBanner
    const localStorageValue = getLocalStorage('areCookiesTermsAccepted');
    // If not then initial value is false
    // If yes then the initial value is what is stored in the browser
    const initialState =
      localStorageValue === undefined ? false : localStorageValue;

    setAreCookiesTermsAccepted(initialState);
  }, []);

  return (
    !areCookiesTermsAccepted && (
      <>
        <div>This is the cookie Police. Please accept terms and conditions</div>
        <button
          onClick={() => {
            setAreCookiesTermsAccepted(true);
            setLocalStorage('areCookiesTermsAccepted', true);
          }}
        >
          Accept
        </button>
      </>
    )
  );
}
