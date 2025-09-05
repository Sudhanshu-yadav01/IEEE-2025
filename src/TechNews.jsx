import React from "react";
import { ExternalLink, Clock, User } from "lucide-react"
const newsData = [
  {
    id: 1,
    headline: "Revolutionary AI Technology Transforms Healthcare Industry",
    content:
      "A groundbreaking artificial intelligence system has been developed that can diagnose diseases with 95% accuracy, potentially revolutionizing medical care worldwide. The system uses advanced machine learning algorithms to analyze medical images and patient data.",
    author: "Dr. Sarah Johnson",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    link: "https://example.com/ai-healthcare",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMArvEl8p5Aw3GBlh-FoSrlEBOql0jOa8Njg&s",
  },
  {
    id: 2,
    headline: "Web3 Development Reaches New Milestone",
    content:
      "Decentralized applications are seeing unprecedented adoption as developers embrace blockchain technology. New frameworks are making it easier than ever to build scalable dApps with improved user experience.",
    author: "Michael Chen",
    publishedAt: "2024-01-14",
    readTime: "7 min read",
    category: "Blockchain",
    link: "https://example.com/web3-milestone",
    image: "https://coingeek.com/wp-content/uploads/2024/04/Web3-jpg.webp",
  },
  {
    id: 3,
    headline: "React 19 Features Transform Frontend Development",
    content:
      "The latest React release introduces game-changing features including automatic batching, concurrent rendering improvements, and enhanced server components that are reshaping how developers build modern web applications.",
    author: "Dr. Emily Rodriguez",
    publishedAt: "2024-01-13",
    readTime: "4 min read",
    category: "Frontend",
    link: "https://example.com/react-19",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQGsDp9xrUHXqg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1678346936133?e=2147483647&v=beta&t=BTPG_p5S4l2Xph4noc1GcH-vNSwcgO21YK2mhgzo1bQ",
  },
  {
    id: 4,
    headline: "AI Code Generation Tools Boost Developer Productivity",
    content:
      "Latest AI-powered development tools are showing remarkable results in code generation and debugging, with developers reporting 40% faster development cycles and improved code quality across various programming languages.",
    author: "Robert Kim",
    publishedAt: "2024-01-12",
    readTime: "6 min read",
    category: "AI Tools",
    link: "https://example.com/ai-coding",
    image: "https://favtutor.com/resources/images/uploads/AI_Code_Generator.png",
  },
]

const GlassCard = ({ children, className = "", ...props }) => (
  <div className={`backdrop-blur-md bg-black/40 border border-white/20 rounded-xl shadow-2xl ${className}`} {...props}>
    {children}
  </div>
)

const Badge = ({ children, className = "", variant = "default" }) => {
  const variants = {
    default: "bg-gray-800/90 text-white border border-gray-600/70",
    breaking: "bg-red-600/95 text-white border border-red-500/80",
    category: "bg-blue-600/90 text-white border border-blue-500/80",
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

const Button = ({ children, className = "", variant = "default", ...props }) => {
  const variants = {
    default: "bg-gray-800/90 hover:bg-gray-700/90 text-white border border-gray-600/70 hover:border-gray-500/70",
    outline: "bg-gray-800/80 hover:bg-gray-700/90 text-white border border-gray-600/70 hover:border-gray-500/70",
  }

  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
const TechNews = () => {
  return (
    <section className="w-full min-h-screen  text-white p-6">
      <div className="text-center mb-8 pb-6">
        <GlassCard className="p-8 mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            
            <h1 className="text-2xl md:text-6xl font-bold font-serif text-red-600">RAIT IEEE TIMES</h1>
          </div>
          <div className="flex items-center justify-center gap-4 text-xs text-white">
            <span>Est. 2024  |</span>
            
            <span>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </GlassCard>
      </div>

      <div className="mb-8">
        <GlassCard className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div>
              <Badge variant="breaking" className="mb-3 animate-pulse">
                BREAKING NEWS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance leading-tight text-white">
                {newsData[0].headline}
              </h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">{newsData[0].content}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{newsData[0].author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{newsData[0].readTime}</span>
                </div>
              </div>
              <Button className="group">
                <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Read Full Article
              </Button>
            </div>
            <div className="relative">
              <img
                src={newsData[0].image || "/placeholder.svg"}
                alt={newsData[0].headline}
                className="w-full h-64 md:h-full object-cover rounded-lg"
              />
              <Badge variant="category" className="absolute top-3 right-3">
                {newsData[0].category}
              </Badge>
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.slice(1).map((article) => (
          <GlassCard key={article.id} className="overflow-hidden hover:bg-white/15 transition-all duration-300 group">
            <div className="relative">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.headline}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge variant="category" className="absolute top-3 right-3">
                {article.category}
              </Badge>
            </div>
            <div className="p-4 bg-black/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2 text-balance leading-tight text-white group-hover:text-cyan-300 transition-colors">
                {article.headline}
              </h3>
              <p className="text-gray-200 mb-3 text-sm leading-relaxed line-clamp-3">{article.content}</p>
              <div className="flex items-center justify-between text-xs text-gray-300 mb-3">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full group bg-transparent">
                <ExternalLink className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                Read More
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default TechNews;
