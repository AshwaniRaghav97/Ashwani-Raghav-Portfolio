function Navbar() {

  return (

    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md border-b border-white/10 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold text-cyan-400">

          Ashwani<span className="text-white">.</span>

        </h1>

        <ul className="hidden md:flex gap-8">

          <li><a href="#">Home</a></li>

          <li><a href="#">About</a></li>

          <li><a href="#">Skills</a></li>

          <li><a href="#">Projects</a></li>

          <li><a href="#">Contact</a></li>

        </ul>

      </div>

    </nav>

  )

}

export default Navbar;