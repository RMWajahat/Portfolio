"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CallToAction({handleClick}: { handleClick: (sectionId: string) => void }) {
return (<section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-black border-gray-700 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <div className="text-center md:text-left space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Have Any Project in Mind?</h2>
                  <p className="text-gray-300 max-w-md">
                    Got a project in mind? Let's turn your idea into reality — whether it's web development, data
                    analysis, or a fully functioning application.
                  </p>
                </div>
                <Button
                  onClick={() => handleClick("contactme-section")}
                  className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  Hire me
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>)
}