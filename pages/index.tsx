import type { NextPage } from 'next';
import Link from 'next/Link'
import styles from '../styles/Home.module.css';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     <h1 className={styles.title}>THIS IS HOME </h1>
     <Link href='/test/first-post'>

     <a className={styles.description}>To the first page</a>
 
     </Link>
    </div>
  );
};

export default Home;
