

import {useState} from "react";

// Project data
const projectsData = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description:
      "A smart task management application that uses machine learning to prioritize tasks and predict completion times.",
    status: "completed",
    technologies: ["React", "Node.js", "TensorFlow", "MongoDB"],
    image: "/ai-task-manager-dashboard.jpg",
    githubUrl: "https://github.com/example/ai-task-manager",
    liveUrl: "https://ai-tasks.example.com",
    completionDate: "2024-01-15",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    status: "active",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    image: "/modern-ecommerce-website.png",
    githubUrl: "https://github.com/example/ecommerce-platform",
    liveUrl: "https://shop.example.com",
    completionDate: null,
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description:
      "Real-time weather monitoring system with predictive analytics and interactive data visualizations.",
    status: "completed",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
    image: "/weather-dashboard-analytics.jpg",
    githubUrl: "https://github.com/example/weather-dashboard",
    liveUrl: "https://weather.example.com",
    completionDate: "2023-11-20",
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    description:
      "Secure and transparent voting platform built on blockchain technology with smart contract integration.",
    status: "planning",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    image: "/blockchain-voting-interface.png",
    githubUrl: null,
    liveUrl: null,
    completionDate: null,
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description:
      "Comprehensive social media monitoring tool with sentiment analysis and engagement tracking.",
    status: "active",
    technologies: ["Python", "Django", "NLP", "Chart.js"],
    image: "/social-media-analytics-dashboard.png",
    githubUrl: "https://github.com/example/social-analytics",
    liveUrl: null,
    completionDate: null,
  },
  {
    id: 6,
    title: "IoT Home Automation",
    description:
      "Smart home control system with voice commands, automated scheduling, and energy monitoring.",
    status: "completed",
    technologies: ["Arduino", "React Native", "MQTT", "Firebase"],
    image: "/smart-home-automation-app.png",
    githubUrl: "https://github.com/example/iot-home",
    liveUrl: "https://smarthome.example.com",
    completionDate: "2023-09-10",
  },
];

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.status === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "active":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "planning":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "active":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "planning":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xs text-gray-300 max-w-2xl mx-auto">
            A collection of innovative solutions and creative implementations
            across various technologies
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="backdrop-blur-md text-xs rounded-lg bg-white/5 border border-white/10  p-1 flex ">
            {["all", "completed", "active", "planning"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === status
                    ? "bg-white/20 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {getStatusIcon(project.status)}
                    {project.status.charAt(0).toUpperCase() +
                      project.status.slice(1)}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Completion Date */}
                {project.completionDate && (
                  <p className="text-xs text-gray-400 mb-4">
                    Completed:{" "}
                    {new Date(project.completionDate).toLocaleDateString()}
                  </p>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-white text-sm rounded-lg transition-colors border border-gray-600/30 hover:border-gray-500/50"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 text-sm rounded-lg transition-colors border border-cyan-500/30 hover:border-cyan-400/50"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 max-w-md mx-auto">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">
                No Projects Found
              </h3>
              <p className="text-gray-400">
                No projects match the selected filter.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
