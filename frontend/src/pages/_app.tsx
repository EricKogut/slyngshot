import { ChakraProvider } from '@chakra-ui/react';

import { AppProps } from 'next/app';
import 'routes/routes.config';
import theme from '../theme/theme';

import { withNextRouter } from '@nx/next-router';
import Navbar from 'components/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default withNextRouter(MyApp);
