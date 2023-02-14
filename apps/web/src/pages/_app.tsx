import { type AppPropsType } from 'next/dist/shared/lib/utils';
// styles
import 'ui/styles.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsType) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
