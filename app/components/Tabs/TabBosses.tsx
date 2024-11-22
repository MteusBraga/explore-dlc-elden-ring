import { slideUpVariants } from "@/app/animations/slides";
import { Card } from "../Card/Card";
import { motion } from "framer-motion";

export const TabBosses = () => {
  const cards = [
    {
      title: "Divine Beast",
      desc: "Dancing Lion",
      img: "/bossesImg/lion.png",
    },
    { title: "Bayle", desc: "The Horror", img: "/bossesImg/bayle.png" },
    {
      title: "Gaius",
      desc: "Wild Boar Rider",
      img: "/bossesImg/gaius.png",
    },
    {
      title: "messmer",
      desc: "Abyssal Serpent",
      img: "/bossesImg/messmer.png",
    },
    {
      title: "midra",
      desc: "lord of frenzy flame",
      img: "/bossesImg/midra.png",
    },
    {
      title: "putrescent knight",
      desc: "Trina's Guardian",
      img: "/bossesImg/putrescent.png",
    },
    {
      title: "Radahn",
      desc: "Miquella's Consort",
      img: "/bossesImg/rahdan.png",
    },
    {
      title: "rellana",
      desc: "Twin Moon Knight",
      img: "/bossesImg/rellana.png",
    },
    {
      title: "Romina",
      desc: "Saint of the Bud",
      img: "/bossesImg/romina.png",
    },
    {
      title: "scadutree avatar",
      desc: "girassol maluco",
      img: "/bossesImg/scadutree.webp",
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
