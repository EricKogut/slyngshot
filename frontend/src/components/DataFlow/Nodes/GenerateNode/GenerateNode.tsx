import { useState } from 'react';
import { Box, Slider } from '@chakra-ui/react';
import axios from 'axios';

export const GenerateNode = () => (
  const [sliderValue, setSliderValue] = useState(50);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`your api endpoint/${sliderValue}`);
      console.log(result);
    }
    fetchData();
  }, [sliderValue]);

  return (
    <Box id={id}>
      <Slider min={0} max={100} value={sliderValue} onChange={setSliderValue} />
      <p>Slider Value: {sliderValue}</p>
    </Box>
  );
);
