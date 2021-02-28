import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import styled from 'styled-components/native';

import { useWindowDimensions } from '../hooks';
import { breakpoints as bp } from '../styles/variables';
import { ContainerProps } from '../interfaces';

import '../styles/global.css';

const Container = styled.View<ContainerProps>`
  flex: 1;
  margin: auto;
  width: ${(props): string => props.containerWidth};
`;
/**
 * @returns {JSX.Element} The NextJS top-level document.
 */
const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { width } = useWindowDimensions();
  const [containerWidth, setContainerWidth] = useState<string>('');

  useEffect((): void => {
    // Set to 75% if rendered on a mobile browser, but not the native OS (android, iOS)
    if (width < bp.md) {
      setContainerWidth('75%');
    } else if (width >= bp.md && width <= bp.xl) {
      setContainerWidth('45%');
    } else {
      setContainerWidth('25%');
    }
  }, [width]);

  return (
    <Container containerWidth={containerWidth}>
      <Component {...pageProps} />
    </Container>
  );
};

export default App;
