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
        </div>
      </div>
    );
}

export default Hero;