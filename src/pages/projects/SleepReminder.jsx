import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


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
      <h1 className="text-4xl font-bold text-colour1 mb-4">Sleep Reminder</h1>


    <p className="mb-6">
      Welcome to your Sleep Reminder Chrome Extension helper!
    </p>
    <p className="mb-6">
      The Sleep Reminder Chrome Extension was built in js to help make sure you head to bed at a healthy time.
    </p>
    <p className="mb-6">
      Sometimes when you're stuck in a task or an activity, even if you want to go to sleep, your brain could be tired and resist switching tasks. 
      This extension helps you break out of that loop by making the transition to bedtime easier and more automatic.
    </p>

    {/* How It Works */}
    <h2 className="text-2xl font-semibold text-colour1 mt-10 mb-4">How It Works</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>At the scheduled time, the extension activates automatically.</li>
      <li>A countdown from 3 begins, giving you a moment to wrap up anything urgent (or to make sure you don't end your show on a cliffhanger).</li>
      <li>Once the countdown ends, all tabs are closed.</li>
      <li>A lullaby plays, signaling it's time to sleep.</li>
    </ol>



    </div>
  );
}
