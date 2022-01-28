import styled from '@emotion/styled';
import Link from 'next/link';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  width: 100%;
  background-color: black;
  color: white;
  border-radius: 5px;
`;

const Button = styled.button`
outline: none;
border: none;
padding: 8px 16px 8px 16px;
text-decoration: none;
border-radius: 4px;
color: white;
background-color: black;
font-size: 16px;
margin-left: -25px;
&:hover {
  background-color: white;
  color: black;
  cursor: pointer;
  border-color: white;
},

`;

const Anchor = styled('a')`
  padding: 0px 20px;
  color: white;
  margin-right: 40px;
  &:hover {
    color: white;
    cursor: pointer;
  }
  text-decoration: none;
`;

const NavLinks = styled('li')`
  list-style: none;
  display: inline-block;
  padding: 0px 20px;
  font-family: Helvetica;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <div>
          <NavLinks>
            <FontAwesomeIcon
              icon={faPaw}
              size="2x"
              style={{ marginRight: '20px' }}
            />
            <Link passHref href="/test-pages/first-post">
              <Anchor data-test-id="link-to-first-page">TRAVEL MATE</Anchor>
            </Link>
            <Button onClick={() => alert('This Button Does Nothing')}>
              Sign Up As A Shelter
            </Button>
          </NavLinks>
        </div>
        <ul>
          <NavLinks>Sign Up</NavLinks>
          <NavLinks>Login</NavLinks>
        </ul>
      </Container>
    </div>
  );
};

export default Navbar;

{
  /* <span>
      <Image alt="placeholder" layout='responsive' src="/BananaDog.jpeg" width={150} height={150} style={{borderRadius: '50%'}}></Image>
      </span> */
}
