import { AppProps } from 'next/app';

import '../styles/main.css';
import '../components/styles.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
