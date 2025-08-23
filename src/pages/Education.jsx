import cello from '../assets/cello.png';
// import cello from '../assets/cello2.png';

export default function Education() {
  return (
     <div className="p-8 bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen">
      <h2 className="text-4xl font-semibold text-colour1 mb-10 text-center">Education</h2>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="flex-1">
          <div className="mb-12 mt-6">
            <h3 className="text-left text-colour1 text-xl font-bold">University of Waterloo</h3>
            <p className="text-sm text-gray-600 text-left"><i>September 2021 - May 2026</i></p>
            <p className="text-md text-gray-600 text-left font-semibold">Bachelor of Software Engineering</p>
            {/* <p className="text-md text-gray-600 text-left">Human-Computer Interaction (HCI) Specialization </p> */}
            <p className="text-md text-gray-600 text-left">
              Relevant coursework: Data Structures, Algorithms, Databases, Operating Systems, User Interfaces, Concurrency,
              Control Systems, Intro to ML, Networks, Ethics, Public Speaking
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-left text-colour1 text-xl font-bold">Port Credit Secondary School</h3>
            <p className="text-sm text-gray-600 text-left"><i>September 2017 - June 2021</i></p>
            <p className="text-md text-gray-600 text-left font-semibold">Ontario Secondary School Diploma</p>
            <p className="text-md text-gray-600 text-left">
              Regional SciTech Program · Regional Strings Program
            </p>
          </div>
        </div>

        {/* <div className="mt-45 lex-shrink-0 w-full lg:w-64 flex justify-center lg:justify-end">
          <img
            src={cello}
            alt="Cello"
            className="max-w-full h-auto object-contain"
          />
        </div> */}
      </div>
    </div>
  );
}
