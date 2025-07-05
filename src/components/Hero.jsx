import DataImage from "../data";

function Hero() {
    return (
        <div className="hero container mx-auto px-4 grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1" id="hero">
        <div>
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-blue-400 hover:bg-blue-400/20">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
          <q>The beauty of syntax comes from a long process.</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Mufadhal</h1>
        <p className="text-base/loose mb-6 opacity-50">
          I have an interest in Programming and Technology, especially in Web development. 
          I continue to develop this interest through various projects and learning activities that support skill improvement in this field.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a
          href="/CV_Mufadhal.pdf"
          download="CV_Mufadhal.pdf"
          className="bg-blue-500 p-4 rounded-2xl hover:bg-blue-400"
        >
          Download CV <i className="ri ri-download-line ri-lg"></i>
        </a>


          <a href="#projects" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
            View Project <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div >
        <div className="relative">
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto"/>
        <span className="absolute -bottom-3 -z-10 left-1/2 -translate-x-1/2">
          <svg height="400" width="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3B82F6" d="M41.8,-43.5C53.7,-29.8,62.7,-14.9,65.7,3C68.7,20.9,65.8,41.9,53.8,57.7C41.9,73.6,20.9,84.3,-0.6,84.9C-22.1,85.5,-44.2,75.9,-56.1,60C-68.1,44.2,-70,22.1,-69.1,0.9C-68.3,-20.4,-64.7,-40.7,-52.7,-54.4C-40.7,-68.2,-20.4,-75.2,-2.7,-72.5C14.9,-69.7,29.8,-57.2,41.8,-43.5Z" transform="translate(100 100) scale(1.1)" />
          </svg>
        </span>
        </div>
      </div>
    );
}

export default Hero;