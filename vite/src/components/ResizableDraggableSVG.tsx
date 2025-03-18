import { useEffect, useRef, useState } from "react";

export default function ResizableDraggableSVG() {
  const svgRef = useRef<SVGSVGElement>(null);

  const [rect, setRect] = useState({ x: 50, y: 50, width: 100, height: 100 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStartPos = useRef({ x: 0, y: 0 });
  const rectStartPos = useRef({ x: 0, y: 0 });

  const getMousePosition = (e: MouseEvent) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    const point = svgRef.current.createSVGPoint();
    point.x = e.clientX;
    point.y = e.clientY;
    const ctm = svgRef.current.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    return point.matrixTransform(ctm.inverse());
  };

  const handleDragStart = (e: React.MouseEvent<SVGRectElement>) => {
    setIsDragging(true);
    const pos = getMousePosition(e.nativeEvent);
    dragStartPos.current = pos;
    console.log(dragStartPos.current);

    rectStartPos.current = { x: rect.x, y: rect.y };
    console.log(rectStartPos.current);
  };

  const handleDrag = (e: MouseEvent) => {
    if (!isDragging) return;
    const pos = getMousePosition(e);
    setRect({
      ...rect,
      x: rectStartPos.current.x + (pos.x - dragStartPos.current.x),
      y: rectStartPos.current.y + (pos.y - dragStartPos.current.y),
    });
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDrag);
      window.addEventListener("mouseup", handleEnd);
    } else {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", handleEnd);
    };
  }, [isDragging]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="300"
      style={{ border: "1px solid black" }}
    >
      <rect
        x={rect.x}
        y={rect.y}
        width={rect.width}
        height={rect.height}
        fill="lightblue"
        stroke="black"
        cursor="grab"
        onMouseDown={handleDragStart}
      />
    </svg>
  );
}
