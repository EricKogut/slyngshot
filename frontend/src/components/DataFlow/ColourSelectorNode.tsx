import React, { memo } from 'react';
import { Handle } from 'reactflow';

import RiseLoader from 'react-spinners/RiseLoader';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  StackDivider,
  Box,
  Heading,
  Text,
  Button,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default memo(({ data, isConnectable }) => {
  const router = useRouter();
  const id = router.query.id;
  const address = 'http://localhost:3004/dataflows/' + id;
  console.log(data.onConnect);
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size='sm'>Endpoint</Heading>{' '}
          <Box>
            <Text pt='2' fontSize='sm'>
              <Button
                isLoading={false}
                colorScheme='gray'
                spinner={<RiseLoader size={2} color='white' />}
              >
                Send Request
              </Button>
            </Text>
          </Box>
        </CardHeader>

        <CardBody>
          {/* <Stack divider={<StackDivider />} spacing='1'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Overview
              </Heading>
              <Text pt='2' fontSize='sm'>
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Analysis
              </Heading>
              <Text pt='2' fontSize='sm'>
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack> */}
          <Tag size='sm' variant='subtle' colorScheme='blue'>
            <TagLabel>{address}</TagLabel>
          </Tag>
          <Handle
            type='target'
            position='left'
            style={{ background: '#555' }}
            onConnect={(params) => console.log('on connect triggered')}
            isConnectable={isConnectable}
          />

          <Handle
            type='source'
            position='right'
            id='a'
            style={{ top: 10, background: '#555' }}
            isConnectable={isConnectable}
          />
          <Handle
            type='source'
            position='right'
            id='b'
            style={{ bottom: 10, top: 'auto', background: '#555' }}
            isConnectable={isConnectable}
          />
        </CardBody>
      </Card>
    </>
  );
});
