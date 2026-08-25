export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const scaleIn = (delay) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: delay,
      },
    },
  };
};

export const slideLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: +100,
    },
    visible: {
      opacity: 100,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const slideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 100,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const slideUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: +100,
    },
    visible: {
      opacity: 100,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const slideDown = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 100,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const buttonAnimation = {
  whileHover: {
    scale: 1.05,
  },
  whileTap: {
    scale: 0.95,
  },
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
