import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ loaderText }) => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  return (
    <m.div
      className="h-screen w-full absolute z-[10] grid place-content-center top-0 left-0 preloader"
      initial={{ top: "-100dvh" }}
      animate={{
        top: "0vh",
        opacity: "0"
      }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      exit={{
        top: "-100vh"
      }}
    >
      {dimension.width > 0 && (
        <>
          <h2 className="font-bold text-center text-5xl md:text-6xl lg:text-7xl z-[1] xl:text-8xl title-text">
            {loaderText}
          </h2>
          <svg className="svg">
            <m.path
              initial={{
                d: initialPath,
                transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
              }}
              animate={{
                d: targetPath,
                transition: {
                  duration: 0.7,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.3,
                },
              }}
              exit={{ opacity: 0 }}
            ></m.path>
          </svg>
        </>
      )}
    </m.div>
  );
};

export default Preloader;
