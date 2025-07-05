import React, { useState, useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Skills() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const skillsRef = useRef(null);

  // Cek apakah layar kecil
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Observer: reset isRevealed saat keluar dari layar
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsRevealed(false);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="relative container mx-auto px-4 py-16 min-h-[500px] flex flex-col items-center justify-center"
    >
      {/* Title */}
      <h2 className="text-2xl mt-7 md:text-3xl font-bold mb-2 text-blue-400 text-center">
        Skills
      </h2>
      <p className="text-sm md:text-base mt-2 font-medium mb-8 opacity-50 text-center text-zinc-300 max-w-md">
        I specialize in web development, both frontend and backend, using modern technologies to build responsive and efficient applications.
      </p>

      {/* === ANIMASI UTAMA (semua layar) === */}
      <div
        onClick={() => setIsRevealed(true)}
        className={`relative cursor-pointer z-10 transition-all duration-700 ease-in-out ${
          isMobile ? (isRevealed ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100') : ''
        }`}
      >
        <DotLottieReact
          src="/animation/brain-skills.lottie"
          loop
          autoplay
          style={{
          width: isMobile ? '300px' : '400px',
          height: isMobile ? '300px' : '400px',
        }}
        />
        {!isRevealed && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-sm md:text-2xl font-medium opacity-60 hover:opacity-90 transition-opacity duration-300 px-3 py-1 rounded-lg">
              Touch Me
            </p>
          </div>
        )}
      </div>

      {/* === SKILL BOX === */}
      {isMobile ? (
        <div
          className={`transition-all duration-700 ease-in-out ${
            isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95 h-0 overflow-hidden'
          } grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6`}
        >
          <SkillBox title="Frontend" color="text-yellow-400" items={['JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap']} />
          <SkillBox title="Database" color="text-purple-400" items={['MySQL']} />
          <SkillBox title="Backend" color="text-green-400" items={['Node.js', 'Express.js', 'Laravel', 'PHP']} />
          <SkillBox title="Tools" color="text-cyan-400" items={['Git & GitHub', 'VS Code', 'Postman', 'Figma']} />
        </div>
      ) : (
        <div
          className={`absolute inset-0 flex items-center justify-between px-8 z-0 pointer-events-none ${
            isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } transition-all duration-700`}
        >
          <div className="flex flex-col gap-6 mt-40">
            <SkillBox title="Frontend" color="text-yellow-400" items={['JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap']} />
            <SkillBox title="Database" color="text-purple-400" items={['MySQL']} />
          </div>
          <div className="flex flex-col gap-6 mt-50">
            <SkillBox title="Backend" color="text-green-400" items={['Node.js', 'Express.js', 'Laravel', 'PHP']} />
            <SkillBox title="Tools" color="text-cyan-400" items={['Git & GitHub', 'VS Code', 'Postman', 'Figma']} />
          </div>
        </div>
      )}
    </section>
  );
}

const SkillBox = ({ title, color, items }) => (
  <div className="bg-zinc-800 text-white p-4 rounded-2xl w-52 mx-auto shadow-lg pointer-events-auto">
    <h3 className={`${color} font-semibold mb-2`}>{title}</h3>
    <ul className="text-sm list-disc pl-4 opacity-80">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
