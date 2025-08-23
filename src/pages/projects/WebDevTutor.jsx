import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import photo1 from "../../assets/project_photos/webdevtutor/photo1.png";
import photo2 from "../../assets/project_photos/webdevtutor/photo2.png";
import photo3 from "../../assets/project_photos/webdevtutor/photo3.png";

export default function WebDevTutor() {
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
      <h1 className="text-4xl font-bold text-colour1 mb-4">Web Dev Tutor</h1>

      {/* Carousel */}
      {/* <div className="mb-8 w-full flex justify-center">
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
        </Carousel>
        </div>
      </div> */}

      {/* Intro Description */}
      <p className="mb-6">
        Welcome to your Web Development Tutor!
      </p>
      <p className="mb-6">
        The Web Dev Tutor was built was built in html and css to help teach you the basics of web development. 
      </p>
      <p className="mb-6">
        This was my second project using a relational database (my first was the Secret Santa Organizer), but I was still pretty confused about how everything fit together. I used phpMyAdmin and created this website to walk through, step by step, how to connect to a MySQL database and make GET and POST requests to query data.
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">How It Works</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Read through and follow the modules to create and connect to the database!</li>
        <li>By the end of the modules, you'll be able to submit a form, similar to the "contact us" form on the homepage, and have the submitted data saved to a database!</li>
      </ol>

      {/* Lessons Learned */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">Lessons Learned</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>I learned how to use HTTP methods to fetch and send data.</li>
        <li>I learned how to structure tables and insert data into a MySQL database.</li>
      </ul>

    </div>
  );
}
