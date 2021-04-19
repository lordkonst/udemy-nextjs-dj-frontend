import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
export default Layout;

Layout.defaultProps = {
  title: 'DJ Events | Find the hotest parties',
  description: 'Find the lastest DJ and other musical events',
  keywords: 'music, dj, events',
};
