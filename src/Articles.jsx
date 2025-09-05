import React from "react";
import ScrollStack, {ScrollStackItem} from "./components/ScrollStack";

const articles = [
  {
    title: "Card 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYyxRDrJKhWSGOwCDdHS5K_6EOY20t0fsUFg&s",
    passage:
      "This is the first card in the stack. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.",
    link: "#1",
  },
  {
    title: "Card 2",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    passage:
      "This is the second card in the stack. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at massa turpis.",
    link: "#2",
  },
  {
    title: "Card 3",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    passage:
      "This is the second card in the stack. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at massa turpis.",
    link: "#2",
  },
  {
    title: "Card 4",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    passage:
      "This is the second card in the stack. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at massa turpis.",
    link: "#2",
  },
  {
    title: "Card 5",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    passage:
      "This is the second card in the stack. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at massa turpis.",
    link: "#2",
  },
  {
    title: "Card 6",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    passage:
      "This is the second card in the stack. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at massa turpis.",
    link: "#2",
  },
];

const Articles = () => {
  return (
    <div className="w-full h-screen flex items-start justify-center  sm:-mt-32 md:-mt-40 lg:mt-2">
      <ScrollStack className="h-full w-full">
        {articles.map((article, idx) => (
          <ScrollStackItem
            key={idx}
            itemClassName="flex w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-6xl h-auto gap-6 p-4 sm:p-8 lg:p-12"
          >
            <div className="flex flex-row items-center gap-6 w-full h-full">
              <img
                className="rounded-2xl object-cover w-20 h-20 sm:w-28 sm:h-32 md:w-40 md:h-44 lg:w-56 lg:h-56 flex-shrink-0"
                src={article.image}
                alt={article.title}
                srcSet=""
              />
              <div className="flex flex-col justify-center w-full h-full">
                <h2 className="mb-2 text-xl md:text-2xl font-bold truncate">
                  {article.title}
                </h2>
                <div className="overflow-y-auto max-h-24 sm:max-h-32 md:max-h-40 lg:max-h-56 pr-1 sm:pr-2">
                  <p className="text-base md:text-lg text-white/90 whitespace-pre-line">
                    {article.passage}
                  </p>
                </div>
                <div className="mt-2">
                  <a
                    href={article.link}
                    className="text-blue-300 underline-none"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
};

export default Articles;
