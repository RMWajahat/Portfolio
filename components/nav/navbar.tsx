"use client"
import { useEffect, useState, useRef } from "react";
import { socialLinks, navigationLinks } from "@/data";

export default function Navbar({handleClick}: { handleClick: (sectionId: string) => void }) {

    const [headerVisible, setHeaderVisible] = useState(true);
    const lastScrollY = useRef(0)


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
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${link.hoverColor} transition-colors p-2 rounded-full hover:bg-gray-800`}
                            >
                                <link.icon size={18} />
                            </a>
                        ))}
                    </div>

                    {/* Navigation */}
                    <nav className="flex space-x-6">
                        {navigationLinks.map((navLink) => (
                            <button
                                key={navLink.sectionId}
                                onClick={() => handleClick(navLink.sectionId)}
                                className="hover:text-gray-300 transition-colors text-sm font-medium"
                            >
                                {navLink.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}