export const aboutMe =
  "I'm Eden, I'm a bachelor's student in computer science and I'm excited to find my first job in the high-tech world. In addition to my degree, I take part in the QueenB association where I guide eighth grade girls in the first stages of learning to write code and mainly show them that they too can be programmers and even enjoy it. \n Beyond studies and training, I am passionate about sports, food and spending as much time as possible with the most perfect nephews in the world.\n \n Right now my main goal is to find a job where I can apply my skills, a job where I can learn anew every day and integrate into a company where I can develop professionally and personally.";

export const linkedinLink = "https://www.linkedin.com/in/edenim/";

export const githubLink = "https://github.com/Eden-Ismah-Moshe";

export const facebookLink = "https://www.facebook.com/ismahm1?locale=he_IL";

export const instagramLink = "https://www.instagram.com/eden_im/";

export const myEducationData = [
  {
    name: "The Academic College of Tel Aviv-Yaffo",
    title: "B.Sc. in Computer Science",
    date: "2021 - present",
    iconBg: "#f9a826",
    icon: require("../../src/assets/The Academic College of Tel Aviv Yaffo.png"), // Assuming you have a valid icon URL or path here
    points: [
      "Throughout my education, I dedicated myself to improving my software engineering skills and mastering essential Computer Science principles, including data structures, algorithms, and programming in various languages such as C, C++, and Java.",
      "I gained experience using software tools like Visual Studio, IntelliJ, and PyCharm, and became skilled in using version control systems like Git and GitHub.",
      "Additionally, I gained practical experience with databases such as SQL and MongoDB. I also acquired some experience in Full Stack development using frameworks like React and React Native, as well as HTML, JavaScript, and CSS.",
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    image: require("../assets/QueensMatch.jpg"),
    title: "Queens Match",
    place: "QueenB x AppsFlyer Bootcamp",
    tags: ["React", "NodeJS", "PostgreSQL", "pgAdmin", "Docker"],
    description:
      "Queens Match is a mentorship platform that aims to connect mentors and mentees within the QueenB community.",
    github: "https://github.com/Eden-Ismah-Moshe/Queen-B-Bootcamp",
    details:
      "Queens Match is a mentorship platform developed during the QueenB and AppsFlyer Bootcamp. It aims to connect mentors and mentees within the QueenB community, fostering relationships that encourage women in tech. This project was built by a team of three members as part of the QueenB Initiative. We used modern technologies to create a seamless experience for users, allowing them to find, register, and connect with mentors.",
  },
  {
    id: 2,
    image: require("../assets/Dishcover.jpg"),
    title: "Dishcover",
    place: "The Academic College of Tel Aviv-Yafo",
    tags: ["React Native", "Node.js", "MongoDB", "APIFY", "Python"],
    description:
      "Dishcover is a personalized restaurant recommendation app that helps users find the perfect dining spots.",
    github: "https://github.com/Eden-Ismah-Moshe/Dishcover",
    details:
      "Dishcover is a personalized restaurant recommendation app that helps users find the perfect dining spots based on their preferences, past experiences, and current mood. The app leverages AI and machine learning to continuously refine recommendations, making dining out easier and more enjoyable.",
  },
  {
    id: 3,
    image: require("../assets/instaguard.png"),
    title: "InstaGuard",
    place: "QueenB x AppsFlyer Hackathon",
    tags: ["React", "Node.js"],
    description:
      "InstaGuard is a web application designed to address the growing concern of fake accounts on Instagram, which often lead to scams and catfishing, particularly alarming for parents and users alike.",
    github: "https://github.com/InstaGuard/InstaGuard",
    details:
      "InstaGuard is a web application designed to address the growing concern of fake accounts on Instagram, which often lead to scams and catfishing, particularly alarming for parents and users alike.",
  },
  {
    id: 4,
    image: require("../assets/stepper.jpg"),
    title: "Stepper",
    place: "The Academic College of Tel Aviv-Yafo",
    tags: ["Java", "JavaFX"],
    description:
      "Stepper is a workflow/pipeline system that enables the assembly of different scenarios from common components, including executing them and producing required results.",
    github: "https://github.com/Eden-Ismah-Moshe/Stepper-V3-Client_Server",
    details:
      "Stepper is a workflow/pipeline system that enables the assembly of different scenarios (called flows) from common components (called steps), including executing them and producing required results. The project includes various UI clients: Client-server. It includes a component that manages users and permissions, serving multiple clients concurrently and collecting information and statistics on their progress. ",
  },
  {
    id: 5,
    image: require("../assets/portfolio.jpg"),
    title: "Portfolio",
    place: "",
    tags: ["React", "Node.js"],
    description:
      "Portfolio is a compilation of my academic and professional materials that exemplifies my beliefs, skills, qualifications, education, training, and experiences. It provides insight into my personality and work ethic.",
    github: "https://github.com/Eden-Ismah-Moshe/my-portfolio",
    details:
      "Portfolio is a compilation of my academic and professional materials that exemplifies my beliefs, skills, qualifications, education, training, and experiences. It provides insight into my personality and work ethic.",
  },
];
