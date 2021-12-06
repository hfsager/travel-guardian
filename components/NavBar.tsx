import styled from '@emotion/styled';
import Link from 'next/Link';
import Image from 'next/Image'

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
color: black;
outline: none;
border: none;
padding: 7px 15px 7px 15px;
text-decoration: none;
border-radius: 5px;
background-color: white;
font-family: Helvetica;
font-size: 16px;
&:hover {
  background-color: black;
  color: white;
  cursor: pointer;
},

`

const Anchor = styled('a')`
padding: 0px 20px;
color: white;
margin-right: 40px;
&:hover{
  color: white;
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
      <ul>
        <NavLinks style={{marginLeft: "20px"}}>Sign Up</NavLinks>
        <NavLinks style={{marginLeft: "20px"}}>Take me Home</NavLinks>
        <NavLinks style={{marginLeft: "20px"}}>My Dashboard</NavLinks>
        <NavLinks><Image alt="placeholder" layout='responsive' src="/BananaDog.jpeg" width={150} height={150}/></NavLinks>
      </ul>
    </Container>
    </div>
  );
};

export default Navbar;

        {/* <span>
      <Image alt="placeholder" layout='responsive' src="/BananaDog.jpeg" width={150} height={150} style={{borderRadius: '50%'}}></Image>
      </span> */}