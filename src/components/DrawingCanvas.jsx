import React, { useRef, useEffect, useState } from "react";

function DrawingCanvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    setDrawing(true);
    const { left, top } = canvasRef.current.getBoundingClientRect();
    const offsetX = nativeEvent.clientX - left;
    const offsetY = nativeEvent.clientY - top;

    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    canvasRef.current.addEventListener("mousemove", continueDrawing);
    canvasRef.current.addEventListener("mouseup", stopDrawing);
  };

  const stopDrawing = () => {
    setDrawing(false);
    canvasRef.current.removeEventListener("mousemove", continueDrawing);
    canvasRef.current.removeEventListener("mouseup", stopDrawing);
  };

  const continueDrawing = ({ nativeEvent }) => {
    if (drawing) {
      const { left, top } = canvasRef.current.getBoundingClientRect();
      const offsetX = nativeEvent.clientX - left;
      const offsetY = nativeEvent.clientY - top;

      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };
  return (
    <canvas
      className="fixed top-0 left-0 z-0"
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={continueDrawing}
      onMouseOut={stopDrawing}
    />
  );
}

export default DrawingCanvas;
