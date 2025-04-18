"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "./Navbar"
function Header() {
  // Create mouse movement effect for the background elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01

      const decorElements = document.querySelectorAll(".decor-element")
      decorElements.forEach((elem, i) => {
        const speed = i % 2 === 0 ? 0.5 : 0.3
        elem.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div id="main">
      <Navbar />

      {/* Decorative elements */}
      <div className="decor-element decor-circle"></div>
      <div className="decor-element decor-dots"></div>
      <div className="decor-element decor-line"></div>
      <div className="decor-element decor-square"></div>

      <div className="header-container">
        <motion.div
          className="name"
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="title-wrapper">
              <span className="highlight">Launch Your App</span>
              <span className="main-title">With Confidence and Creativity</span>
            </div>
          </motion.h1>

          <motion.p
            className="details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum consequuntur dolore laborum aliquam.
          </motion.p>

          <motion.div
            className="button-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            <a href="#" className="cv-btn">
              <span className="btn-text">Download</span>
              <span className="btn-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 15L12 3M12 15L8 11M12 15L16 11M21 15V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Header
