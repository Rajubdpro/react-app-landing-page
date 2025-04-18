"use client"
import { motion } from "framer-motion"
function FeatureBox({ images, title, subtitle, index }) {
  // Different colors for each feature box
  const colors = [
    { bg: "#f0f7ff", accent: "#4285f4" },
    { bg: "#fff0f6", accent: "#ea4c89" },
    { bg: "#f0fff4", accent: "#34a853" },
    { bg: "#fff7f0", accent: "#fbbc05" },
  ]

  const color = colors[index % colors.length]

  return (
    <motion.div
      className="feature-box"
      style={{
        "--accent-color": color.accent,
        "--bg-color": color.bg,
      }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="feature-icon-container">
        <motion.div className="feature-icon-wrapper" whileHover={{ rotate: 5, scale: 1.05 }}>
          <img src={images || "/placeholder.svg"} alt={title} className="feature-icon" />
        </motion.div>
      </div>

      <div className="feature-content">
        <h3 className="feature-box-title">{title}</h3>
        <p className="feature-box-subtitle">{subtitle}</p>

        <motion.div
          className="feature-learn-more"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <span>Learn more</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default FeatureBox
