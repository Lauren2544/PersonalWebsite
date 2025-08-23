import TimelineItem from "../components/TimelineItem";

const workHistory = [
  { year: "May 2025 - August 2025 · 4 months", location: "Montreal, Quebec, Canada", company: "Polytechnique Montreal", title: "Cybersecurity Research Intern", desc: "Researched and provided solutions for a maritime digital twin project focused on cybersecurity management." },
  { year: "January 2025 - April 2025 · 4 months", location: "Ottawa, Ontario, Canada", company: "Trend Micro", title: "Backend Software Developer", desc: "Developed APIs to track the security compliance of various companies across industry-standard frameworks." },
  { year: "May 2024 - August 2024 · 4 months", location: "Toronto, Ontario, Canada", company: "Stoch Analytics", title: "Backend Software Developer", desc: "Automated actuarial report generation and streamlined data integration." },
  { year: "September 2023 - December 2023 · 4 months", location: "Bellville, Ontario, Canada", company: "BCS Automation", title: "Backend Software Developer", desc: "Engineered backend systems for a digital twin solution of a Canadian Coast Guard vessel." },
  { year: "January 2023 - April 2023 · 4 months", location: "Toronto, Ontario, Canada", company: "Horizn (Acquired by Inbenta)", title: "Full Stack Software Developer", desc: "Developed innovative web solutions to make digital banking more appealing and convenient for customers." },
  { year: "May 2022 - August 2022 · 4 months", location: "Montreal, Quebec, Canada", company: "Moneris", title: "Full Stack Software Developer", desc: "Developed a user tracking system for system admins to monitor account activity of customers." },
  { year: "May 2021 - August 2021 · 4 months", location: "Brampton, Ontario, Canada", company: "Ultimate Coders", title: "Python Coding Instructor" },
  { year: "September 2019 - August 2021 · 2 yrs", location: "Mississauga, Ontario, Canada", company: "Mississauga Aquatic Club", title: "Competitive Swim Coach" },
  { year: "February 2019 - August 2021 · 2 yrs 7 mos", location: "Mississauga, Ontario, Canada", company: "Port Credit Secondary School", title: "Grade 9/10 Academic Math Tutor" },
];


export default function Work() {
  return (
     <div className="p-6 bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      <h1 className="text-4xl font-bold mb-8 text-center md:mb-30 text-colour1">Work Experience</h1>
      <div className="relative max-w-4xl mx-auto">
        {/* center timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 md:bg-[rgb(62,97,134)]"></div>

        {/* timeline items */}
        {workHistory.map((item, index) => (
          <div
            key={index}
            className={`flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'} ${
              item.desc ? index % 2 !== 0 ? 'md:-mt-20' : 'md:-mt-20' : index % 2 !== 0 ? 'md:-mt-15' : 'md:-mt-15'
            }`}
          >
            <TimelineItem {...item} isLeft={index % 2 === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
