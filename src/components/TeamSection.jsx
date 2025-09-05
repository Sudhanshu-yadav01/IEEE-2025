import {FaLinkedin, FaXTwitter, FaDribbble} from "react-icons/fa6";

const team = [
  {
    name: "David Kim",
    role: "Data Analyst",
    description:
      "David analyzes data trends to inform our strategic decisions and project developments.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    links: {
      linkedin: "#",
      twitter: "#",
      
    },
  },
  {
    name: "Alex Morgan",
    role: "Frontend Developer",
    description:
      "Alex builds beautiful and responsive user interfaces for our web applications.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    links: {
      linkedin: "#",
      twitter: "#",
      
    },
  },
  {
    name: "Priya Singh",
    role: "Project Manager",
    description:
      "Priya coordinates the team and ensures timely delivery of all our projects.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    links: {
      linkedin: "#",
      twitter: "#",
      
    },
  },
];

export default function TeamSection() {
  return (
    <div className="grid md:grid-cols-3 gap-8 py-12">
      {team.map((member, idx) => (
        <div
          key={idx}
          className="bg-black border border-white/20 rounded-2xl p-6 flex flex-col items-center max-w-xs mx-auto shadow-lg"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-40 h-40 object-cover rounded-xl mb-4"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white">{member.name}</h3>
            <p className="text-gray-300 mb-2">{member.role}</p>
            <p className="text-gray-400 text-sm mb-4">{member.description}</p>
            <div className="flex justify-center gap-4">
              {member.links.linkedin && (
                <a
                  href={member.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white hover:text-blue-400 text-xl" />
                </a>
              )}
              {member.links.twitter && (
                <a
                  href={member.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="text-white hover:text-blue-400 text-xl" />
                </a>
              )}
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
