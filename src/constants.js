// Skills Section Logo's
import htmlLogo from './assets/skills/html.png';
import cssLogo from './assets/skills/css.png';
import javascriptLogo from './assets/skills/javascript.png';
import reactjsLogo from './assets/skills/reactjs.png';
import tailwindcssLogo from './assets/skills/tailwindcss.png';
import bootstrapLogo from './assets/skills/bootstrap.png';
import nodejsLogo from './assets/skills/nodejs.png';
import expressjsLogo from './assets/skills/express.png';
import mysqlLogo from './assets/skills/mysql.png';
import mongodbLogo from './assets/skills/mongodb.png';
import cLogo from './assets/skills/c.png';
import javaLogo from './assets/skills/java.png';
import pythonLogo from './assets/skills/python.png';
import gitLogo from './assets/skills/git.png';
import githubLogo from './assets/skills/github.png';
import vscodeLogo from './assets/skills/vscode.png';
import postmanLogo from './assets/skills/postman.png';
import vercelLogo from './assets/skills/vercel.png';

// Experience Section Logo's
import umLogo from './assets/companies/unifiedmentor.png'

// Education Section Logo's
import lhsLogo from './assets/education/educations1.png';
import hsLogo from './assets/education/educations2.png';
import bcaLogo from './assets/education/educations3.png';
import mcaLogo from './assets/education/educations4.png';

// Project Section Logo's
import mvvid from './assets/work/work1.mp4';
import ccvid from './assets/work/work2.mp4';
import rtcLogo from './assets/work/work3.png';
import pcLogo from './assets/work/work4.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: umLogo,
    role: "Fullstack Developer",
    company: "Unified Mentor Private Limited",
    date: "December 2024 - June 2025",
    desc: "Contributed to innovative projects as a Fullstack Developer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  
];

export const education = [
  {
    id: 0,
    img: mcaLogo,
    school: "SRM Institue of Science And Technology,TamilNadu",
    date: "July 2025 - July 2027",
    grade: "9.55 Sgpa",
    desc: "I am pursuing my Masters of Comuter Applications with specialization in Generative Artificial Intelligence from SRM Institue of Science And Technology,TamilNadu. ",
    degree: "Master of Computer Applications - MCA(Gen-AI)",
  },
  {
    id: 1,
    img: bcaLogo,
    school: "Caset College Of Computer Application",
    date: "July 2022 - July 2025",
    grade: "8.46 CGPA",
    desc: "I completed my Bachelor's degree in Computer Applications (BCA) from Caset College Of Computer Application. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Caset College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Applications",
  },
  {
    id: 2,
    img: hsLogo,
    school: "Boys Higher Secondary,JawaharNagar,Srinagar",
    date: "Dec 2021- Jan 2022",
    grade: "88.4%",
    desc: "I completed my class 12 education from Boys Higher Secondary,JawaharNagar,Srinagar, under the J&K board, where I studied Physics, Chemistry, and Biology (PCB) with Enivoronment Science.",
    degree: "JKBOSE(XII)",
  },
  {
    id: 3,
    img: lhsLogo,
    school: "SRM Institue of Science And Technology,TamilNadu",
    date: "Dec 2019 - Jan 2020",
    grade: "84.2%",
    desc: "I completed my class 10 education from Linton Hall School, Srinagar, under the J&K board, where I studied Science with Computer.",
    degree: "JKBOSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Movie Website",
    description:
      "A responsive movie browsing app built with React that lets users search movies in real time using the TMDB API and save favorites using localStorage. Includes multi-page navigation and reusable UI components.",
    video: mvvid,
    tags: ["React", "React Router", "Context API", "TMDB API", "CSS3"],
    github: "https://github.com/Arsalanmuteebmir/ReactProject",
  },
  {
    id: 1,
    title: "Currency Converter",
    description:
      "A simple and fast currency converter made using React that converts between different currencies with a clean UI and swap functionality. Helps practice API handling and input-based state management.",
    video: ccvid,
    tags: ["React", "JavaScript", "API", "CSS"],
    github: "https://github.com/Arsalanmuteebmir/ReactParts/tree/main/reactproject6",
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description:
      "A REST-based chat application with full CRUD operations for messages, built using Express.js and MongoDB. Includes message creation, editing, deletion, and structured backend using MVC architecture.",
    image: rtcLogo,
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS"],
    github: "https://github.com/Arsalanmuteebmir/mongo-with-express",
  },
  {
    id: 3,
    title: "Posts CRUD App",
    description:
      "A basic blog-style CRUD project where users can create, view, edit, and delete posts using RESTful routing. Built with clean route handling and server-rendered pages using EJS templates.",
    image: pcLogo,
    tags: ["Express.js", "EJS", "UUID", "Method-Override", "JavaScript", "MySQL"],
    github: "https://github.com/Arsalanmuteebmir/nodewithsql",
  },
];  