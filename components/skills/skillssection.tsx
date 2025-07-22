"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronDown } from "lucide-react"


export default function SkillsSection() {
    // Skills data
    const skillsData = {
      webdev: {
        title: "Web Development",
        color: "from-blue-500 to-cyan-500",
        skills: [
          { name: "WordPress", icon: "/skills_assets/wordpress.png" },
          { name: "Django", icon: "/skills_assets/django.png" },
          { name: "Node.js", icon: "/skills_assets/node.png" },
          { name: "React.js", icon: "/skills_assets/react.png" },
          { name: "Next.js", icon: "/skills_assets/next.png" },
          { name: "REST API", icon: "/skills_assets/restapi.png" },
          { name: "MongoDB", icon: "/skills_assets/mongodb.png" },
          { name: "SQL", icon: "/skills_assets/sql.png" },
          { name: "Vercel", icon: "/skills_assets/vercel.png" },
          { name: "Hostinger", icon: "/skills_assets/hostinger.png" },
          { name: "GitHub", icon: "/skills_assets/github.png" },
          { name: "HTML", icon: "/skills_assets/html.png" },
          { name: "CSS", icon: "/skills_assets/css.png" },
          { name: "JavaScript", icon: "/skills_assets/js.png" },
        ],
      },
      datascience: {
        title: "Data Science",
        color: "from-green-500 to-emerald-500",
        skills: [
          { name: "Matplotlib", icon: "/skills_assets/matplotlib.png" },
          { name: "Seaborn", icon: "/skills_assets/seaborn.png" },
          { name: "NumPy", icon: "/skills_assets/numpy.png" },
          { name: "Pandas", icon: "/skills_assets/pandas.svg" },
          { name: "TensorFlow", icon: "/skills_assets/tensorflow.png" },
          { name: "Scikit-learn", icon: "/skills_assets/scikitlearn.png" },
          { name: "Python", icon: "/skills_assets/python.png" },
          { name: "Excel", icon: "/skills_assets/excel.png" },
          { name: "SQL", icon: "/skills_assets/sql.png" },
          { name: "MongoDB", icon: "/skills_assets/mongodb.png" },
          { name: "Spark", icon: "/skills_assets/spark.png" },
          { name: "GitHub", icon: "/skills_assets/github.png" },
          { name: "Hadoop", icon: "/skills_assets/hadoop.png" },
        ],
      },
      ml: {
        title: "Machine Learning",
        color: "from-purple-500 to-pink-500",
        skills: [
          { name: "Scikit-learn", icon: "/skills_assets/scikitlearn.png" },
          { name: "Tensorflow", icon: "/skills_assets/tensorflow.png" },
          { name: "Python", icon: "/skills_assets/python.png" },
          { name: "AWS", icon: "/skills_assets/aws.png" },
          { name: "SQL", icon: "/skills_assets/sql.png" },
          { name: "GitHub", icon: "/skills_assets/github.png" },
          { name: "Hive", icon: "/skills_assets/hive.png" },
        ],
      },
    }


  const [activeTab, setActiveTab] = useState("webdev")
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({
    webdev: 6,
    datascience: 6,
    ml: 6,
  })

  useEffect(() => {
    if (visibleCounts[activeTab] === undefined) {
      setVisibleCounts((prev) => ({ ...prev, [activeTab]: 5 }))
    }
  }, [activeTab, visibleCounts])

  const handleShowMore = (tabKey: string) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [tabKey]: prev[tabKey] + 5,
    }))
  }


  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4">
        {Object.entries(skillsData).map(([key, data]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`relative px-4 py-1 rounded-full font-medium transition-all duration-300 ${
              activeTab === key ? "text-white shadow-lg transform scale-105" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {activeTab === key && (
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${data.color} opacity-90`} />
            )}
            <span className="relative z-10">{data.title}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="relative">
        {Object.entries(skillsData).map(([key, data]) => {
          const visibleCount = visibleCounts[key] || 5
          const visibleSkills = data.skills.slice(0, visibleCount)
          const hasMoreToShow = visibleCount < data.skills.length

          return (
            <div
              key={key}
              className={`transition-all duration-500 ${
                activeTab === key
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-4 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="space-y-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {visibleSkills.map((skill, index) => (
                    <Card
                      key={skill.name}
                      className="group bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <CardContent className="p-6 flex flex-col items-center space-y-3">
                        <div className="relative">
                          <div
                            className={`absolute inset-0 rounded-lg bg-gradient-to-r ${data.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                          />
                          <div className="relative bg-white rounded-lg p-3 shadow-lg">
                            <Image
                              src={skill.icon || "/placeholder.svg"}
                              alt={skill.name}
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                        </div>
                        <h3 className="text-sm font-medium text-center text-gray-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Show More Button */}
                {hasMoreToShow && (
                  <div className="text-center">
                    <Button
                      onClick={() => handleShowMore(key)}
                      variant="outline"
                      className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 group"
                    >
                      Show more <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    </Button>
                  </div>
                )}

                {/* Skills Count */}
                <div className="text-center">
                  <p className="text-gray-400 text-sm">
                    Showing {Math.min(visibleCount, data.skills.length)} of {data.skills.length} skills
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Active Tab Indicator */}
      <div className="text-center">
        <Badge
          variant="outline"
          className={`border-gray-600 text-gray-300 bg-gradient-to-r ${skillsData[activeTab as keyof typeof skillsData].color} bg-clip-text text-transparent`}
        >
          {skillsData[activeTab as keyof typeof skillsData].title} Skills
        </Badge>
      </div>
    </div>
  )
}