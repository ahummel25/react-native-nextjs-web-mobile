import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/global.css';

/**
 * @returns {JSX.Element} The NextJS top-level document.
 */
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default MyApp;
