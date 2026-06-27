import { portfolio } from "../data/portfolio";

function Hero() {

  return (

    <section className="min-h-screen flex items-center justify-center">

      <div className="text-center">

        <img

          src={portfolio.profile}

          alt="profile"

          className="w-52 h-52 rounded-full object-cover mx-auto border-4 border-cyan-400"

        />

        <h1 className="text-6xl font-bold mt-8">

          {portfolio.name}

        </h1>

        <h2 className="text-2xl text-cyan-400 mt-3">

          {portfolio.role}

        </h2>

        <p className="mt-3 text-gray-400">

          {portfolio.subtitle}

        </p>

        <div className="flex justify-center gap-5 mt-10">

          <a

            href={portfolio.resume}

            download

            className="bg-cyan-500 px-7 py-3 rounded-xl"

          >

            Resume

          </a>

          <a

            href={`https://wa.me/${portfolio.whatsapp}`}

            target="_blank"

            className="border px-7 py-3 rounded-xl"

          >

            WhatsApp

          </a>

        </div>

      </div>

    </section>

  )

}

export default Hero;