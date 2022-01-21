import Head from 'next/head';

import GlobalStyles from '@styles/globalStyles';
import theme from '@styles/theme';
import { ThemeProvider } from 'styled-components';
import { ToDoProvider } from '@hooks/useTodo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>To Do Test</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToDoProvider>
          <Component {...pageProps} />
        </ToDoProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
