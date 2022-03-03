import type { NextPage } from 'next';
import Navbar from '@components/Navbar';
import styled from '@emotion/styled';
import LoginForm from '@components/LoginForm';
import { Global, css } from '@emotion/react';
import SearchBar from '@components/SearchBar';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <Global
          styles={css`hmtl body {padding: 0, margin: 0, font-family: Helvetica}, a {color: black, text-decoration: none}, * {box-sizing: border-box}`}
        />
        <Navbar data-test-id="navbar" />
        <Title>
          <div data-test-id="header">
            <span>TRAVEL</span>
            <FontAwesomeIcon icon={faPaw} size="1x" />
            <span>MATE</span>
          </div>
        </Title>
        <Subtitle>
          <span> CONNECT WITH SHELTERS</span>
        </Subtitle>
        <SubtitleTwo>
          <span>BECOME A TRAVEL GUARDIAN FOR ADOPTED ANIMALS</span>
        </SubtitleTwo>
        <SearchbarStyled>
          <SearchBar />
        </SearchbarStyled>
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = styled.div``;

const Title = styled.h1`
  font-family: Helvetica;
  text-align: center;
  font-size: 70px;
  letter-spacing: 4px;
  font-weight: 500;
`;

const Subtitle = styled(Title)`
  font-size: 30px;
  letter-spacing: 3px;
  font-weight: 350;
`;

const SubtitleTwo = styled(Title)`
  font-size: 20px;
  margin-top: 30px;
  letter-spacing: 3px;
  font-weight: 350;
`;

const SearchbarStyled = styled(SubtitleTwo)``;
