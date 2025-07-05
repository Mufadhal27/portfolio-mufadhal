import { useState } from "react"

function Navbar() {
    const [active, setActive] = useState(false)

    // Toggle menu saat hamburger diklik
    const handleToggle = () => setActive(!active)

    // Fungsi scroll smooth ke id
    const handleScroll = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth" })
            setActive(false)
        }
    }

    return (
        <div className="navbar container mx-auto px-4 py-7 flex items-center justify-between relative">
            <div className="logo">
                <h1 className="text-3xl font-bold">
                    My Portfolio
                </h1>
            </div>
            {/* Hamburger Button */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-20"
                onClick={handleToggle}
                aria-label="Toggle menu"
            >
                <span className={`block h-1 w-8 bg-white mb-1 rounded transition-all duration-300 ${active ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block h-1 w-8 bg-white mb-1 rounded transition-all duration-300 ${active ? "opacity-0" : ""}`}></span>
                <span className={`block h-1 w-8 bg-white rounded transition-all duration-300 ${active ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
            {/* Menu */}
            <ul className={`menu flex items-center gap-10 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 top-20 md:top-0 bg-black md:bg-transparent w-full md:w-auto py-10 md:py-0 flex-col md:flex-row transition-all duration-300 z-10
                ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} md:opacity-100 md:pointer-events-auto`}
            >
                <li>
                    <button onClick={() => handleScroll("hero")} className="text-lg font-medium bg-transparent border-none outline-none cursor-pointer">
                        Home
                    </button>
                </li>
                <li>
                    <button onClick={() => handleScroll("about")} className="text-lg font-medium bg-transparent border-none outline-none cursor-pointer">
                        About Me
                    </button>
                </li>
                <li>
                    <button onClick={() => handleScroll("skills")} className="text-lg font-medium bg-transparent border-none outline-none cursor-pointer">
                        Skills
                    </button>
                </li>
                <li>
                    <button onClick={() => handleScroll("projects")} className="text-lg font-medium bg-transparent border-none outline-none cursor-pointer">
                        Projects
                    </button>
                </li>
                <li>
                    <button onClick={() => handleScroll("contact")} className="text-lg font-medium bg-transparent border-none outline-none cursor-pointer">
                        Contact
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;