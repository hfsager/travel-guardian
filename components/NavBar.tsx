import styled from '@emotion/styled';
import Link from 'next/Link';
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  width: 100%;
  background-color: black;
  color: white;
  border-radius: 5px;
  font-family: Helvetica;
`;

const Button = styled.button`
outline: none;
border: none;
padding: 8px 16px 8px 16px;
text-decoration: none;
border-radius: 4px;
color: white;
background-color: black;
font-family: Helvetica;
font-size: 16px;
&:hover {
  background-color: white;
  color: black;
  cursor: pointer;
  border-color: white;
},

`

const Anchor = styled('a')`
padding: 0px 20px;
color: white;
margin-right: 40px;
&:hover{
  color: white;
  cursor: pointer;
  
}
`

const NavLinks = styled('li')`
list-style: none;
display: inline-block;
padding: 0px 20px;
`


const Navbar = () => {
  return (
    <div>
    <Container>
      <div>
         <Link href="/test-pages/first-post">
          <Anchor data-test-id='link-to-first-page'>TRAVEL GUARDIAN</Anchor>
     	   </Link>
        <Button onClick= {()=>alert("This Button Does Nothing")}>Sign Up As A Shelter</Button>
        </div>
        <FontAwesomeIcon icon={faPaw} size="2x"/>
      <ul>
        <NavLinks style={{marginLeft: "20px"}}>Sign Up</NavLinks>
        <NavLinks style={{marginLeft: "20px"}}>Take me Home</NavLinks>
        <NavLinks style={{marginLeft: "20px"}}>My Dashboard</NavLinks>
      </ul>
    </Container>
    </div>
  );
};

export default Navbar;

        {/* <span>
      <Image alt="placeholder" layout='responsive' src="/BananaDog.jpeg" width={150} height={150} style={{borderRadius: '50%'}}></Image>
      </span> */}