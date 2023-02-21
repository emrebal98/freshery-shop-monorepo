import { type AppPropsType } from 'next/dist/shared/lib/utils';
// styles
import 'ui/styles.css';
import { Layout } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsType) {
  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
