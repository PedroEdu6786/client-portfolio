export const handMotion = {
  hover: {
    rotate: [0, 14, -8, 14, 0],
  },
}

export const menuItem = {
  side: {
    x: 5,
  },
  hide: {
    x: 0,
  },
}

export const iconMotion = {
  show: { backgroundColor: '#6380E8', color: '#F9F9F9', y: -5 },
}

export const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}

export const logo = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    pathLength: 1.2,
    fill: 'rgba(255, 255, 255, 1)',
    transition: { duration: 2 },
  },
}

export const prop = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const socialIcon = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
}
