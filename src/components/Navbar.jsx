import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const menu = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      menu.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const top = section.offsetTop - 120;

          if (window.scrollY >= top) {
            current = item.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-5">

        <h1 className="text-3xl font-bold">
          <span className="text-cyan-400">Ashwani</span>
          <span className="text-white">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`transition duration-300 font-medium ${
                  active === item.id
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-400"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-6 py-4 transition ${
                active === item.id
                  ? "text-cyan-400"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}