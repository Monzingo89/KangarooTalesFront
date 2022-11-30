import { Snackbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, Theme, ThemeProvider } from '@mui/material/styles';
import '@mui/styles';
import StylesProvider from '@mui/styles/StylesProvider';
import 'fontsource-roboto';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { AuthenticationProvider } from '../auth/AuthenticationProvider';
import Layout from '../components/layout/Layout';
import GlobalStyle from '../components/styles/GlobalStyle';
import store from '../redux/store';
import darkTheme from '../themes/darkTheme';

declare module '@mui/styles/defaultTheme' {
  type DefaultTheme = Theme;
}

const MtgCbWebApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <Snackbar>
          <StylesProvider injectFirst>
            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <GlobalStyle />
              <Provider store={store}>
                <AuthenticationProvider>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </AuthenticationProvider>
              </Provider>
            </ThemeProvider>
          </StylesProvider>
        </Snackbar>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MtgCbWebApp;
