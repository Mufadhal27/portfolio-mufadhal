import React from "react";
import {
  FaCoffee,
  FaRegMoon,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";

const funFacts = [
  {
    icon: <FaCoffee className="text-3xl text-amber-700 group-hover:text-white transition duration-300" />,
    text: "Coding with coffee",
  },
  {
    icon: <FaRegMoon className="text-3xl text-indigo-500 group-hover:text-white transition duration-300" />,
    text: "I love tweaking UI designs late at night",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-emerald-600 group-hover:text-white transition duration-300" />,
    text: "Dark mode is my absolute favorite 😎",
  },
  {
  icon: <FaBrain className="text-3xl text-pink-600 group-hover:text-white transition duration-300" />,
  text: "Coding makes you think, debugging makes you overthink",
  },
];


const bgColors = [
  "bg-gradient-to-tr from-blue-100 to-blue-50 dark:from-blue-900 dark:to-zinc-800",
  "bg-gradient-to-tr from-pink-100 to-pink-50 dark:from-pink-900 dark:to-zinc-800",
  "bg-gradient-to-tr from-green-100 to-green-50 dark:from-green-900 dark:to-zinc-800",
  "bg-gradient-to-tr from-yellow-100 to-yellow-50 dark:from-yellow-900 dark:to-zinc-800",
];

const FunFacts = () => {
  return (
    <section
      className="bg-zinc-800 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 ">
    
      <h2 className="text-3xl font-bold text-center text-blue-500 dark:text-white mb-8">
        🎉 Fun Facts About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {funFacts.map((fact, index) => (
          <div
            key={index}
            className={`
              group flex items-start gap-4 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300
              hover:scale-[1.03] border border-transparent
              ${bgColors[index % bgColors.length]}
              hover:bg-blue-400/30 dark:hover:bg-blue-500/30
              relative overflow-hidden
            `}
            style={{
              boxShadow: "0 2px 16px 0 rgba(0,0,0,0.06)",
            }}
          >
            {/* Animated blue circle on hover */}
            <span className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-blue-400/20 scale-0 group-hover:scale-100 transition-transform duration-500 blur-lg pointer-events-none"></span>
            <div className="z-10">{fact.icon}</div>
            <p className="z-10 text-gray-700 dark:text-gray-100 group-hover:text-blue-900 dark:group-hover:text-white transition duration-300">
              {fact.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunFacts;