import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  IconButton,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  AddIcon,
  PlusSquareIcon,
  InfoIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';

export const Toolbar = () => {
  return (
    <IconButton position='fixed' bottom={8} left={8} aria-label={''}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<AddIcon />}
          variant='outline'
        />
        <MenuList>
          <MenuItem icon={<PlusSquareIcon />} command='⌘G'>
            Generate
          </MenuItem>
          <MenuItem icon={<InfoIcon />} command='⌘E'>
            Embed
          </MenuItem>
          <MenuItem icon={<HamburgerIcon />} command='⌘⇧P'>
            Add Pinecone Database
          </MenuItem>
        </MenuList>
      </Menu>
    </IconButton>
  );
};
