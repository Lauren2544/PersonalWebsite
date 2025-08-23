import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import photo2 from "../../assets/project_photos/recipesforrookies/photo1.png";
import photo1 from "../../assets/project_photos/recipesforrookies/photo2.png";

export default function RecipesForRookies() {
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
      <h1 className="text-4xl font-bold text-colour1 mb-4">Recipes For Rookies</h1>

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
          {/* <div>
            <img src={photo2} />
          </div> */}
        </Carousel>
        </div>
      </div>

      {/* Intro Description */}
      <p className="mb-6">
        Welcome to Recipes For Rookies!
      </p>
      <p className="mb-6">
        Recipes For Rookies is a digital cookbook with beginner-friendly recipes from around the world; perfect for new chefs learning how to cook.
      </p>
      <p className="mb-6">
        This website was built at my very first hackathon ever at MLH RookieHacks built by Lauren Rowe, Ashish Gupta, Nick Boisclair, and Alana Reyes. We didn't have time to learn how to connect a database/storage mechanism so all the recipes are hardcoded html files.
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">How It Works</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Click on a spot on the world map to discover recipes from that region, then choose one and enjoy making a delicious meal.</li>
        <li>Additionally, we also have a search functionality that you can use to search for a recipes you like.</li>
      </ol>

      {/* Lessons Learned */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">Lessons Learned</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Hackathons are fun.</li>
        <li>I need sleep to function.</li>
      </ul>

      {/* Known Bugs */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">Known Bugs</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>The add your own recipe feature is not set up.</li>
      </ul>

    </div>
  );
}
