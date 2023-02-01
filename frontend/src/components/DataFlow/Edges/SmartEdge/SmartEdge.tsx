import React from 'react';
import { getBezierPath } from 'reactflow';

export const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
}) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const onEdgeButtonClick = (evt, id) => {
    console.log('click');
    evt.stopPropagation();
    data?.setEdges((edges) => edges.filter((ed) => ed.id !== id));
  };

  return (
    <>
      <path
        id={id}
        style={style}
        className='react-flow__edge-path'
        d={edgePath}
        markerEnd={markerEnd}
        onClick={(event) => onEdgeButtonClick(event, id)}
      />
      <text>
        {/* <textPath
          href={`#${id}`}
          style={{ fontSize: 12 }}
          startOffset='50%'
          textAnchor='middle'
        ></textPath> */}
        <div>
          <div onClick={(event) => onEdgeButtonClick(event, id)}>
            {' '}
            asdfasdfasdx
          </div>
        </div>
      </text>
    </>
  );
};
