"use client"
import {
  Github,
  Linkedin,
  Instagram
} from "lucide-react"
export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Muhammad Wajahat Hussain</h3>
              <p className="text-gray-400 text-sm">Full Stack Developer & Data Scientist</p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <a
                href="mailto:rajamuhammadwajahat2003@gmail.com"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                rajamuhammadwajahat2003@gmail.com
              </a>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-wajahat-hussain-0b5177225/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com/web_habibi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://github.com/RMWajahat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Muhammad Wajahat Hussain. Available for freelance projects on Fiverr & Upwork.
            </p>
          </div>
        </div>
      </footer>
  )
}