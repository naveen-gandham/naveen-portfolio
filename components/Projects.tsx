"use client"

import { useState } from "react"
import Image from "next/image"

type Project = {
  title: string
  image: string
  problem: string
  solution: string
  technologies: string[]
  result: string
}

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [

    {
      title: "Image Debiasing using CNN & VAE",
      image: "/projects/ai.png",

      problem:
        "Image classification models often produce biased predictions due to dataset imbalance.",

      solution:
        "Implemented a hybrid CNN + Variational Autoencoder architecture to reduce bias in classification outputs.",

      technologies: [
        "Python",
        "TensorFlow",
        "CNN",
        "Variational Autoencoder",
        "Deep Learning"
      ],

      result:
        "Improved fairness in classification results and demonstrated bias mitigation in computer vision models."
    },

    {
      title: "Potato Leaf Disease Detection",
      image: "/projects/potato.png",

      problem:
        "Farmers struggle to detect crop diseases early, which reduces crop yield.",

      solution:
        "Built a CNN-based deep learning model that detects potato leaf diseases from uploaded images.",

      technologies: [
        "Python",
        "TensorFlow",
        "CNN",
        "Image Processing"
      ],

      result:
        "Achieved high prediction accuracy and provided a simple interface for disease detection."
    },

    {
      title: "MoodScape Angular Web App",
      image: "/projects/angular.png",

      problem:
        "Traditional static web applications do not provide dynamic UI interaction.",

      solution:
        "Developed a modern Angular application using component architecture and responsive UI design.",

      technologies: [
        "Angular",
        "TypeScript",
        "HTML",
        "CSS"
      ],

      result:
        "Built an interactive frontend system demonstrating scalable UI architecture."
    }

  ]


  return (

    <section className="py-32">

      <h2 className="text-4xl font-bold text-center mb-20">
        Featured Projects
      </h2>

      {/* Project Cards */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition transform duration-300 shadow-lg"
          >

            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">

              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

            </div>

          </div>

        ))}

      </div>


      {/* Project Modal */}

      {selectedProject && (

        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">

          <div className="bg-gray-900 rounded-xl max-w-3xl w-full p-8 relative">

            {/* Close button */}

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>


            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={900}
              height={400}
              className="w-full h-56 object-cover rounded-lg mb-6"
            />

            <h3 className="text-2xl font-bold mb-6">
              {selectedProject.title}
            </h3>


            {/* Architecture flow */}

            <div className="space-y-6">

              <div>
                <h4 className="text-red-500 font-semibold mb-2">
                  Problem
                </h4>
                <p className="text-gray-300 text-sm">
                  {selectedProject.problem}
                </p>
              </div>

              <div>
                <h4 className="text-red-500 font-semibold mb-2">
                  Solution
                </h4>
                <p className="text-gray-300 text-sm">
                  {selectedProject.solution}
                </p>
              </div>


              <div>
                <h4 className="text-red-500 font-semibold mb-2">
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-2">

                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-red-600 text-sm px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>


              <div>
                <h4 className="text-red-500 font-semibold mb-2">
                  Result
                </h4>
                <p className="text-gray-300 text-sm">
                  {selectedProject.result}
                </p>
              </div>

            </div>

          </div>

        </div>

      )}

    </section>

  )
}