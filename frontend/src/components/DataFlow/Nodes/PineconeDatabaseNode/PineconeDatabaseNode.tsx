import React, { memo, useEffect, useState } from 'react';
import { Handle } from 'reactflow';

import dynamic from 'next/dynamic';
import { InfoIcon } from '@chakra-ui/icons';

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

export const PineconeDatabaseNode = memo(({ data, isConnectable }) => {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const [topKSliderValue, setTopKSliderValue] = useState(10);
  const [matchingScoreSliderValue, setMatchingScoreSliderValue] =
    useState(0.45);

  const [showTooltip, setShowTooltip] = useState(false);
  const id = router.query.id;
  const address = 'http://localhost:3001/dataflows/' + id;

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
          <Heading size='sm'>
            Pinecone Database (Query){' '}
            <Tooltip
              label='Total Vectors:
36579'
              fontSize='md'
              placement='top'
            >
              <InfoIcon />
            </Tooltip>
          </Heading>{' '}
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
              <Text>Top K results </Text>
              <Slider
                id='topKSlider'
                min={0}
                max={9999}
                step={1}
                colorScheme='blue'
                onChange={(v) => setTopKSliderValue(v)}
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
                  label={`${topKSliderValue}`}
                >
                  <SliderThumb />
                </Tooltip>
              </Slider>
            </Box>

            <Box>
              <Text>Matching Score </Text>
              <Slider
                id='slider'
                min={0}
                max={1}
                step={0.01}
                colorScheme='blue'
                onChange={(v) => setMatchingScoreSliderValue(v)}
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
                  label={`${matchingScoreSliderValue}`}
                >
                  <SliderThumb />
                </Tooltip>
              </Slider>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
});

export default PineconeDatabaseNode;
