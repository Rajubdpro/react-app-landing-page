import React from 'react';
import { motion } from 'framer-motion';
function About(props) {
  const {
    image = "/placeholder.svg",
    title = "About Us",
    button = "Learn More",
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et soluta aperiam omnis praesentium hic error esse eligendi recusandae quo eos iste incidunt veritatis optio accusamus numquam reprehenderit, nesciunt enim, vero voluptate reiciendis officiis ratione non!"
  } = props;

  return (
    <section id="about">
      <div className="about-container">
        <motion.div
          className="about-wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Image Container */}
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <div className="image-shape"></div>
              <img src={image || "/placeholder.svg"} alt={`About ${title}`} />
              <div className="image-overlay"></div>
            </div>
            <div className="decorative-circle"></div>
            <div className="decorative-dots"></div>
          </motion.div>

          {/* Text Container */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="content-wrapper">
              <h2 className="about-title">
                <span className="title-text">{title}</span>
                <span className="title-decoration"></span>
              </h2>
              
              <p className="about-description">{description}</p>
              
              <motion.button
                className="about-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="button-text">{button}</span>
                <span className="button-arrow">
                  <svg viewBox="0 0 24 24" className="arrow-icon">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
