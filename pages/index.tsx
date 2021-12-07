import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
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
    <h1>Heroku</h1>
    </div>
  );
};;

export default Home;