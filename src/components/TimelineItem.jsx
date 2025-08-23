export default function TimelineItem({ year, title, company, location, desc, isLeft }) {
  return (
    <div className={`relative w-full md:w-1/2 mb-4 ${isLeft ? 'md:pr-4 md:text-right' : 'md:pl-4 md:text-left'}`}>
      <div className="bg-gradient-to-b from-indigo-20 via-indigo-10 to-indigo-40 border border-colour1 rounded-2xl p-3 shadow-md inline-block w-full">
        <p className="text-sm text-gray-500 mb-1">{year}</p>
        <h3 className="text-lg font-bold mb-1 text-colour1">{title}</h3>
        {company && <p className="text-sm font-medium text-gray-700 mb-1">{company}</p>}
        {location && <p className="text-sm italic text-gray-600 mb-1">{location}</p>}
        {desc && <p className="text-sm text-gray-700">{desc}</p>}
      </div>
    </div>
  );
}