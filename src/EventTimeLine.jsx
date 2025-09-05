"use client";

import {Calendar, Clock, MapPin, Users, ChevronRight} from "lucide-react";
import {useState} from "react";

const eventsData = {
  past: [
    {
      id: 1,
      name: "IEEE RAIT Annual Tech Symposium 2023",
      date: "2023-11-15",
      time: "09:00 AM - 06:00 PM",
      location: "RAIT Campus Auditorium",
      description:
        "A comprehensive technology symposium featuring keynote speakers, technical presentations, and networking opportunities for students and professionals in emerging technologies.",
      image:
        "https://techsymposium.calpolyswift.org/assets/tech_symposium_logo_2018.png",
      attendees: 250,
      type: "Conference",
    },
    {
      id: 2,
      name: "Advanced Robotics & IoT Workshop",
      date: "2023-10-20",
      time: "02:00 PM - 05:00 PM",
      location: "Engineering Lab Block B",
      description:
        "Hands-on workshop series covering Arduino programming, sensor integration, IoT protocols, and autonomous robot development with real-world applications.",
      image: "/placeholder-8pfgf.png",
      attendees: 80,
      type: "Workshop",
    },
  ],
  present: [
    {
      id: 3,
      name: "AI & Machine Learning Bootcamp",
      date: "2024-01-15",
      time: "10:00 AM - 04:00 PM",
      location: "Computer Science Department",
      description:
        "Intensive bootcamp covering fundamentals of AI, deep learning algorithms, neural networks, and practical implementation using Python, TensorFlow, and PyTorch.",
      image:
        "https://sprintscdn-fnh2cugtb8a4deba.z02.azurefd.net/production/store/90058138/1737114950678a4546c0202.png",
      attendees: 120,
      type: "Bootcamp",
    },
  ],
  future: [
    {
      id: 4,
      name: "IEEE Student Branch Elections 2024",
      date: "2024-02-10",
      time: "11:00 AM - 03:00 PM",
      location: "Main Auditorium",
      description:
        "Annual elections for IEEE RAIT student branch executive positions. All IEEE members are encouraged to participate, vote, and shape the future of our technical community.",
      image:
        "https://th-i.thgim.com/public/incoming/vt3yw/article67648559.ece/alternates/FREE_1200/iStock-1269463469.jpg",
      attendees: 200,
      type: "Election",
    },
    {
      id: 5,
      name: "International Conference on Emerging Technologies",
      date: "2024-03-22",
      time: "09:00 AM - 06:00 PM",
      location: "RAIT Convention Center",
      description:
        "Premier international conference featuring cutting-edge research presentations on IoT, blockchain, quantum computing, edge computing, and sustainable technology solutions.",
      image: "",
      attendees: 400,
      type: "Conference",
    },
    {
      id: 6,
      name: "Hackathon 2024: Code for Innovation",
      date: "2024-04-15",
      time: "06:00 PM - 06:00 PM (+1 day)",
      location: "Innovation Hub",
      description:
        "24-hour hackathon focused on developing innovative tech solutions. Teams will work on projects addressing real-world challenges using latest technologies and frameworks.",
      image: "/placeholder-o2wbl.png",
      attendees: 150,
      type: "Hackathon",
    },
  ],
};

const GlassCard = ({children, className = "", ...props}) => (
  <div
    className={`backdrop-blur-md bg-black/40 border border-white/20  rounded-xl shadow-2xl ${className}`}
    {...props}
  >
    {children}
  </div>
);

const Badge = ({children, className = "", variant = "default"}) => {
  const variants = {
    default: "bg-gray-800/90 text-white border border-gray-600/70",
    outline: "bg-gray-800/80 text-white border border-gray-600/70",
    completed: "bg-gray-700/90 text-white border border-gray-500/70",
    ongoing:
      "bg-green-600/90 text-white border border-green-500/70 animate-pulse",
    upcoming: "bg-blue-600/90 text-white border border-blue-500/70",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const variants = {
    default:
      "bg-gray-800/90 hover:bg-gray-700/90 text-white border border-gray-600/70 hover:border-gray-500/70",
    outline:
      "bg-gray-800/80 hover:bg-gray-700/90 text-white border border-gray-600/70 hover:border-gray-500/70",
    green:
      "bg-green-600/90 hover:bg-green-500/90 text-white border border-green-500/70",
  };

  const sizes = {
    default: "px-4 py-2",
    sm: "px-3 py-1.5 text-sm",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 backdrop-blur-sm ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

function EventCard({event, status}) {
  const getStatusBadge = () => {
    switch (status) {
      case "past":
        return <Badge variant="completed">Completed</Badge>;
      case "present":
        return <Badge variant="ongoing">Live Now</Badge>;
      case "future":
        return <Badge variant="upcoming">Upcoming</Badge>;
    }
  };

  return (
    <GlassCard className="overflow-hidden hover:bg-white/15 transition-all duration-300 group border-l-4 border-l-cyan-400">
      <div className="grid md:grid-cols-3 gap-4 p-6 bg-black/10 backdrop-blur-sm">
        <div className="relative">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.name}
            className="w-full h-48 md:h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          {getStatusBadge()}
        </div>

        <div className="md:col-span-2 space-y-4">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-balance leading-tight text-white group-hover:text-cyan-300 transition-colors">
                {event.name}
              </h3>
              <Badge variant="outline" className="ml-2">
                {event.type}
              </Badge>
            </div>
            <p className="text-gray-200 leading-relaxed">{event.description}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-gray-200">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>
                {new Date(event.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>{event.attendees} attendees</span>
            </div>
          </div>

          {status === "future" && (
            <div className="flex gap-2">
              <Button size="sm">Register Now</Button>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          )}

          {status === "present" && (
            <div className="flex gap-2">
              <Button variant="green" size="sm">
                Join Now
              </Button>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          )}

          {status === "past" && (
            <Button variant="outline" size="sm">
              View Summary
            </Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

function NewspaperEventCard({event, status, isMainStory = false}) {
  const getStatusBadge = () => {
    switch (status) {
      case "past":
        return <Badge variant="completed">COMPLETED</Badge>;
      case "present":
        return <Badge variant="ongoing">LIVE NOW</Badge>;
      case "future":
        return <Badge variant="upcoming">UPCOMING</Badge>;
    }
  };

  if (isMainStory) {
    return (
      <GlassCard className="overflow-hidden hover:bg-white/15 transition-all duration-300 group ">
        <div className="relative">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4">{getStatusBadge()}</div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2  leading-tight">
              {event.name}
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(event.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {event.attendees} attendees
              </span>
            </div>
          </div>
        </div>
        <div className="p-6 bg-black/20">
          <p className="text-gray-200 leading-relaxed mb-4  text-lg">
            {event.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <MapPin className="w-4 h-4" />
              {event.location}
            </div>
            <Button size="sm" className="">
              Read More <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="overflow-hidden hover:bg-white/15 transition-all duration-300 group border-l-4 border-l-green-500/70">
      <div className="p-4">
        <div className="flex gap-4">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.name}
            className="w-20 h-20 object-cover rounded flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-white  text-lg leading-tight group-hover:text-red-400 transition-colors">
                {event.name}
              </h3>
              {getStatusBadge()}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-2 ">
              {event.description.substring(0, 120)}...
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(event.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {event.time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function NewspaperLayout({events, status, title}) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400  text-lg">
          No {title.toLowerCase()} events to display
        </p>
      </div>
    );
  }

  const [mainEvent, ...otherEvents] = events;

  return (
    <div className="space-y-6">
      {/* Newspaper Header */}
      <div className="text-center border-b-2 border-green-500/50 pb-4">
        <h2 className="text-2xl  text-green-400 mt-4  ">
          {title.toUpperCase()} EVENTS SECTION
        </h2>
      </div>

      {/* Main Story */}
      <div className="mb-8">
        <NewspaperEventCard
          event={mainEvent}
          status={status}
          isMainStory={true}
        />
      </div>

      {/* Other Stories in Columns */}
      {otherEvents.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherEvents.map((event) => (
            <NewspaperEventCard key={event.id} event={event} status={status} />
          ))}
        </div>
      )}

      
    </div>
  );
}

export function EventsTimeline() {
  const [activeTab, setActiveTab] = useState("present");

  const tabs = [
    {
      key: "present",
      label: "Current Events",
      color: "text-green-400",
      bgColor: "bg-green-600/20",
    },
    {
      key: "future",
      label: "Upcoming Events",
      color: "text-blue-400",
      bgColor: "bg-blue-600/20",
    },
    {
      key: "past",
      label: "Past Events",
      color: "text-gray-400",
      bgColor: "bg-gray-600/20",
    },
  ];

  return (
    <section className="w-full min-h-screen   text-white p-6">
      {/* Tabbed Navigation */}
      <div className="max-w-7xl  mx-auto">
        <GlassCard className="p-6 mb-8">
          <div className="flex  gap-1  justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-2 rounded-xl font-medium text-md transition-all duration-300 ${
                  activeTab === tab.key
                    ? `${tab.color} ${tab.bgColor} border-1 border-current`
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </GlassCard>

        {activeTab === "present" && (
          <NewspaperLayout
            events={eventsData.present}
            status="present"
            title="Current"
          />
        )}

        {activeTab === "future" && (
          <NewspaperLayout
            events={eventsData.future}
            status="future"
            title="Upcoming"
          />
        )}

        {activeTab === "past" && (
          <NewspaperLayout
            events={eventsData.past}
            status="past"
            title="Past"
          />
        )}
      </div>
    </section>
  );
}
