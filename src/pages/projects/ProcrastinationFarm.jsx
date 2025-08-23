import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import photo1 from "../../assets/project_photos/procrastinationfarm/photo1.png";
import photo2 from "../../assets/project_photos/procrastinationfarm/photo2.png";

export default function ProcrastinationFarm() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    navigate("/");

    // Wait for the homepage to load before scrolling to #projects
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "instant" });
    }, 100); 
  };

  return (
    <div className="p-8 pt-25 max-w-4xl mx-auto text-gray-800">
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="text-colour1 hover:underline mb-6 inline-block"
      >
        ← Back to Main Page
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold text-colour1 mb-4">Procrastination Farm</h1>

      {/* Carousel */}
      <div className="mb-8 w-full flex justify-center">
        <div className="w-full max-w-2xl">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          className="rounded-xl shadow-md"
        >
          <div>
            <img src={photo1} />
          </div>
          <div>
            <img src={photo2} />
          </div>
        </Carousel>
        </div>
      </div>

      {/* Intro Description */}
      <p className="mb-6">
        Welcome to the ProcrastinationFarm!
      </p>
      <p className="mb-6">
        Procrastination Farm is a lighthearted timer-based productivity app I built for a hackathon in 2020 during covid to make starting difficult tasks a little more fun. The idea is simple: when you start a task you've been putting off, you also start growing a farm animal. With each session, your farm expands — one task, one animal at a time. This project has no storage mechanism though so every time you reload the page, it will delete all of your progress growing your farm - so fun!
      </p>
      <p className="mb-6">
        This project was built entirely in html, css, and javascript — all within a single html file and a single css file — but I still have a lot of love for this project as this was my very first project using javascript (which is extremly obvious if you take a peek at the farm.html file). For those younger than me, this project was built before tools like ChatGPT so don't come at me for the quality of code in this project, I know, I know, it is really bad.
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">How It Works</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Choose a farm animal from the menu.</li>
        <li>Set a timer and begin a task you've been procrastinating.</li>
        <li>As the timer runs, the selected animal gradually appears and grows.</li>
        <li>Grow Your Farm - Each completed timer adds another animal to your Procrastination Farm.</li>
      </ol>

      {/* Lessons Learned */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">Lessons Learned</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Writing code all in one file is so fun.</li>
        <li>Naming things button1, button2, image1, image2, etc. is also so fun.</li>
        <li>Dry code, totally not needed at all.</li>
      </ul>

      {/* Known Bugs */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">Known Bugs</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>The animals do not grow at a linear rate.</li>
        <li>The page scrolls horizontally in case you wanted to go that way :)</li>
      </ul>

    </div>
  );
}
