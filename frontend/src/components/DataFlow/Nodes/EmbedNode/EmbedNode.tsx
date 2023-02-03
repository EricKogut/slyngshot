import React, { memo, useEffect, useState } from 'react';
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
  Text,
  Divider,
  Heading,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  useDisclosure,
  Slider,
  Tooltip,
  Checkbox,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const EmbedNode = memo(({ data, isConnectable }) => {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const [temperatureSliderValue, setTemperatureSliderValue] = useState(0);
  const [maxTokensSliderValue, setMaxTokensSliderValue] = useState(0);

  const [showTooltip, setShowTooltip] = useState(false);
  const id = router.query.id;
  const address = 'http://localhost:2/dataflows/' + id;

  //   useEffect(() => {
  //     async function fetchData() {
  //       const result = await axios(`your api endpoint/${sliderValue}`);
  //       console.log(result);
  //     }
  //     fetchData();
  //   }, [sliderValue]);

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size='sm'>Embed Node</Heading>{' '}
        </CardHeader>

        <Handle
          type='target'
          position='left'
          id={address}
          // style={{ bottom: 27, top: 'auto', background: '#555' }}
          isConnectable={isConnectable}
        />
        <Handle
          type='source'
          position='right'
          id={address}
          // style={{ bottom: 27, top: 'auto', background: '#555' }}
          isConnectable={isConnectable}
        />
        <CardBody>
          <Stack spacing={5} direction='row'>
            <Checkbox isDisabled defaultChecked>
              {' '}
              texts=[1]
            </Checkbox>
            <Checkbox isDisabled defaultChecked>
              {' '}
              model='large'
            </Checkbox>
            <Checkbox isDisabled defaultChecked>
              truncate='LEFT'
            </Checkbox>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
});

export default EmbedNode;
