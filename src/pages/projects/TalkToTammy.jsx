import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import photo1 from "../../assets/project_photos/talktotammy/photo1.png";
import photo2 from "../../assets/project_photos/talktotammy/photo2.png";
import photo3 from "../../assets/project_photos/talktotammy/photo3.png";

export default function TalkToTammy() {
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
      <h1 className="text-4xl font-bold text-colour1 mb-4">Talk To Tammy</h1>

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
            <p className="absolute rounded p-3">
              Landing site to install our discord bot 
            </p>
          </div>
          <div>
            <img src={photo2} />
          </div>
          <div>
            <img src={photo3} />
          </div>
        </Carousel>
        </div>
      </div>

      {/* Intro Description */}
      <p className="mb-6">
        Welcome to Talk To Tammy!
      </p>
      <p className="mb-6">
        Talk to Tammy is your own quarantine buddy who is a discord chat bot built in python with games, translations, access to the internet, and voice-enabled Q&A. 
      </p>
      <p className="mb-6">
        Talk to Tammy was built with nlp before ChatGPT and llms were as wide spread as they currently are. Talk to Tammy was built at MLH Same Home Different Hacks by Lauren Rowe, Rohan Singh, Chris King, and Daniel Qiu. Talk to Tammy is unfortunately disabled and no longer running as we ran out of free google cloud credits, and well unfortunately or fortunately ... chatGPT is a much much much better version of Talk to Tammy, but at our projects height our chat bot was installed on 50+ servers. 
      </p>

      {/* How It Works */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">How It Works</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Install our bot on discord from the landing website.</li>
        <li>Navigate to our landing page to get the full list of commands you can use to Talk to Tammy.</li>
        <li>Enter a command to start talking! You can ask any variation of these examples by adding filler words like "can you" or "of" and it will yeild the same answer! Examples include: 
          <ul className="list-disc list-inside space-y-1 ml-6 space-x-2">
            <li>Google [search term]</li>
            <li>Weather [location]</li>
            <li>Translate [destination language] [message]</li>
            <li>Wiki summary [search term]</li>
            <li>Do you have any pets?</li>
          </ul>
        </li>
        <li>Talk-to-Tammy can also enable and disable talk-speech simply by entering the command "$tts true" and "$tts false" respectively into the chat.</li>
      </ol>

      {/* Lessons Learned */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">Lessons Learned</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Most problems can be solved with time.</li>
        <li>Working as four people who are beginners at git and don't understand feature branches is fun.</li>
      </ul>

      {/* Known Bugs */}
      <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">Known Bugs</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Tammy doesn't understand certain questions, you need to use specific keywords in your question.</li>
        <li>One of the games (hangman) only has like 3 words that it uses, which is not entirely fun because the words frequently repeat :/ </li>
      </ul>

    </div>
  );
}
