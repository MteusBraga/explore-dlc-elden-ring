export const slideLeftVariants = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

export const slideRightVariants = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

export const slideUpVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  }),
};
