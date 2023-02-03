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

export const GenerateNode = memo(({ data, isConnectable }) => {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const [temperatureSliderValue, setTemperatureSliderValue] = useState(0.9);
  const [maxTokensSliderValue, setMaxTokensSliderValue] = useState(100);

  const [showTooltip, setShowTooltip] = useState(false);
  const id = router.query.id;
  const address = 'http://localhost:3004/dataflows/' + id;

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
          <Heading size='sm'>Generate Node</Heading>{' '}
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
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Text>Temperature </Text>
              <Slider
                id='temperatureSlider'
                min={0}
                max={1}
                step={0.01}
                colorScheme='blue'
                onChange={(v) => setTemperatureSliderValue(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>

                <Tooltip
                  hasArrow
                  bg='blue.500'
                  color='white'
                  placement='top'
                  isOpen={true}
                  label={`${temperatureSliderValue}`}
                >
                  <SliderThumb />
                </Tooltip>
              </Slider>
            </Box>

            <Box>
              <Text>Max Tokens </Text>
              <Slider
                id='slider'
                min={0}
                max={1000}
                step={1}
                colorScheme='blue'
                onChange={(v) => setMaxTokensSliderValue(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>

                <Tooltip
                  hasArrow
                  bg='blue.500'
                  color='white'
                  placement='top'
                  isOpen={true}
                  label={`${maxTokensSliderValue}`}
                >
                  <SliderThumb />
                </Tooltip>
              </Slider>
              <Stack spacing={5} direction='row'>
                <Checkbox isDisabled>large</Checkbox>
                <Checkbox isDisabled defaultChecked>
                  command-xlarge-20221108
                </Checkbox>
              </Stack>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
});

export default GenerateNode;
