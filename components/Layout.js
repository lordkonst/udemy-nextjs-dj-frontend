import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
import Showcase from './Showcase';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' ? <Showcase /> : null}

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;

Layout.defaultProps = {
  title: 'DJ Events | Find the hotest parties',
  description: 'Find the lastest DJ and other musical events',
  keywords: 'music, dj, events',
};
