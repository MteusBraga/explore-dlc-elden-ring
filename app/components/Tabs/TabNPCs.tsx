import { slideUpVariants } from "@/app/animations/slides";
import { Card } from "../Card/Card";
import { motion } from "framer-motion";
import { CardInfo } from "@/app/types/CardInfo";

export const TabNPCs = () => {
  const cards: CardInfo[] = [
    {
      title: "Ansbach",
      desc: "Servant of Mohg",
      img: "/npcsImg/ansbach.jpg",
    },
    {
      title: "Redname freyja",
      desc: "Servant of Radahn",
      img: "/npcsImg/freyja.webp",
    },
    {
      title: "hornsent",
      desc: "A resentful man",
      img: "/npcsImg/hornsent.webp",
    },
    {
      title: "igon",
      desc: "Dragon Hunter",
      img: "/npcsImg/igon.webp",
    },
    {
      title: "Moore",
      desc: "Gentle giant",
      img: "/npcsImg/moore.webp",
    },
    {
      title: "Needle knight leda",
      desc: "Leader of Miquella's band",
      img: "/npcsImg/leda.webp",
    },
    {
      title: "thiollier",
      desc: "Tarnished",
      img: "/npcsImg/thiollier.webp",
    },
    {
      title: "Dryleaf dane",
      desc: "A master hand-to-hand combat",
      img: "/npcsImg/dryleaf.webp",
    },
    {
      title: "count Ymir",
      desc: "A High Priest who oversees the Cathedral of Manus Metyr.",
      img: "/npcsImg/ymir.webp",
    },
    {
      title: "Dragon Communion Priestess",
      desc: "Servant of the Dragonlord Placidusax",
      img: "/npcsImg/priestess.webp",
    },
    {
      title: "Jolan",
      desc: "A loyal Swordshand",
      img: "/npcsImg/jolan.jpg",
    },
    {
      title: "st. trina",
      desc: "An enigmatic figure",
      img: "/npcsImg/trina.webp",
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
