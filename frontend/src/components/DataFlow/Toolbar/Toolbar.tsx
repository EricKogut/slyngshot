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
  Box,
  IconButton,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  AddIcon,
  PlusSquareIcon,
  InfoIcon,
  HamburgerIcon,
  DeleteIcon,
} from '@chakra-ui/icons';
import { useEdgesState, useNodesState } from 'reactflow';

export const Toolbar = (params: any) => {
  const removeNodes = () => {
    params.setNodes([]);
  };

  return (
    <Box
      bg={'white'}
      pos='fixed'
      bottom={8}
      left={8}
      aria-label={''}
      borderRadius={4}
    >
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
          <MenuItem
            icon={<HamburgerIcon />}
            command='⌘⇧P'
            onClick={removeNodes}
          >
            Add Pinecone Database
          </MenuItem>
          <MenuItem icon={<DeleteIcon />} command='⌘⇧D' onClick={removeNodes}>
            Delete all nodes
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
