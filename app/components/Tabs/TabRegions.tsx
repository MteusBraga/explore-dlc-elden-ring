import { motion } from "framer-motion";
import { Card } from "../Card/Card";
import { slideUpVariants } from "@/app/animations/slides";

export const TabRegions = () => {
  const cards = [
    {
      title: "CERULEAN COAST",
      desc: "12908380912",
      img: "/regionsImg/cerulean-coast.png",
    },
    {
      title: "Finger Ruins of Rhia",
      desc: "12908380912",
      img: "/regionsImg/finger-ruins-of-thia.webp",
    },
    {
      title: "SHADOW KEEP",
      desc: "12908380912",
      img: "/regionsImg/shadow-keep.png",
    },
    {
      title: "GRAVESITE PLAIN",
      desc: "12908380912",
      img: "/regionsImg/gravesite-plain.webp",
    },
    {
      title: "JAGGED PEAK",
      desc: "12908380912",
      img: "/regionsImg/jagged.webp",
    },
    {
      title: "SCADU ALTUS",
      desc: "12908380912",
      img: "/regionsImg/altus.webp",
    },
    {
      title: "ABYSSAL WOODS",
      desc: "12908380912",
      img: "/regionsImg/woods.jpg",
    },
    {
      title: "CHURCH DISTRICT",
      desc: "12908380912",
      img: "/regionsImg/church.webp",
    },
    {
      title: "ANCIENT RUINS OF RAUH",
      desc: "12908380912",
      img: "/regionsImg/rauh.jpg",
    },
    { title: "ENIR ILIM", desc: "12908380912", img: "/regionsImg/enir.webp" },
    {
      title: "SHAMAN VILLAGE",
      desc: "12908380912",
      img: "/regionsImg/shaman.png",
    },
    {
      title: "STONE COFFIN FISSURE",
      desc: "12908380912",
      img: "/regionsImg/fissure.png",
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
