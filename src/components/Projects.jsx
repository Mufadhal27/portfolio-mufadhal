import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "ALNS Barbershop Website",
    description:
      "Modern Barbershop web app featuring photo gallery, trending hairstyles by category, and customer testimonials. Data is dynamically fetched from MockAPI. Built using React.js and Axios.",
    tech: ["React", "Tailwind CSS", "MockAPI"],
    link: "https://barbershop-app-vite.vercel.app/",
    repo: "https://github.com/Mufadhal27/barbershop-app-vite",
  },
  {
    title: "Talky AI Chatbot",
    description:
      "An AI chatbot application that features real-time conversations with Gemini, Google's AI API. Built using React.js, Tailwind CSS, and Axios. Express backend is used to secure communication to the AI ​​service.",
    tech: ["React", "Tailwind CSS", "Gemini API", "Node.js", "Express.js"],
    link: "https://talky-chatbot-l7ya7tso4-mufadhals-projects.vercel.app/",
    repo: "https://github.com/Mufadhal27/ai-chatbot-app",
  },
  {
    title: "Medisia Clinic Website",
    description:
      "Clinic website equipped with AI chatbot to answer health questions such as symptoms and diseases. Built using React.js and Tailwind CSS on the frontend, and Node.js, Express.js, and MongoDB on the backend. The chatbot is integrated with Google's Gemini API to provide real-time responses.",
    tech: ["React.js", "Tailwind CSS","JavaScript", "Gemini API", "Node.js", "Express.js", "MongoDB", "JWT"],
    link: "https://klinik-app-frontend.vercel.app",
    repo: "https://github.com/Mufadhal27/klinik-app-frontend"
  }

];

function Projects() {
  return (
    <section className="py-16 container mx-auto px-4" id="projects">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 items-start gap-8 mt-10 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-blue-400 hover:bg-blue-400/20">
            <FaGithub className="text-pink-400 text-xl" />
            <q>Code is a creative expression in the form of logic.</q>
          </div>
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-base mb-6 opacity-50 max-w-xl">
            Here are some projects I have worked on, which demonstrate my ability to design and build web applications.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-zinc-800 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer group border border-transparent hover:border-blue-400 hover:bg-blue-400/20">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-blue-400">{project.title}</h3>
              <p className="text-sm text-zinc-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-400 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-zinc-700 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-auto">
              <a href={project.link} className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                Live <FaExternalLinkAlt />
              </a>
              <a href={project.repo} className="text-zinc-400 hover:text-white text-sm flex items-center gap-1">
                Code <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;
