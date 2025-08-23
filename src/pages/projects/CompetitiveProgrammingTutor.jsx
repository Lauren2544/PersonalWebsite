import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import photo1 from "../../assets/project_photos/competitiveprogrammingtutor/photo1.png";
import photo2 from "../../assets/project_photos/competitiveprogrammingtutor/photo2.png";
import photo3 from "../../assets/project_photos/competitiveprogrammingtutor/photo3.png";
import photo4 from "../../assets/project_photos/competitiveprogrammingtutor/photo4.png";
import photo5 from "../../assets/project_photos/competitiveprogrammingtutor/photo5.png";

export default function CompetitiveProgrammingTutor() {
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
      <h1 className="text-4xl font-bold text-colour1 mb-4">Competitive Programming Tutor</h1>

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
          <div>
            <img src={photo3} />
          </div>
          <div>
            <img src={photo4} />
          </div>
          <div>
            <img src={photo5} />
          </div>
        </Carousel>
        </div>
      </div>

      {/* Intro Description */}
      <p className="mb-6">
        Welcome to your Competitive Programming Tutor!
      </p>
      <p className="mb-6">
        The Competitive Programming Tutor was built in html and css to help teach you the basics of competitive programming. This website can be used as a solution manual to use while studing for the Canadian Computing Competition (CCC) - a competition run by the University of Waterloo with the goal of teaching high school students how to code!
      </p>
      <p className="mb-6">
        I was just learning C while making this website so the C solutions are not entirely complete. But for the problems I did solve in both C and Python, it was fun to see how much faster the C versions ran!
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">How It Works</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Navigate to the problem section you want (J1 is easiest, S3 is hardest).</li>
        <li>Read the problem and try to solve!</li>
        <li>If you get stuck check the "click here for more information" for hints.</li>
        <li>Finally take a look at the solution.</li>
      </ol>

      {/* Lessons Learned */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">Lessons Learned</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>C is so so so much faster than python.</li>
        <li>Creating a website aimed at teaching others also helped me learn.</li>
      </ul>

      {/* Known Bugs */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">Known Bugs</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>The "contact us" form does not work.</li>
        <li>There are only limited problems solved in C.</li>
      </ul>

    </div>
  );
}
