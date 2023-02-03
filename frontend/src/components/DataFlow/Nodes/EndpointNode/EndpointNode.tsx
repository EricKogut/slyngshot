import React, { memo, useState } from 'react';
import { Handle } from 'reactflow';

import RiseLoader from 'react-spinners/RiseLoader';
import dynamic from 'next/dynamic';

const BaseIDE = dynamic(() => import('components/ide/BaseIDE/BaseIDE'), {
  ssr: false,
});
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
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const EndpointNode = memo(({ data, isConnectable }) => {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const [requestValue, setRequestValue] = useState('');

  const id = router.query.id;
  const address = 'http://localhost:3004/dataflows/run/' + id;

  const onRequestBodyChange = (value: any, event: any) => {
    setRequestValue(value);
  };
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size='sm'>Endpoint</Heading>{' '}
          <Box>
            <Text pt='2' fontSize='sm'>
              <Button onClick={onToggle}>Edit request body</Button>
              <Collapse in={isOpen} animateOpacity>
                <BaseIDE
                  onRequestBodyChange={onRequestBodyChange}
                  requestValue={requestValue}
                />
              </Collapse>
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
          <Tag size='sm' variant='subtle' colorScheme='blue'>
            <TagLabel>{address}</TagLabel>
          </Tag>

          <Handle
            type='source'
            position='right'
            id={address}
            // style={{ bottom: 27, top: 'auto', background: '#555' }}
            isConnectable={isConnectable}
          />
        </CardBody>
      </Card>
    </>
  );
});

export default EndpointNode;
