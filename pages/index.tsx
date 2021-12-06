import type { NextPage } from 'next';
import Navbar from '../components/NavBar';
import styled from '@emotion/styled';
import styles from '../styles/Home.module.css';



const Content = styled('div')`
background-image: url('https://images.unsplash.com/photo-1638779687797-625ec73783be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80');
width: 100%;
`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    <Navbar/>
    </div>
  );
};;

export default Home;
