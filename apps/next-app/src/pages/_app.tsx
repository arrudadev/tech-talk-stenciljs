import type { AppProps } from 'next/app'

import { useEffect } from 'react';



export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const {
      applyPolyfills,
      defineCustomElements,
    } = require('@stencil-ui/core/loader');

    applyPolyfills().then(() => {
      defineCustomElements(window);
    });

    return () => {};
  }, []);

  return <Component {...pageProps} />
}
