import { motion as m, useAnimate } from "framer-motion";
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

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(
        scope.current,
        {
          top: ["-100vh", "0vh", "-100vh"],
        },
        { duration: 5 },
        { ease: [0.76, 0, 0.24, 1] },
      )
    };

    animation();
  });

  return (
    <m.div
      className="h-screen w-full absolute z-[10] grid place-content-center left-0 preloader"
      ref={scope}
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
                transition: { duration: 1, ease: [0.76, 0, 0.24, 2] },
              }}
              animate={{
                d: targetPath,
                transition: {
                  duration: 4,
                  ease: [0.76, 0, 0.24, 2],
                  delay: 0.3,
                },
              }}
            ></m.path>
          </svg>
        </>
      )}
    </m.div>
  );
};

export default Preloader;
