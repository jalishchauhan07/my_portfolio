import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Dicot Innovation PVT LTD.",
    icon: meta,
    iconBg: "#ffff",
    date:
      "Sep 2023 - Present ( " +
      Math.floor(
        Math.abs(new Date("2023-09-01") - new Date()) /
          (1000 * 60 * 60 * 24 * 30.436875)
      ) +
      "   Months )",
    points: [
      "Developing robust web applications using Node.js and Express.js, integrating third-party APIs. Utilized TypeScript for code maintainability and MongoDB for data storage.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing third-party APIs such as Razorpay for payment processing, MapmyIndia API for mapping functionality, and Pagination for managing large datasets.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Web Developer Intern",
    company_name: "Yudiz Solution PVT LTD.",
    icon: shopify,
    iconBg: "#ffff",
    date:
      "Feb 2023 - July 2023 ( " +
      Math.ceil(
        Math.abs(new Date("2023-02-01") - new Date("2023-07-31")) /
          (1000 * 60 * 60 * 24 * 30.436875)
      ) +
      "   Months )",
    points: [
      "Developed engaging 2D web games using Phaser.js, including a endless runner, a tank battle game, a snake and ladder game, a card matching game, and a brick-breaking game.",
      "Collaborated with cross-functional teams, including other developers, to create high-quality products.",
      "Implemented physics, animation, tweens for object movement, scaling, and rotation, ensuring cross-browser compatibility, and implementing responsive design",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Meta Tank",
    description: `Developed a meta tank game featuring tank customization, strategic battles against Bot or multiplayer opponents, and a progression system. Implemented animations, including a bomb and shield, to enhance gameplay experience. Designed for two-player gameplay, with one player as the user/client and the other as robot opponents.`,
    tags: [
      {
        name: "Phaser",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://jalishchauhan07.github.io/meta-tank/",
  },
  {
    name: "Snake & Ladder",
    description:
      "Developed 'Snake Ladder' game using JavaScript and Phaser 3 framework. Features four players taking turns, with dice value randomly generated. Players' positions adjusted based on dice value, encountering ladders or snakes. Added condition for players requiring 'n' steps, restricting dice value if needed. Developed for interactive gaming experience.",
    tags: [
      {
        name: "Phaser",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://jalishchauhan07.github.io/snakes-ladder/",
  },
  {
    name: "News Website",
    description:
      "Developed a news website using React.js that provides users with news from various categories, including entertainment, sports, politics, business, local, national, and international. The website fetches the latest news using the NewsAPI, providing users with up-to-date information across a wide range of topics. ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NewAPI",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg",
    source_code_link: "",
  },
  {
    name: "E-Commerce Shopping Website",
    description:
      "Developed an E-commerce shopping website using the MERN stack. Created the frontend using React.js and simulated product data using a FakeAPI. Built APIs using Express.js for E-commerce functionality and connected them to MongoDB for data storage.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image:
      "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg",
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
