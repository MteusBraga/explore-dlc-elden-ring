import { slideLeftVariants } from "@/app/animations/slides";
import { motion } from "framer-motion";
export const SkillsSec = () => {
  return (
    <div className="hero min-h-screen *:max-w-[1024px] *:p-10 flex flex-col items-center">
      <div className="max-w-[1024px] flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftVariants}
          className="mt-4"
        >
          <h1 className="text-5xl font-bold">Skills Spotlight</h1>
          <p className="text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            molestiae repellendus non, laborum quos ratione in laudantium,
            consequatur consectetur corrupti pariatur nemo impedit iste
            architecto repudiandae voluptatibus aperiam eligendi incidunt!
          </p>
        </motion.div>
      </div>
    </div>
  );
};
