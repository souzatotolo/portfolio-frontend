import * as React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['#7701F1', '#9C1AFF', '#7700FF'];
const menuName = ['Contact', 'About', 'Projects'];

export const MenuItem = ({ i }) => {
  const style = {};

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" />
      <div
        className="text-placeholder text-2xl font-bold text-zinc-50  "
        style={style}
      >
        {menuName[i]}
      </div>
    </motion.li>
  );
};
