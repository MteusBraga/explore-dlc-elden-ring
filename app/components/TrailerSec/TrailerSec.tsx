import { slideLeftVariants, slideRightVariants } from "@/app/animations/slides";
import { motion } from "framer-motion";

export const TrailerSec = () => (
  <div className="hero min-h-screen *:max-w-[1024px] *:p-10 flex flex-col items-center">
    {/* Primeiro Trailer */}
    <div className="max-w-[1024px] flex flex-col items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideLeftVariants}
        className="mt-4"
      >
        <h1 className="text-4xl font-bold">Gameplay Trailer</h1>
        <p className="text-justify mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          molestiae repellendus non, laborum quos ratione in laudantium,
          consequatur consectetur corrupti pariatur nemo impedit iste architecto
          repudiandae voluptatibus aperiam eligendi incidunt!
        </p>
      </motion.div>
      <iframe
        className="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
        src="https://www.youtube.com/embed/qLZenOn7WUo?si=BlorLx2COONyRlPp"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>

    {/* Segundo Trailer */}
    <div className="flex flex-col items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideRightVariants}
        viewport={{ once: true }}
        className="mt-4"
      >
        <h1 className="text-4xl font-bold">Story Trailer</h1>
        <p className="text-justify mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          molestiae repellendus non, laborum quos ratione in laudantium,
          consequatur consectetur corrupti pariatur nemo impedit iste architecto
          repudiandae voluptatibus aperiam eligendi incidunt!
        </p>
      </motion.div>
      <iframe
        className="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
        src="https://www.youtube.com/embed/J9Bm5U-MJZw?si=MtH2dfAFf8pgzwpL"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);
