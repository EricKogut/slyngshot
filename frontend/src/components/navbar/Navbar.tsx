import { ReactNode } from 'react';
import { useState, useEffect } from 'react';

import {
  Box,
  Flex,
  HStack,
  Link,
  useColorMode,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from '@chakra-ui/react';
import slyngLogoDark from '../../assets/slyngshot-dark.png';
import slyngLogoLight from 'assets/slyngshot-light.png';
import { DarkModeSwitch } from 'components/base/DarkModeSwitch';
import { useRouter } from 'next/router';

const Links = [
  { name: 'Dashboard', link: '/dashboard' },
  { name: 'Organizations', link: '/orgs' },
];

function Navbar() {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const [name, setName] = useState('e k');

  const navigateToOrgCreate = () => {
    router.push('/orgs/create');
  };

  return (
    <Box px={4} _dark={{ bg: '#16161D' }} shadow={'md'}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'90%'}
        margin={'auto'}
      >
        <Box id='navbar-logo'>
          <Link href='/dashboard'>
            {colorMode === 'dark' ? (
              <Image
                src={slyngLogoDark.src}
                alt='slyngshot-logo'
                width={110}
                paddingTop={1}
              />
            ) : (
              <Image
                src={slyngLogoLight.src}
                alt='slyngshot-logo'
                width={110}
                paddingTop={1}
              />
            )}
          </Link>
        </Box>

        {true ? (
          <Flex alignItems={'center'}>
            <>
              {' '}
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
                ml={4}
              >
                {Links.map((link) => (
                  <NavLink key={link.name}>{link.name}</NavLink>
                ))}
              </HStack>{' '}
            </>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar size={'sm'} bg='gray' name={name} />
              </MenuButton>
              <MenuList _light={{ bg: 'black' }}>
                {['Profile', 'Create an Org, Group or Cohort'].map(
                  (navOption, navOKey) => {
                    return (
                      <MenuItem
                        key={navOKey}
                        fontSize='sm'
                        _light={{ bg: 'black', color: 'white' }}
                        onClick={navigateToOrgCreate}
                      >
                        {navOption}
                      </MenuItem>
                    );
                  }
                )}
              </MenuList>
            </Menu>
            <DarkModeSwitch />
          </Flex>
        ) : (
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', sm: 'flex' }}
              justifyContent={'flex-end'}
              width={'100%'}
              fontSize={'0.9rem'}
              _dark={{ color: 'white' }}
              _light={{ color: 'black' }}
            >
              {['Home', 'About', 'Services', 'Sign Up'].map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        )}
      </Flex>
    </Box>
  );
}

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'sm'}
    fontWeight={'300'}
    _hover={{
      bgGradient: 'linear(to-r, red.400,pink.400)',
      bgClip: 'text',
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default Navbar;
