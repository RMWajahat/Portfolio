"use client"
import { useState, } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Globe,
  Database,
  Code,
  Palette,
} from "lucide-react"
import Image from "next/image"

// component imports 
import Footer from "@/components/footer/footer"
import Navbar from "@/components/nav/navbar"
import Contact from "@/components/contact/contact"
import SkillsSection from "@/components/skills/skillssection"
import CertificationsSection from "@/components/certifications/certificationssection"
import CallToAction from "@/components/cta/calltoaction"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features user authentication, payment processing, and admin dashboard.",
    image: "/ecommerce.png",
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Sales Analytics Dashboard",
    description:
      "Data visualization dashboard using Python, Pandas, and Matplotlib to analyze sales trends and customer behavior patterns.",
    image: "/sales.png",
    category: "datascience",
    technologies: ["Python", "Pandas", "Matplotlib"],
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality built with Next.js.",
    image: "/task.png",
    category: "frontend",
    technologies: ["Next.js", "React", "TypeScript"],
  },
  {
    id: 4,
    title: "ML Prediction Model",
    description:
      "Machine learning model using scikit-learn and PyTorch for predictive analytics with 95% accuracy rate.",
    image: "/mlmodel.png",
    category: "datascience",
    technologies: ["Python", "PyTorch", "scikit-learn"],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description: "Custom WordPress theme development with responsive design and advanced customization options.",
    image: "/dashboard.png",
    category: "wordpress",
    technologies: ["WordPress", "PHP", "CSS"],
  },
  {
    id: 6,
    title: "Django REST API",
    description:
      "Scalable REST API built with Django and PostgreSQL for a social media application with authentication.",
    image: "/ai.png",
    category: "backend",
    technologies: ["Django", "PostgreSQL", "Python"],
  },
]

const companies = [
  { name: "Fiverr", logo: "/fiverr.png" },
  { name: "Upwork", logo: "/upwork.png" },
  { name: "LinkedIn", logo: "/linkedin.png" }
]

// Skills data
const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  backend: ["Node.js", "Django", "GitHub", "WordPress"],
  datascience: ["Python", "Spark", "NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn", "PyTorch"],
}

const categories = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "fullstack", label: "Full Stack", icon: Code },
  { id: "frontend", label: "Frontend", icon: Palette },
  { id: "backend", label: "Backend", icon: Database },
  { id: "datascience", label: "Data Science", icon: Database },
  { id: "wordpress", label: "WordPress", icon: Globe },
]







export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

   const handleClick = (sectionId: string) => {
          const element = document.getElementById(sectionId)
          if (element) {
              element.scrollIntoView({ behavior: "smooth" })
          }
      }

  // Filter projects
  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar handleClick={handleClick} />

      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="absolute opacity-20 animate-float"
              style={{
                left: `${12 + index * 30}%`,
                top: `${90}%`,
                animationDelay: `${index * 0.8}s`,
                animationDuration: `${3 + index * 0.5}s`,
              }}
            >
              <Image
                src={company?.logo}
                alt={company?.name}
                width={80}
                height={40}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center space-y-8 relative z-10">
          <Image
            src="/profile.png"
            alt="Muhammad Wajahat Hussain"
            width={150}
            height={150}
            className="rounded-full mx-auto border-4 border-gray-700 filter drop-shadow-lg hover:scale-105 transition-transform duration-300 mb-6"
          />
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Muhammad Wajahat Hussain
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Full Stack Web Developer & Data Scientist
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Passionate about creating innovative web solutions and extracting insights from data. Available on Fiverr,
              Upwork, and open for direct projects.
            </p>
          </div>

          
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>

          {/* Skills Tabs */}
          <SkillsSection />
        </div>
      </section>

      {/* Projects Section with Filters */}
      <section id="projects-section" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">My Projects</h2>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${activeFilter === category.id ? "bg-white text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium">{category.label}</span>
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <ArrowRight className="text-gray-400 hover:text-white transition-colors" size={20} />
                      </div>
                      <p className="text-gray-300 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-gray-600 text-gray-400 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-gray-950" id="certifications-section">
        <div className="max-w-6xl mx-auto">
          <CertificationsSection />
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction handleClick={handleClick} />

      {/* Contact Me Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}
