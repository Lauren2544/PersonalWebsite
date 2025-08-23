import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import photo2 from "../../assets/project_photos/booknook/photo2.png";
import photo3 from "../../assets/project_photos/booknook/photo3.png";
import photo4 from "../../assets/project_photos/booknook/photo4.png";
import photo5 from "../../assets/project_photos/booknook/photo5.png";
import photo6 from "../../assets/project_photos/booknook/photo6.png";
import photo7 from "../../assets/project_photos/booknook/photo7.png";
import photo8 from "../../assets/project_photos/booknook/photo8.png";
import photo9 from "../../assets/project_photos/booknook/photo9.png";
import photo0 from "../../assets/project_photos/booknook/photo0.png";
// import photo11 from "../../assets/project_photos/booknook/photo11.png";

export default function BookNook() {
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
      <h1 className="text-4xl font-bold text-colour1 mb-4">Book Nook</h1>

      {/* Carousel */}
      <div className="mb-8 w-full flex justify-center">
        <div className="w-full max-w-md">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          className="rounded-xl shadow-md"
        >
          <div>
            <img src={photo0} />
            <p className="absolute rounded p-3">
              Login page
            </p>
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
          <div>
            <img src={photo6} />
          </div>
          <div>
            <img src={photo7} />
          </div>
          <div>
            <img src={photo8} />
          </div>
          <div>
            <img src={photo9} />
          </div>
          {/* <div>
            <img src={photo10} />
          </div> */}
          {/* <div>
            <img src={photo11} />
          </div> */}

        </Carousel>
        </div>
      </div>

      {/* Intro Description */}
      <p className="mb-6">
        Welcome to Book Nook!
      </p>
      <p className="mb-6">
        Book Nook is a simple and prettier alternative to Goodreads for tracking the books you read each year. Built with node, react, tailwind, and mongoDB. 
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">Features</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Track your reading history by year, visually displayed on bookshelves.</li>
        <li>Customizable images on book covers and spines.</li>
        <li>Cute plant decorations for empty shelves to keep things cozy.</li>
        <li>User authentication with login, signup, and logout.</li>
        <li>Responsive design for both desktop and phone.</li>
        <li>Abiility to add, view, and delete books.</li>
      </ol>

      {/* Lessons Learned */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">Lessons Learned</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Tailwind is cool.</li>
        <li>MongoDB is super cool.</li>
      </ul>

      {/* Known Bugs */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">Known Bugs</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>You can't edit any of the books.</li>
      </ul>

    </div>
  );
}
