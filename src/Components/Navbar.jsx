"use client"

import { useState, useEffect } from "react"
import logo from "../assets/images/logo.png"

function Navbar() {
  const [nav, setNav] = useState(false)
  const [active, setActive] = useState("home")

  // Handle navbar background change on scroll
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setNav(true)
      } else {
        setNav(false)
      }
    }

    window.addEventListener("scroll", changeBackground)
    return () => window.removeEventListener("scroll", changeBackground)
  }, [])

  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    // Define the sections and their corresponding IDs in order of appearance
    const sectionIds = ["home", "features", "about", "presentation", "download", "contact"]

    // Create a map to store the visibility ratio of each section
    const sectionVisibility = {}
    sectionIds.forEach((id) => {
      sectionVisibility[id] = 0
    })

    // Function to determine which section is most visible
    const getMostVisibleSection = () => {
      // Get the section with the highest visibility ratio
      let maxVisibility = 0
      let mostVisibleSection = "home" // Default to home

      for (const id of sectionIds) {
        if (sectionVisibility[id] > maxVisibility) {
          maxVisibility = sectionVisibility[id]
          mostVisibleSection = id
        }
      }

      return mostVisibleSection
    }

    // Function to update active section based on scroll position
    const updateActiveSection = () => {
      // Special case for top of page
      if (window.scrollY < 100) {
        setActive("home")
        return
      }

      // Otherwise use the most visible section
      const mostVisible = getMostVisibleSection()
      setActive(mostVisible)
    }

    // Set up the observer with more precise options
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id || (entry.target.tagName.toLowerCase() === "header" ? "home" : null)

        if (id) {
          // Update the visibility ratio for this section
          sectionVisibility[id] = entry.intersectionRatio
        }
      })

      // Update the active section
      updateActiveSection()
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sectionIds.forEach((id) => {
      let element = null

      if (id === "home") {
        // For home, try to find the header element
        element = document.querySelector("header")
      } else {
        // For other sections, find by ID
        element = document.getElementById(id)
      }

      if (element) {
        observer.observe(element)
      }
    })

    // Also listen to scroll events for more responsive updates
    window.addEventListener("scroll", updateActiveSection)

    return () => {
      // Clean up
      sectionIds.forEach((id) => {
        let element = null

        if (id === "home") {
          element = document.querySelector("header")
        } else {
          element = document.getElementById(id)
        }

        if (element) {
          observer.unobserve(element)
        }
      })

      window.removeEventListener("scroll", updateActiveSection)
    }
  }, [])

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="/" className="logo">
        <img src={logo || "/placeholder.svg"} alt="Logo" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li onClick={() => setActive("home")}>
          <a href="#home" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>
        <li onClick={() => setActive("features")}>
          <a href="#features" className={active === "features" ? "active" : ""}>
            Features
          </a>
        </li>
        <li onClick={() => setActive("about")}>
          <a href="#about" className={active === "about" ? "active" : ""}>
            About
          </a>
        </li>
        <li onClick={() => setActive("presentation")}>
          <a href="#presentation" className={active === "presentation" ? "active" : ""}>
            UI & Presentation
          </a>
        </li>
        <li onClick={() => setActive("download")}>
          <a href="#download" className={active === "download" ? "active" : ""}>
            Download
          </a>
        </li>
        <li onClick={() => setActive("contact")}>
          <a href="#contact" className={active === "contact" ? "active" : ""}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
