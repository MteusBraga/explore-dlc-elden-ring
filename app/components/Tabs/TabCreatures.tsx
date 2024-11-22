import { slideUpVariants } from "@/app/animations/slides";
import { Card } from "../Card/Card";
import { motion } from "framer-motion";
import { CardInfo } from "@/app/types/CardInfo";

export const TabCreatures = () => {
  const cards: CardInfo[] = [
    { title: "Black knight", img: "/creaturesImg/black.webp" },
    {
      title: "bloodfiend",
      img: "/creaturesImg/bloofiend.webp",
    },
    {
      title: "Shadow undead",
      img: "/creaturesImg/undead.webp",
    },
    {
      title: "golem smith",
      img: "/creaturesImg/golem.webp",
    },
    {
      title: "curseblade",
      img: "/creaturesImg/blade.webp",
    },
    {
      title: "horned warrior",
      img: "/creaturesImg/warrior.webp",
    },

    {
      title: "fire knight",
      img: "/creaturesImg/fire.webp",
    },
    {
      title: "horned shamans",
      img: "/creaturesImg/horned-shaman.jpg",
    },
    {
      title: "aging untouchable",
      img: "/creaturesImg/aging.webp",
    },
    {
      title: "furnace golem",
      img: "/creaturesImg/furnace.webp",
    },

    {
      title: "lamprey",
      img: "/creaturesImg/lamprey.webp",
    },
    {
      title: "hippopotamus",
      img: "/creaturesImg/hippo.webp",
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {cards.map((card, index) => (
        <motion.div key={index} variants={slideUpVariants} custom={index}>
          <Card title={card.title} desc={card.desc} img={card.img} />
        </motion.div>
      ))}
    </motion.div>
  );
};
