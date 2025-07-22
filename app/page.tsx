"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Search, X, ChevronDown } from "lucide-react"
import {
  ArrowRight,
} from "lucide-react"
import Image from "next/image"

// component imports 
import Footer from "@/components/footer/footer"
import Navbar from "@/components/nav/navbar"
import Contact from "@/components/contact/contact"
import SkillsSection from "@/components/skills/skillssection"
import CertificationsSection from "@/components/certifications/certificationssection"
import CallToAction from "@/components/cta/calltoaction"

// data imports
import { projects, companies, skills, categories } from "@/data"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(3)

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeFilter === "all" || project?.category === activeFilter
    const matchesSearch =
      searchQuery === "" ||
      new RegExp(searchQuery, "i").test(project?.title) ||
      new RegExp(searchQuery, "i").test(project?.description) ||
      project?.technologies.some((tech) => new RegExp(searchQuery, "i").test(tech))

    return matchesCategory && matchesSearch
  })

  const visibleProjects = filteredProjects?.slice(0, visibleProjectsCount)
  const hasMoreProjects = visibleProjectsCount < filteredProjects?.length

  // Reset visible count when filter or search changes
  useEffect(() => {
    setVisibleProjectsCount(3)
  }, [activeFilter, searchQuery])

  const handleShowMoreProjects = () => {
    setVisibleProjectsCount((prev) => prev + 3)
  }


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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>

            {/* Search and Filter Controls */}
            <div className="flex items-center gap-4">
              {/* Category Filter Dropdown */}
              <Select value={activeFilter} onValueChange={setActiveFilter}>
                <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id} className="text-white">
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Search Toggle Button */}
              <Button
                onClick={() => setShowSearch(!showSearch)}
                variant="outline"
                size="sm"
                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
              >
                <Search size={16} />
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="mb-6 transition-all duration-300">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                {searchQuery && (
                  <Button
                    onClick={() => setSearchQuery("")}
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X size={14} />
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects.map((project) => (
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

            {/* No Results Message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">
                  {searchQuery ? `No projects found matching "${searchQuery}"` : "No projects found in this category."}
                </p>
              </div>
            )}

            {/* Show More Button */}
            {hasMoreProjects && (
              <div className="text-center">
                <Button
                  onClick={handleShowMoreProjects}
                  variant="outline"
                  className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 group"
                >
                  Show more <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </div>
            )}

            {/* Projects Count */}
            {filteredProjects.length > 0 && (
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Showing {Math.min(visibleProjectsCount, filteredProjects.length)} of {filteredProjects.length}{" "}
                  projects
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>
            )}
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
