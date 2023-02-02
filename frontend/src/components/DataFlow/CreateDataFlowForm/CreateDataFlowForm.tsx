import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react';

type FormValues = {
  name: any;
};

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export const CreateDataFlowForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    const newMembership = {
      name: values.name,
    };

    const createdNewMembership = {
      endpoint: `${process.env.NEXT_PUBLIC_REACT_APP_ENDPOINT}/` + 'dataFlows/',
      body: newMembership,
    };

    const dataFlowsResponse = await axios['post'](
      createdNewMembership.endpoint,
      createdNewMembership.body
    );

    console.log(dataFlowsResponse, 'created');

    router.push('/dataflows/' + dataFlowsResponse.data._id);
  };

  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack>
          <Heading
            lineHeight={1.5}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
            bgGradient='linear(to-l, heroGradientStart, heroGradientEnd)'
            bgClip='text'
          >
            Data Flow Creation{' '}
          </Heading>
          <Text>What's this Data Flow called?</Text> <br></br>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}
          >
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              >
                Create your Data Flow
              </Heading>
            </Stack>
            <Box mt={10}>
              <Stack spacing={4}>
                <FormControl id='name' isRequired>
                  <FormLabel>Data Flow name</FormLabel>
                  <Input
                    {...register('name', {
                      required: 'Please enter your Data Flow name.',
                    })}
                    placeholder='Your Data Flow'
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />
                  <FormHelperText>What is the Data Flow called?</FormHelperText>
                </FormControl>
                <br></br>
                <br></br>

                <Button
                  fontFamily={'heading'}
                  isLoading={isSubmitting}
                  mt={8}
                  w={'full'}
                  bg={'blackAlpha.700'}
                  color={'white'}
                  _hover={{
                    bgGradient:
                      'linear(to-l, heroGradientStart, heroGradientEnd)',
                  }}
                  type='submit'
                >
                  Continue
                </Button>
              </Stack>
              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bg={'gray.200'}
                color={'gray.800'}
                _hover={{
                  bg: 'gray.300',
                }}
              >
                Cancel
              </Button>
            </Box>
          </Stack>
        </form>
      </Container>
    </Box>
  );
};
export default CreateDataFlowForm;
