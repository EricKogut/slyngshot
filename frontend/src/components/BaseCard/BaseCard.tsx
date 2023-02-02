import {
  Card,
  useColorModeValue,
  Text,
  Stack,
  CardFooter,
  Button,
  SimpleGrid,
  CardBody,
  Avatar,
  Container,
  HStack,
  Badge,
  Link,
  Spinner,
} from '@chakra-ui/react';

interface Props {
  linkTo: string;
  linkToText: string;
  statusType: 'default' | 'red' | 'green' | 'purple';
  status: string;
  title: string;
  image?: string;
  loading?: boolean;
}

export const BaseCard = ({
  linkTo,
  linkToText,
  status,
  statusType = 'default',
  title,
  image,
  loading = false,
}: Props) => {
  return (
    <SimpleGrid
      spacing={10}
      templateColumns='repeat(auto-fill, minmax(300px, 1fr))'
    >
      <Card
        maxW='sm'
        w={'full'}
        h={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        rounded={'md'}
        pos={'relative'}
        zIndex={1}
      >
        <CardBody>
          <Container
            rounded={'2xl'}
            h='200px'
            backgroundImage={image || 'https://via.placeholder.com/1500'}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
          >
            <Stack direction='row' py={3}>
              {/* <Badge>Default</Badge> */}
              <Badge colorScheme={statusType}>{status}</Badge>
              {/* <Badge colorScheme='red'>Private</Badge> */}
            </Stack>
            <Stack my={'6rem'} spacing={0}>
              <Text color='whiteAlpha.800' as='b'>
                {title}
              </Text>
              <HStack>
                <Avatar size='xs' />
              </HStack>
            </Stack>
          </Container>
        </CardBody>
        <CardFooter>
          <Button width={'full'}>
            <Link href={linkTo}>
              <>
                {loading && <Spinner />}
                {!loading && linkToText}
              </>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
};
