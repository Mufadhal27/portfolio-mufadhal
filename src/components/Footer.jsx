import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 py-10 px-6 border-t border-zinc-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 w-full">

        {/* Left - Branding */}
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <span className="text-white font-semibold text-lg">Mufadhal</span>
            <span className="text-xs text-zinc-500">Web Developer</span>
          </div>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex gap-6 text-sm font-medium">
          <a href="#hero" className="hover:text-blue-400 transition-all duration-200">Home</a>
          <a href="#about" className="hover:text-blue-400 transition-all duration-200">About</a>
          <a href="#skills" className="hover:text-blue-400 transition-all duration-200">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition-all duration-200">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-all duration-200">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          <SocialIcon href="https://github.com/Mufadhal27" icon={<FaGithub />} />
          <SocialIcon href="https://www.linkedin.com/in/mufadhal-7023b9293" icon={<FaLinkedin />} />
          <SocialIcon href="mailto:temufadhal@gmail.com" icon={<FaEnvelope />} />
          <SocialIcon
            href="https://instagram.com/tmfdhl_"
            icon={<FaInstagram />}
            instagram
          />
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} <span className="text-blue-400 font-medium">Mufadhal</span>. All rights reserved.
      </div>
    </footer>
  );
}

const SocialIcon = ({ href, icon, instagram = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full text-white transition-all duration-300 shadow
      ${
        instagram
          ? 'bg-zinc-800 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500'
          : href.includes('github')
            ? 'bg-zinc-800 hover:bg-white hover:text-zinc-900'
            : href.startsWith('mailto:')
              ? 'bg-zinc-800 hover:bg-white hover:text-red-800'
              : 'bg-zinc-800 hover:bg-blue-900'
      }
    `}
  >
    {icon}
  </a>
);

export default Footer;
