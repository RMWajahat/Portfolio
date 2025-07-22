"use client"
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Award, ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { certifications, certCategories, Certification } from "@/data";




export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter certifications based on active category
  const filteredCertifications =
    activeCategory === "all" ? certifications : certifications.filter((cert) => cert.category === activeCategory)

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeCategory])

  const handleCertClick = (cert: Certification) => {
    setSelectedCert(cert)
  }

  const closeCertModal = () => {
    setSelectedCert(null)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, filteredCertifications.length - 3) : Math.max(0, prev - 1)))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= filteredCertifications.length - 3 ? 0 : prev + 1))
  }

  // Show 3 certificates at a time
  const visibleCertifications = filteredCertifications.slice(currentIndex, currentIndex + 3)

  return (
    <div className="space-y-8"  >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">My Certifications</h2>

        <div className="flex items-center gap-4">
          {/* Category Filter */}
          <Select value={activeCategory} onValueChange={setActiveCategory}>
            <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {certCategories.map((category) => (
                <SelectItem key={category.id} value={category.id} className="text-white">
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <Button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              variant="outline"
              size="sm"
              className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 disabled:opacity-50"
            >
              <ArrowLeft size={16} />
            </Button>
            <Button
              onClick={goToNext}
              disabled={currentIndex >= filteredCertifications.length - 3}
              variant="outline"
              size="sm"
              className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 disabled:opacity-50"
            >
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-fit">
        {visibleCertifications.map((cert) => (
          <Card
            key={cert.id}
            className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer  max-h-fit min-h-[15rem]"
            onClick={() => handleCertClick(cert)}
          >
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="text-yellow-500" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{cert.description}</p>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="border-gray-600 text-gray-400">
                    {cert.date}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${
                      cert.category === "webdev"
                        ? "bg-blue-900/50 text-blue-300"
                        : cert.category === "datascience"
                          ? "bg-green-900/50 text-green-300"
                          : "bg-purple-900/50 text-purple-300"
                    }`}
                  >
                    {certCategories.find((cat) => cat.id === cert.category)?.label}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show message when no certificates in category */}
      {filteredCertifications.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No certificates found in this category.</p>
        </div>
      )}

      {/* Pagination Info */}
      {filteredCertifications.length > 0 && (
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Showing {Math.min(currentIndex + 1, filteredCertifications.length)} -{" "}
            {Math.min(currentIndex + 3, filteredCertifications.length)} of {filteredCertifications.length} certificates
          </p>
        </div>
      )}

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeCertModal}
        >
          <div
            className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeCertModal}
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
            >
              <X className="text-white" size={24} />
            </button>
            <Image
              src={selectedCert?.image || "/placeholder.svg"}
              alt={selectedCert?.title}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
            <div className="p-6 bg-gray-900 text-white rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{selectedCert?.title}</h3>
              <p className="text-gray-300 mb-2">Issued by: {selectedCert?.issuer}</p>
              <p className="text-gray-300 mb-4">Date: {selectedCert?.date}</p>
              <p className="text-gray-200">{selectedCert?.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}