export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const slideLeft = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  },
});

export const slideRight = (delay = 0) => ({
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  },
});

export const slideUp = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  },
});

export const slideDown = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  },
});

export const scaleIn = (delay = 0) => ({
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  },
});

export const buttonAnimation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const iconRotate = {
  initial: {
    rotate: -90,
    scale: 0,
    opacity: 0,
  },
  animate: {
    rotate: 0,
    scale: 1,
    opacity: 1,
  },
  exit: {
    rotate: 90,
    scale: 0,
    opacity: 0,
  },
};
