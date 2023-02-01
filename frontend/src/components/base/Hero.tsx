import { Flex, Heading } from '@chakra-ui/react';

export const Hero = ({ title }: { title: string }) => {
  const heroTitle = 'Backend status is:';

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      height='100vh'
      bgGradient='linear(to-l, heroGradientStart, heroGradientEnd)'
      bgClip='text'
    >
      <Heading fontSize='6vw'>{heroTitle}</Heading>
    </Flex>
  );
};
