import type { NextPage } from 'next';
import Navbar from '../components/NavBar';
import styled from '@emotion/styled';
import styles from '../styles/Home.module.css';

const Section = styled.section`
font-family: Helvetica;
text-align: center;
font-size: 70px;
margin-top: 50px;
`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
    <Navbar/>
    <Section>THIS IS HOME</Section>
    </div>
  );
};;

export default Home;
