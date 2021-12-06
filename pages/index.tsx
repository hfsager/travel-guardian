import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    <Navbar/>
    <Section>THIS IS HOME</Section>
    <h1>Heroku</h1>
    </div>
  );
};

export default Home;
