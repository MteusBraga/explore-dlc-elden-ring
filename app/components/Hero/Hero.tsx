import { slideLeftVariants, slideRightVariants } from "@/app/animations/slides";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export const Hero = () => {
  const [animationState, setAnimationState] = useState("walk");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState("idle");
    }, 1300); // Duração da animação de "walk"

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, []);

  const malenia = {
    idle: {
      y: [10, -10, 10],
      transition: { repeat: Infinity, duration: 1.3 },
    },
    walk: {
      scale: 1,
      opacity: 1,
      x: [-140, -120, -80, -60, -40, -20, 0],
      y: [20, 0, 20, 0, 20, 0, 20, 0],
      transition: {
        duration: 1.3,
        repeat: 0,
      },
    },
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/hero-bg.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <div className="flex items-center justify-start">
            <motion.pre
              variants={slideLeftVariants}
              initial="hidden"
              animate="visible"
              className="mb-5 text-5xl font-bold"
            >
              Hello there
            </motion.pre>
            <motion.img
              className="w-1/2"
              whileHover={{ scale: 0.9 }}
              animate={animationState}
              variants={malenia}
              src="/malenia.png"
              alt=""
            />
          </div>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideRightVariants}
            className="mb-5"
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </motion.p>
          <motion.button
            initial="hidden"
            animate="visible"
            variants={slideRightVariants}
            className="btn btn-primary"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};
