module.exports = {
  email: 'omotoshoshaun@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/shola1y',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shola._o',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/playboylaly',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/shola-omotosho-9a627312a/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/sholaly',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#708090',
    darkNavy: '#333333',
  },
  //#0a192f
  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
