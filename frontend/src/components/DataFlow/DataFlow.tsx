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
import ColorSelectorNode from './ColourSelectorNode';
import CustomEdge from './CustomEdge';
import 'reactflow/dist/style.css';
import { Toolbar } from './Toolbar';
const initBgColor = '#1A192B';

const nodeTypes = {
  selectorNode: ColorSelectorNode,
};
export const DataFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);

  useEffect(() => {
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
        id: '1',
        // type: 'input',
        data: { label: 'An input node' },
        position: { x: 0, y: 50 },
        sourcePosition: 'right',
      },
      {
        id: '2',
        type: 'selectorNode',
        data: { onChange: onChange, color: initBgColor, onConnect: onConnect },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 300, y: 50 },
      },
      {
        id: '3',
        // type: 'output',
        data: { label: 'Output A' },
        position: { x: 650, y: 25 },
        targetPosition: 'left',
      },
      {
        id: '4',
        // type: 'output',
        data: { label: 'Output B' },
        position: { x: 650, y: 100 },
        targetPosition: 'left',
      },
    ]);

    setEdges([
      // {
      //   id: 'e1-2',
      //   source: '1',
      //   target: '2',
      //   animated: true,
      //   type: 'edgeWithButton',
      //   style: { stroke: '#fff' },
      // },
      // {
      //   id: 'e2a-3',
      //   source: '2',
      //   target: '3',
      //   sourceHandle: 'a',
      //   animated: true,
      //   style: { stroke: '#fff' },
      // },
      // {
      //   id: 'e2b-4',
      //   source: '2',
      //   target: '4',
      //   sourceHandle: 'b',
      //   animated: true,
      //   style: { stroke: '#fff' },
      // },
    ]);
  }, []);

  const edgeTypes = {
    edgeWithButton: CustomEdge,
  };
  const onConnect = useCallback(
    (params) => {
      console.log(params, 'are the params');
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: 'edgeWithButton',
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

  return (
    <Container height='100vh'>
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
        defaultZoom={1.5}
        fitView
        attributionPosition='bottom-left'
      >
        <MiniMap />
        <Background />
      </ReactFlow>
      <Toolbar />
    </Container>
  );
};
