import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/global.css';

/**
 * @returns {JSX.Element} The NextJS top-level document.
 */
function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
