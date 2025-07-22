"use client"
import { useEffect, useState, useRef } from "react";
import { Linkedin, Github, Instagram, MessageCircle } from "lucide-react";

export default function Navbar() {


    const [headerVisible, setHeaderVisible] = useState(true)
    const lastScrollY = useRef(0)


    const handleClick = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setHeaderVisible(false)
            } else {
                setHeaderVisible(true)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <header
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${headerVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
                }`}
        >
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-full px-6 py-3 border border-gray-700/50 shadow-2xl">
                <div className="flex items-center space-x-8">

                    <div className="flex space-x-3">
                        <a
                            href="https://www.linkedin.com/in/muhammad-wajahat-hussain-0b5177225/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="https://github.com/RMWajahat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-800"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://instagram.com/web_habibi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            href="https://wa.me/+923463336286"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                        >
                            <MessageCircle size={18} />
                        </a>
                    </div>

                    {/* Navigation */}
                    <nav className="flex space-x-6">
                        <button
                            onClick={() => handleClick("projects-section")}
                            className="hover:text-gray-300 transition-colors text-sm font-medium"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => handleClick("contactme-section")}
                            className="hover:text-gray-300 transition-colors text-sm font-medium"
                        >
                            Contact
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}