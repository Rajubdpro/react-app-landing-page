"use client"
import { motion } from "framer-motion"

// Assuming these images are imported correctly in your project
import featureimage from "../assets/images/feature_1.png"
import featureimage1 from "../assets/images/feature_2.png"
import featureimage2 from "../assets/images/feature_3.png"

function Feature() {
  const features = [
    {
      image: featureimage,
      title: "Corporis voluptates sit",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-icon">
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M17.5 6.51L17.51 6.49889"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      image: featureimage1,
      title: "Ullamco laboris nisi",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-icon">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      image: featureimage2,
      title: "Labore consequatur",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-icon">
          <path
            d="M9 11L12 14L22 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      image: featureimage2,
      title: "Beatae veritatis",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="feature-icon">
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.7273 14.7273C18.6063 15.0909 18.6273 15.4818 18.7891 15.8318C18.9509 16.1818 19.2418 16.4727 19.6 16.6364L19.5818 16.6545C19.2945 17.2036 18.9218 17.7145 18.4727 18.1727C18.0236 18.6309 17.5127 19.0036 16.9636 19.2909L16.9455 19.2727C16.7818 18.9145 16.4909 18.6236 16.1409 18.4618C15.7909 18.3 15.4 18.2791 15.0364 18.4L14.6727 18.5218C14.3091 18.6418 13.9855 18.6509 13.6764 18.5473C13.3673 18.4436 13.0909 18.2318 12.8909 17.9455C12.6909 17.6591 12.5782 17.3145 12.5673 16.9582C12.5564 16.6018 12.6473 16.25 12.8364 15.95L12.9582 15.5864C13.0791 15.2227 13.0582 14.8318 12.8964 14.4818C12.7345 14.1318 12.4436 13.8409 12.0855 13.6773L12.1036 13.6591C12.3909 13.11 12.7636 12.5991 13.2127 12.1409C13.6618 11.6827 14.1727 11.31 14.7218 11.0227L14.74 11.0409C14.9036 11.3991 15.1945 11.69 15.5445 11.8518C15.8945 12.0136 16.2855 12.0345 16.6491 11.9136L17.0127 11.7918C17.3764 11.6718 17.7 11.6627 18.0091 11.7664C18.3182 11.87 18.5945 12.0818 18.7945 12.3682C18.9945 12.6545 19.1073 12.9991 19.1182 13.3555C19.1291 13.7118 19.0382 14.0636 18.8491 14.3636L18.7273 14.7273Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.4 14.8001L7 14.6001C6.53137 14.3565 5.99979 14.2718 5.48223 14.3599C4.96466 14.4479 4.49251 14.7033 4.14 15.0801C3.79 15.4601 3.26 15.7201 2.7 15.8001C2.43235 15.8414 2.17669 15.9291 1.94359 16.0591C1.7105 16.1892 1.50372 16.3596 1.33547 16.5613C1.16722 16.763 1.04058 16.9926 0.96202 17.2389C0.883462 17.4852 0.854393 17.7437 0.876599 18.0001C0.9 18.2601 1 19.0001 2 19.5001C3 20.0001 3.5 20.0001 4 20.5001C4.5 21.0001 5 21.0001 6 21.0001C7 21.0001 8 21.0001 9 20.0001L9.5 19.5001C9.79667 19.2035 10.0022 18.8295 10.1 18.4201C10.2 18.0001 10.2 17.6001 10.1 17.2001C10.0059 16.8348 9.82193 16.4963 9.56863 16.2095C9.31533 15.9226 8.99934 15.6949 8.64 15.5401L7.4 14.8001Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.2998 7.40005L11.4998 7.00005C11.7434 6.53142 11.8281 5.99984 11.7401 5.48227C11.652 4.96471 11.3967 4.49256 11.0198 4.14005C10.6398 3.79005 10.3798 3.26005 10.2998 2.70005C10.2586 2.4324 10.1708 2.17674 10.0408 1.94364C9.91072 1.71055 9.74038 1.50377 9.53868 1.33552C9.33697 1.16727 9.10733 1.04063 8.86105 0.962072C8.61478 0.883514 8.35633 0.854445 8.09982 0.876651C7.83982 0.900051 7.09982 1.00005 6.59982 2.00005C6.09982 3.00005 6.09982 3.50005 5.59982 4.00005C5.09982 4.50005 5.09982 5.00005 5.09982 6.00005C5.09982 7.00005 5.09982 8.00005 6.09982 9.00005L6.59982 9.50005C6.89635 9.79672 7.27033 10.0022 7.67982 10.1C8.09982 10.2 8.49982 10.2 8.89982 10.1C9.26509 10.0059 9.60363 9.82198 9.89044 9.56868C10.1773 9.31538 10.405 8.99939 10.5598 8.64005L11.2998 7.40005Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="features">
      <div className="features-bg-shape"></div>
      <div className="features-wrapper">
        <motion.div
          className="feature-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="feature-badge">POWERFUL FEATURES</span>
          <h1 className="feature-title">App Features</h1>
          <p className="feature-description">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
            >
              <div className="feature-card-content">
                <div className="feature-icon-container">{feature.icon}</div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.subtitle}</p>
                <div className="feature-image-container">
                  <img src={feature.image || "/placeholder.svg"} alt={feature.title} className="feature-image" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature
