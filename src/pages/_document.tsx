// @generated: @expo/next-adapter@2.1.41
import React from 'react';
import { Document } from '@expo/next-adapter/document';
import { Head, Html, Main, NextScript } from 'next/document';

/**
 * @returns {JSX.Element} The NextJS top-level document.
 */
export default class MyDocument extends Document {
  /**
   * @returns {JSX.Element} The NextJS top-level document.
   */
  render (): JSX.Element {
    return (
      <Html>
        <Head />
        <link rel="shortcut icon" href="/favicon.ico" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
