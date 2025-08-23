import { Link } from "react-router-dom";
import ProjectTile from '../components/ProjectTile'; // adjust path as needed
import ProcrastinationFarm from './projects/ProcrastinationFarm';

const projects = [
  {
    id: "cap", 
    date: '2024 - Present',
    name: "Top Secret", 
    desc: "Currently working on a fourth-year capstone project with my two best friends. Don't tell anyone, it's classified :)",
    optionalText: "Group Project",
  },
  {
    id: "logi", 
    date: '2025',
    name: "Logi", 
    tech: "Tech Stack: html, css, js", 
    desc: "A chrome extension that calculates exponentials of base 2 and logarithms of base 2.",
    github: "https://github.com/Lauren2544/Logi", 
    projectLink: "https://chromewebstore.google.com/detail/logi/andjipnofechgchllkmjfdbpchdmfbac",
  },
  { 
    id: "monochrome", 
    date: '2025',
    name: "Monochrome", 
    tech: "Tech Stack: html, css, js", 
    desc: "A chrome extension that conditionally applies a greyscale filter to websites, to create a less distracting online experience.", 
    github: "https://github.com/Lauren2544/MonoChrome",
    projectLink: "https://chromewebstore.google.com/detail/monochrome/jonalgknaohhainambjnellmpfhblfeb",
  },
  { 
    id: "sleepreminder", 
    date: '2025',
    name: "Sleep Reminder", 
    tech: "Tech Stack: js", 
    desc: "A chrome extension that conditionally closes your tabs to act as a sleep reminder app.", 
    github: "https://github.com/Lauren2544/SleepReminder",
    moreInfo: "true"
  },
  { 
    id: "booknook", 
    date: '2025',
    name: "Book Nook", 
    desc: "A digital bookshelf app to track the books you read each year. ", 
    tech: "Tech Stack: node, react, express, tailwind, mongoDB", 
    github: "https://github.com/Lauren2544/Booknook",
    moreInfo: "true",
  },
  { 
    id: "secretsanta", 
    date: '2019 - 2025',
    name: "Secret Santa Organizer", 
    desc: "An automated way to shuffle names for Secret Santa gift exchanges.", 
    tech: "Tech Stack: html, css, php, phpmyadmin, mysql", 
    github: "https://github.com/Lauren2544/SecretSantaOrganizer",
    projectLink: "https://secretsantaorganizer.onrender.com/",
    moreInfo: "true",
  },
  { 
    id: "timeturner", 
    date: '2021',
    name: "Time Turner", 
    desc: "A daily planner that utilizes OpenCV computer vision to analyze alertness and suggest tasks based on your current state.", 
    tech: "Tech Stack: react, raspberry pi, open cv, firebase", 
    github: "https://github.com/DjKesu/timeturner",
    moreInfo: "true",
    optionalText: "Group Project",
  },
  { 
    id: "procrastinationfarm", 
    date: '2021',
    name: "Procrastination Farm", 
    desc: "A timer-based productivity app. The idea is simple: when you start a task you've been putting off, you also start growing a farm animal. ", 
    tech: "Tech Stack: html, css, js", 
    github: "https://github.com/Lauren2544/ProcrastinationFarm",
    projectLink: "https://procrastinationfarm.onrender.com/",
    moreInfo: "true",
  },
  { 
    id: "talktotammy", 
    date: '2020',
    name: "Talk to Tammy", 
    desc: "An nlp discord chat bot built in python with games, translations, access to the internet, and voice-enabled Q&A, installed on 50+ servers.", 
    tech: "Tech Stack: python, google cloud", 
    github: "https://github.com/chriswkingg/talk-to-tammy",
    projectLink: "",
    moreInfo: "true",
    optionalText: "Hackathon",
  },
  { 
    id: "recipesforrookies", 
    date: '2020',
    name: "Recipes for Rookies", 
    desc: "A digital cookbook with beginner-friendly recipes from around the world; perfect for new chefs learning how to cook.", 
    tech: "Tech Stack: html, css, js", 
    github: "https://github.com/Lauren2544/rookie-hacks",
    projectLink: "https://recipesforrookies.onrender.com/",
    moreInfo: "true",
    optionalText: "Hackathon",
  },
  { 
    id: "competitiveprogrammingtutor", 
    date: '2019',
    name: "Competitive Programming Tutor", 
    desc: "A website designed to help teach beginners the basics of competitive programming in both python and c.", 
    tech: "Tech Stack: html, css, js, python, c", 
    github: "https://github.com/Lauren2544/CompetitiveProgrammingTutor",
    projectLink: "",
    moreInfo: "true",
  },
  { 
    id: "webdevtutor", 
    date: '2019',
    name: "Web Dev Tutor", 
    desc: "A website designed to help teach beginners the basics of web development and relational databases.", 
    tech: "Tech Stack: html, css, php, phpmyadmin, mysql", 
    github: "https://github.com/Lauren2544/WebDevTutor",
    projectLink: "",
    moreInfo: "true",
  },
];

export default function Projects() {
  return (
     <div className="p-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-colour1">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <ProjectTile
            key={proj.id}
            id={proj.id}
            name={proj.name}
            desc={proj.desc}
            tech={proj.tech}
            date={proj.date}
            github={proj.github}
            projectLink={proj.projectLink}
            moreInfo={proj.moreInfo}
            optionalText={proj.optionalText}
          />
        ))}
      </div>
    </div>
  );
}