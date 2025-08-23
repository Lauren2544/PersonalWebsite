import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Readings from "./pages/Readings";

import BookNook from "./pages/projects/BookNook";
import ProcrastinationFarm from "./pages/projects/ProcrastinationFarm";
import TalkToTammy from "./pages/projects/TalkToTammy";
import RecipesForRookies from "./pages/projects/RecipesForRookies";
import CompetitiveProgrammingTutor from "./pages/projects/CompetitiveProgrammingTutor";
import WebDevTutor from "./pages/projects/WebDevTutor";
import TimeTurner from "./pages/projects/TimeTurner";
import SecretSantaOrganizer from "./pages/projects/SecretSantaOrganizer";
import SleepReminder from "./pages/projects/SleepReminder";

const projectPages = [
  {
    id: "booknook",
    component: BookNook,
  },
  {
    id: "procrastinationfarm",
    component: ProcrastinationFarm,
  },
  {
    id: "talktotammy",
    component: TalkToTammy,
  },
  {
    id: "recipesforrookies",
    component: RecipesForRookies,
  },
  {
    id: "webdevtutor",
    component: WebDevTutor,
  },
  {
    id: "timeturner",
    component: TimeTurner,
  },
  {
    id: "secretsanta",
    component: SecretSantaOrganizer,
  },
  {
    id: "competitiveprogrammingtutor",
    component: CompetitiveProgrammingTutor,
  },
  {
    id: "sleepreminder",
    component: SleepReminder,
  },
];

export default function App() {
  return (
    <Router>
      <div className="bg-white text-blue-800 min-h-screen">
        <Navbar />

        <Routes>
          {/* Main Scrollable Page */}
          <Route
            path="/"
            element={
              <div className="pt-16">
                <section id="home" className="min-h-screen p-6 scroll-mt-16"><Home /></section>
                <section id="work" className="min-h-screen p-6 scroll-mt-16"><Work /></section>
                {/* <section id="education" className="min-h-screen p-6 scroll-mt-16"><Education /></section> */}
                <section id="projects" className="min-h-screen p-6 scroll-mt-16"><Projects /></section>
                <section id="readings" className="min-h-screen p-6 scroll-mt-16"><Readings /></section>
              </div>
            }
          />

          {/* Dynamic project detail pages */}
          {projectPages.map(({ id, component: Component }) => (
            <Route
              key={id}
              path={`/projects/${id}`}
              element={<Component />}
            />
          ))}
          
        </Routes>

      </div>
    </Router>
  );
}
