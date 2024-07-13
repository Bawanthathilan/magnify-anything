import React, { useRef, useState, useEffect, ReactNode  } from 'react';
import * as d3 from 'd3';
import './Magnifier.css';

interface MagnifyGlassI{
  children:ReactNode;
  previewSize:number
  zoom:number
  borderColor:string
}

const Magnifier = ({ children, previewSize, zoom ,borderColor }:MagnifyGlassI) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<any>(null);
  const zoomRef = useRef<any>(null);

  
  

  useEffect(() => {
    const container = d3.select(containerRef.current);
    container.on('mouseenter', () => setIsHovering(true))
             .on('mousemove', (event) => {
               const [x, y] = d3.pointer(event);
               setMousePosition({ x, y });
             })
             .on('mouseleave', () => setIsHovering(false));

    return () => {
      container.on('mouseenter', null)
               .on('mousemove', null)
               .on('mouseleave', null);
    };
  }, [mousePosition]);

  useEffect(() => {
    if (zoomRef.current && containerRef.current) {
      zoomRef.current.style.width = `${containerRef.current.offsetWidth}px`;
      zoomRef.current.style.height = `${containerRef.current.offsetHeight}px`;
    }
  }, [zoom]);

  return (
    <div
      className="magnify-container"
      ref={containerRef}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="magnify-content">{children}</div>
      {isHovering && (
        <div
          className="magnify-glass"
          style={{
            width: previewSize,
            height: previewSize,
            borderRadius: '50%',
            position: 'absolute',
            pointerEvents: 'none',
            top: mousePosition.y - previewSize / 2,
            left: mousePosition.x - previewSize / 2,
            overflow: 'hidden',
            border: `3px solid ${borderColor? borderColor:'#000'}`,
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div
            ref={zoomRef}
            className="magnify-zoom"
            style={{
              position: 'absolute',
              width: `${containerRef.current ? containerRef.current.offsetWidth : 0}px`,
              height: `${containerRef.current ? containerRef.current.offsetHeight : 0}px`,
              transform: `translate(-${(mousePosition.x * zoom - previewSize / 2)}px, -${(mousePosition.y * zoom - previewSize / 2)}px) scale(${zoom})`,
              transformOrigin: 'top left',
            }}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Magnifier;
