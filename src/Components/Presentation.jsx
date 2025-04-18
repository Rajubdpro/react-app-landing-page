"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    title: "Dashboard Analytics",
    description: "Track your app performance with our intuitive dashboard interface.",
    color: "purple",
  },
  {
    title: "User Feed",
    description: "Keep users engaged with a personalized content feed.",
    color: "orange",
  },
  {
    title: "Notification Center",
    description: "Never miss important updates with our notification system.",
    color: "blue",
  },
  {
    title: "Statistics Overview",
    description: "Visualize your data with beautiful and informative charts.",
    color: "emerald",
  },
]

function Presentation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
      },
    }),
  }

  return (
    <div
      id="presentation"
      className="presentation-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="presentation-content">
        <motion.h1
          className="presentation-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          UI Presentation
        </motion.h1>

        <motion.p
          className="presentation-description"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </motion.p>

        <div className="slider-container">
          {/* Main slider */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="slide"
            >
              <div className="slide-content">
                {/* Phone mockup */}
                <motion.div
                  className={`phone-mockup ${slides[currentIndex].color}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Status bar */}
                  <div className="status-bar"></div>

                  {/* Content */}
                  <div className="phone-content">
                    <div className="phone-header">
                      <div className="header-line"></div>
                      <div className="header-avatar">
                        <div className="avatar-inner"></div>
                      </div>
                    </div>

                    <h3 className="phone-title">{slides[currentIndex].title}</h3>
                    <p className="phone-description">{slides[currentIndex].description}</p>

                    {/* Mock UI elements */}
                    <div className="tab-container">
                      {["Overview", "Stats", "Users", "Activity"].map((tab, i) => (
                        <div key={i} className={`tab ${i === 0 ? "active" : ""}`}>
                          {tab}
                        </div>
                      ))}
                    </div>

                    <div className="stats-container">
                      <div className="stat-card">
                        <div className="stat-value">42k</div>
                        <div className="stat-label">Total Users</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-value">8.5k</div>
                        <div className="stat-label">New Today</div>
                      </div>
                    </div>

                    <div className="chart-container">
                      <div className="chart-header">
                        <div className="chart-title">Activity</div>
                        <div className="chart-period">This Week</div>
                      </div>

                      {/* Mock chart */}
                      <div className="chart">
                        {[40, 65, 45, 80, 60, 75, 50].map((height, i) => (
                          <motion.div
                            key={i}
                            className="chart-bar"
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: 0.1 * i, duration: 0.5 }}
                          ></motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text content */}
                <motion.div
                  className="slide-text"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h2 className="slide-heading">{slides[currentIndex].title}</h2>
                  <p className="slide-paragraph">{slides[currentIndex].description}</p>
                  <div className="slide-indicators">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentIndex ? 1 : -1)
                          setCurrentIndex(index)
                        }}
                        className={`indicator ${index === currentIndex ? `active ${slides[currentIndex].color}` : ""}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button onClick={handlePrevious} className="nav-button prev" aria-label="Previous slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button onClick={handleNext} className="nav-button next" aria-label="Next slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Presentation
