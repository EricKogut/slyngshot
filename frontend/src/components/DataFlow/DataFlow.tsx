import { Container } from 'components/base/Container';
import { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  addEdge,
} from 'reactflow';
import EndpointNode from './Nodes/EndpointNode/EndpointNode';
import GenerateNode from './Nodes/GenerateNode/GenerateNode';
import EmbedNode from './Nodes/EmbedNode/EmbedNode';
import PineconeDatabaseNode from './Nodes/PineconeDatabaseNode/PineconeDatabaseNode';

import CustomEdge from './CustomEdge';
import 'reactflow/dist/style.css';
import { Toolbar } from './Toolbar';
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack,
  Kbd,
  Button,
  useClipboard,
  Input,
} from '@chakra-ui/react';
import { CopyIcon, CheckIcon } from '@chakra-ui/icons';

import { useRouter } from 'next/router';

const initBgColor = '#1A192B';

const nodeTypes = {
  endpointNode: EndpointNode,
  generateNode: GenerateNode,
  embedNode: EmbedNode,
  pineconeDatabaseNode: PineconeDatabaseNode,
};
export const DataFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [bgColor, setBgColor] = useState(initBgColor);
  const router = useRouter();
  const id = router.query.id;
  const address = 'http://localhost:3004/dataflows/run/' + id;
  const { onCopy, setValue, hasCopied } = useClipboard(address || '');

  useEffect(() => {
    if (address) {
      setValue(address);
    }
  }, [address, setValue]);

  const copyLink = useEffect(() => {
    const onChange = (event: any) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id !== '2') {
            return node;
          }

          const color = event.target.value;

          setBgColor(color);

          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        })
      );
    };

    setNodes([
      {
        id: '2',
        type: 'endpointNode',
        data: { onChange: onChange, color: initBgColor, onConnect: onConnect },
        position: { x: 300, y: 50 },
      },
      {
        id: '3',
        type: 'generateNode',
        data: { onChange: onChange, color: initBgColor, onConnect: onConnect },
        position: { x: 1000, y: 75 },
      },
      {
        id: '4',
        type: 'embedNode',
        data: { onChange: onChange, color: initBgColor, onConnect: onConnect },
        position: { x: 1555, y: 87 },
      },
      {
        id: '5',
        type: 'pineconeDatabaseNode',
        data: { onChange: onChange, color: initBgColor, onConnect: onConnect },
        position: { x: 2000, y: 0 },
      },
      {
        id: '6',
        type: 'generateNode',
        data: { onChange: onChange, color: initBgColor, onConnect: onConnect },
        position: { x: 2000, y: 500 },
      },
    ]);
  }, []);

  const edgeTypes = {
    activeEdge: CustomEdge,
  };

  const onConnect = useCallback(
    (params) => {
      console.log(params, 'are the params');
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: 'activeEdge',
            markerEnd: { type: MarkerType.ArrowClosed },
            style: { strokeWidth: 2 },
            data: { setEdges },
            animated: true,
          },
          eds
        )
      );
    },
    [setEdges]
  );

  console.log(edges, 'are the edges');

  return (
    <Container height='100vh'>
      <HStack spacing={4} margin={2}>
        <Kbd>Dataflow Enpoint:</Kbd>
        {['md'].map((size) => (
          <Tag
            size={size}
            key={size}
            variant='subtle'
            colorScheme='blue'
            onClick={onCopy}
          >
            {!hasCopied ? (
              <TagLeftIcon boxSize='12px' as={CopyIcon} />
            ) : (
              <TagLeftIcon boxSize='12px' as={CheckIcon} />
            )}

            <TagLabel>{address}</TagLabel>
          </Tag>
        ))}
      </HStack>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ background: bgColor }}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        snapToGrid={true}
        fitView
        attributionPosition='bottom-left'
      >
        <MiniMap />
        <Background />
      </ReactFlow>
      <Toolbar setNodes={setNodes} />
    </Container>
  );
};
