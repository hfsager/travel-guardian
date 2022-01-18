import type { NextPage } from 'next';
import Navbar from '@components/NavBar';
import styled from '@emotion/styled';
import {Global, css} from '@emotion/react'

const Section = styled.section`
font-family: Helvetica;
text-align: center;
font-size: 70px;
margin-top: 50px;
`

const Home: NextPage = () => {
  return (
    <div>
    <Global styles={css`hmtl body {padding: 0, margin: 0, font-family: Helvetica}, a {color: black, text-decoration: none}, * {box-sizing: border-box}`}/>
    <Navbar/>
    <Section>THIS IS HOME</Section>
    <h1>Heroku</h1>
    </div>
  );
};;

export default Home;