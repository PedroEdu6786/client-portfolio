// Menu icon hand wave
export const handMotion = {
  hover: {
    rotate: [0, 14, -8, 14, 0],
  },
}

// Menu Item circle animation
export const menuItem = {
  side: {
    x: 5,
  },
  hide: {
    x: 0,
  },
}

//Hover social media icon
export const iconMotion = {
  show: { backgroundColor: '#6380E8', color: '#F9F9F9', y: -5 },
}

//transition type
export const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}

//svg logo path animation
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

//3d image and text messages props
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

//social media section when page load
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
