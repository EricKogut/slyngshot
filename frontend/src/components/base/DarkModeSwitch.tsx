import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <div>
      {/* <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        layout
      > */}{' '}
      <IconButton
        // position='fixed'
        // top={4}
        // right={4}
        icon={isDark ? <SunIcon /> : <MoonIcon />}
        aria-label='Toggle Theme'
        colorScheme='black'
        onClick={toggleColorMode}
      >
        {' '}
      </IconButton>
      {/* </motion.button> */}
    </div>
  );
};
