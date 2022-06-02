import { Center, Container, Heading, Link } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Center h="100vh">
        <Heading>
          This is a custom{' '}
          <Link href="https://nextjs.org" color="blue.500">
            Next.js
          </Link>{' '}
          boiler plate starter
        </Heading>
      </Center>
    </Container>
  );
};

export default Index;
