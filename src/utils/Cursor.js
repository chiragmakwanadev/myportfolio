import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Cursor = ({ children }) => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  const variants = {
    default: {
      x: mousePos.x,
      y: mousePos.y,
      mixBlendMode: "difference",
    },
    text: {
      height: 100,
      width: 100,
      x: mousePos.x,
      y: mousePos.y,
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        {children}
        <CurCursor
          variants={variants}
          animate={cursorVariant}
          transition={{
            type: "tween",
            damping: 200,
            stiffness: 800,
            restDelta: 0.5,
          }}
        ></CurCursor>
      </div>
    </>
  );
};

export default Cursor;

const CurCursor = styled(motion.div)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffe3;
  pointer-events: auto;
  z-index: 9999;
`;
