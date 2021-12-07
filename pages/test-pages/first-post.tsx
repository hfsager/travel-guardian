import Link from 'next/link';
import styled from '@emotion/styled';

const Button = styled.button`
  color: blue;
  padding: 10px;
`;

const FirstPage = () => {
  return (
    <>
      <Link href="/">
        <Button>Take Me Home</Button>
      </Link>
      <h1>First Page</h1>
    </>
  );
};

export default FirstPage;
