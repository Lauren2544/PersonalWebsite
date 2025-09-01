import { Link, Route} from "react-router-dom";

export default function ProjectTile({ id, name, desc, tech, date, github, projectLink, moreInfo, optionalText }) {
  return (
    <div className="relative border rounded-2xl shadow-lg p-6 hover:bg-indigo-50 transition">
        {/* <div className="absolute top-3 left-4">
            <div className="text-sm text-gray-500 italic">{date}</div>
            <div className="text-xs bg-indigo-100 text-indigo-500 font-semibold px-2 py-1 rounded-full shadow-sm">
            Hackathon 
            </div>
        </div> */}
        <div className="absolute top-3 right-4 flex items-center justify-end gap-2">
            {optionalText && (
                <div className="text-xs bg-indigo-100 text-colour1 font-semibold px-2 py-1 rounded-full shadow-sm">
                    {optionalText}
                </div>
            )}
            <div className="text-sm text-gray-500 italic">{date}</div>
        </div>
      
        <h2 className="text-lg font-semibold text-colour1 mb-2 mt-4">{name}</h2>

        <div className="mb-2 flex gap-4 text-gray-700 text-sm">
            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 underline hover:font-bold">
                GitHub
            </a>
            )}
            {moreInfo && (
                <Link to={`/projects/${id}`} className="flex items-center gap-1 underline hover:font-bold">
                    More Info
                </Link>
            )}
            {projectLink && (
                <a href={projectLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:font-bold underline">
                 Project Link
            </a>
            )}
        </div>
        <p className="text-gray-700 text-sm mb-2">{tech}</p>


        <p className="text-gray-700">{desc}</p>
      
    </div>
  );
}