"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { skillsData } from "@/data"


export default function SkillsSection() {
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
        {Object.entries(skillsData)?.map(([key, data]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === key ? "text-white shadow-lg transform scale-105" : "text-gray-400 hover:text-gray-200"
              }`}
          >
            {activeTab === key && (
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${activeTab === "webdev"
                ? "from-blue-500 to-cyan-500"
                : activeTab === "datascience"
                  ? "from-green-500 to-emerald-500"
                  : activeTab === "ml"
                    ? "from-purple-500 to-pink-500"
                    : ""
                } opacity-90`} />
            )}
            <span className="relative z-10">{data?.title}</span>
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
              className={`transition-all duration-500 ${activeTab === key
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
                            className={`absolute inset-0 rounded-lg bg-gradient-to-r ${activeTab === "webdev"
                                ? "from-blue-500 to-cyan-500"
                                : activeTab === "datascience"
                                  ? "from-green-500 to-emerald-500"
                                  : activeTab === "ml"
                                    ? "from-purple-500 to-pink-500"
                                    : ""
                              } opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
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
          className={`border-gray-600 text-gray-300 bg-gradient-to-r ${activeTab === "webdev"
            ? "from-blue-500 to-cyan-500"
            : activeTab === "datascience"
              ? "from-green-500 to-emerald-500"
              : activeTab === "ml"
                ? "from-purple-500 to-pink-500"
                : ""
            } bg-clip-text text-transparent`}
        >
          {skillsData[activeTab as keyof typeof skillsData]?.title} Skills
        </Badge>
      </div>
    </div>
  )
}