"use client"

export default function Impact() {
  return (
    <section className="bg-black text-white py-20 border-t border-gray-900">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Impact & Achievements
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-center">

          <div className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition duration-300">
            <h3 className="text-4xl font-bold text-red-500 mb-2">
              3000+
            </h3>
            <p className="text-gray-400">
              Students Trained
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition duration-300">
            <h3 className="text-4xl font-bold text-red-500 mb-2">
              4.6 / 5
            </h3>
            <p className="text-gray-400">
              Average Student Rating
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition duration-300">
            <h3 className="text-4xl font-bold text-red-500 mb-2">
              3+
            </h3>
            <p className="text-gray-400">
              Industry Roles
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition duration-300">
            <h3 className="text-4xl font-bold text-red-500 mb-2">
              10+
            </h3>
            <p className="text-gray-400">
              Technologies Taught
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}