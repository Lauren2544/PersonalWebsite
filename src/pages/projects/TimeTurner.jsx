import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import photo1 from "../../assets/project_photos/timeturner/photo1.png";
import photo2 from "../../assets/project_photos/timeturner/photo2.png";
import photo3 from "../../assets/project_photos/timeturner/photo3.png";
import photo4 from "../../assets/project_photos/timeturner/photo4.png";

export default function TimeTurner() {
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
      <h1 className="text-4xl font-bold text-colour1 mb-4">Time Turner</h1>

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
        </Carousel>
        </div>
      </div>

      {/* Intro Description */}
      <p className="mb-6">
        Welcome to Time Turner!
      </p>
      <p className="mb-6">
        Time Turner is a system that uses computer vision to detect a user's energy levels using a camera and a raspeberry pi throughout the day and help organize/optimize daily tasks as apart of our task managing website.
      </p>
      <p className="mb-6">
        This project was built for our SE101 design project at the University of Waterloo. Designed by Lauren Rowe, Krish Shah, Valerie Fernandes, Candice Zhang, and Krish Mehta. 
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">How It Works</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Enter your daily tasks into the task manager website.</li>
        <li>Energy Detection based on eye aspect ratio using Python and OpenCV.</li>
        <li>Start completing tasks and let the system optimize your schedule.</li>
      </ol>

      {/* Known Bugs */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">Known Bugs</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Uploading and running the drowsiness detection program on the Raspberry Pi turned out to be slower than what we expected because of a low grade Raspberry Pi.</li>
      </ul>

    </div>
  );
}
