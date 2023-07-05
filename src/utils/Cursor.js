import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

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
      x: mousePos.x - 16,
      y: mousePos.y - 16,
    },
  };

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  return (
    <>
      <div>
        <CurCursor
          variants={variants}
          animate="default"
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 500,
            restDelta: 0.001,
          }}
        ></CurCursor>
      </div>
    </>
  );
};

export default Cursor;

const CurCursor = styled(motion.div)`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #ffffe3;
`;
