"use client"

export default function Footer() {

  return (
    <footer className="border-t border-gray-900 py-10 text-center text-gray-400">

      <p>
        © {new Date().getFullYear()} Naveen Kumar Gandham
      </p>

      <div className="mt-4 space-x-6">

        <a
          href="mailto:naveengandham0404@gmail.com"
          className="hover:text-red-500"
        >
          Email
        </a>

        <a
          href="https://github.com/naveen-gandham"
          target="_blank"
          className="hover:text-red-500"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/naveen-gandham-83372b184"
          target="_blank"
          className="hover:text-red-500"
        >
          LinkedIn
        </a>

      </div>

    </footer>
  )
}