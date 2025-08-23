import painting from '../assets/irises.png';
import { Mail, Github, Linkedin } from 'lucide-react';


export default function Home() {
  return (
    <div className="p-8 text-center bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-3 text-colour1">Hi, I'm Lauren Rowe</h1>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">I'm a fourth year software engineering student at the University of Waterloo. I like swimming, reading, music, being outside, being creative, hanging out with friends, and solving problems. The painting below is <i>Irises</i> by Van Gogh and it is my current favourite painting and the inspiration for the colour scheme of this website. Feel free to connect with me or shoot me an email, you can find me here:</p>
      <div className="flex justify-center space-x-6 mt-6">
        <a href="https://github.com/Lauren2544" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="w-6 h-6 text-gray-500 hover:text-colour1 transition-colors duration-200" />
        </a>
        <a href="https://www.linkedin.com/in/lauren-rowe2544" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-6 h-6 text-gray-500 hover:text-colour1 transition-colors duration-200" />
        </a>
        <a href="mailto:l5rowe@uwaterloo.ca" aria-label="Email">
          <Mail className="w-6 h-6 text-gray-500 hover:text-colour1 transition-colors duration-200" />
        </a>
      </div>
      <div className="flex justify-center">
        <div className="rounded-full shadow-lg mt-7 w-75 h-75 bg-indigo-30 flex items-center justify-center">
          <img
            src={painting}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
