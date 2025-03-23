import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import portfolioImage from './images/portfolio.png';
import ecommerceImage from './images/ecommerce.jpg';
import blogImage from './images/blog.jpg';
import weatherImage from './images/weather.jpg';
import chatImage from './images/chat.png';
import edaImage from './images/eda.png';
import gisImage from './images/climate-gis.png';
import eventAppImage from './images/event.png';
import fluidImage from './images/fluid.png';
import floatImage from './images/rbc.png';
import heavenTechImage from './images/heaven-tech.png';
import suswasthyaImage from './images/suswasthya.jpg';
import artsyLensImage from './images/artsy.png';
import nepaliNewsImage from './images/nlp.jpg';

import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with React.js and modern CSS features.",
      imgUrl: portfolioImage,
      tags: ["Web", "React", "Personal"],
      codeLink: "https://github.com/himalayan-sanjeev/my-personal-portfolio",
      demoLink: "https://sanjeevpoudel.com.np",
    },
    {
      title: "Blog Application",
      description: "Content management system with authentication, markdown support, and comment functionality.",
      imgUrl: blogImage,
      tags: ["Web", "Ruby on Rails", "Personal"],
      codeLink: "https://github.com/himalayan-sanjeev/",
      demoLink: "#",
    },
    {
      title: "Suswasthya (Healthcare Solution)",
      description: "A healthcare enterprise solution built with Django to manage hospitals, doctors, and patients. Designed to streamline operations and improve healthcare delivery through a centralized platform.",
      imgUrl: suswasthyaImage,
      tags: ["Django", "Web", "Python"],
      codeLink: "#",
      demoLink: "#",
    },
    {
      title: "GIS Climate Change Pattern of Nepal",
      description: "A geospatial analysis project exploring climate change patterns in Nepal using GIS tools and Python libraries like Geopandas and Matplotlib. Document and report the proposed solutions to the climate change problem.",
      imgUrl: gisImage,
      tags: ["Python", "Data Analytics", "Geospatial Analysis", "Machine Learning"],
      codeLink: "https://github.com/himalayan-sanjeev/gis-climate-change-pattern-of-nepal",
      demoLink: "#",
    },
    {
      title: "Climate Data EDA",
      description: "A comprehensive Exploratory Data Analysis (EDA) project showcasing data cleaning, visualization, and insights using Python and popular libraries like Pandas, Matplotlib, and Seaborn.",
      imgUrl: edaImage,
      tags: ["Python", "Data Analytics"],
      codeLink: "https://github.com/himalayan-sanjeev/complete-eda-himalayan",
      demoLink: "https://himalayan-getting-started.streamlit.app/",
    },
    {
      title: "Weather App",
      description: "Real-time weather application using external API to fetch weather data for various locations.",
      imgUrl: weatherImage,
      tags: ["Web", "Ruby on Rails"],
      codeLink: "https://github.com/himalayan-sanjeev/",
      demoLink: "#",
    },
    {
      title: "ChatBot Application",
      description: "Real-time chat application built with Socket.io and React with messaging capabilities.",
      imgUrl: chatImage,
      tags: ["Web", "Python"],
      codeLink: "https://github.com/himalayan-sanjeev/multi-llm-chatbot",
      demoLink: "https://himalayan-chat-bot.streamlit.app/",
    },
    {
      title: "Event Ticketing App",
      description: "A full-stack event ticketing application built with Ruby on Rails, featuring user authentication, event management, and ticket booking functionality.",
      imgUrl: eventAppImage,
      tags: ["Web", "Ruby on Rails"],
      codeLink: "https://github.com/himalayan-sanjeev/",
      demoLink: "#",
    },
    {
      title: "E-commerce Website",
      description: "Online shopping platform with product catalog, shopping cart, and payment integration.",
      imgUrl: ecommerceImage,
      tags: ["Ruby on Rails", "API", "React", "eCommerce", "Web", "Personal"],
      codeLink: "https://github.com/himalayan-sanjeev/",
      demoLink: "#",
    },
    {
      title: "Fluid",
      description: "Worked as a backend Ruby on Rails engineer on Fluid.app, a multi-level marketing eCommerce platform. Contributed to the core system and API development, enabling seamless workflows and integrations.",
      imgUrl: fluidImage,
      tags: ["Ruby on Rails", "API Development", "Backend", "eCommerce", "Web"],
      codeLink: "https://fluid-commerce.redocly.app/",
      demoLink: "https://fluid.app/",
    },
    {
      title: "Root Beer Club",
      description: "Worked on Shopify integrations and APIs for Root Beer Club (now Float), a subscription-based eCommerce platform. Developed solutions to enhance the platform's functionality and user experience.",
      imgUrl: floatImage,
      tags: ["Ruby on Rails", "API Development", "Shopify", "eCommerce", "Web"],
      codeLink: "https://rootbeerfloat.com/",
      demoLink: "https://rootbeerfloat.com/",
    },
    {
      title: "Heaven Tech",
      description: "Worked as a backend developer for Heaven Tech, handling third-party API integrations such as recharge payments and Shopify. Developed solutions to streamline eCommerce operations and enhance user experience.",
      imgUrl: heavenTechImage,
      tags: ["Ruby on Rails", "API Development", "Shopify", "Recharge Subscription", "eCommerce", "Web"],
      codeLink: "https://heavenpanty.com/",
      demoLink: "https://heavenpanty.com/",
    },
    {
      title: "The Artsy Lens",
      description: "A photography and videography portfolio website with service booking functionality, built with Django. Showcases creative work and allows clients to book services seamlessly.",
      imgUrl: artsyLensImage,
      tags: ["Django", "Web", "Python"],
      codeLink: "#",
      demoLink: "#",
    },
    {
      title: "Nepali News Classifier",
      description: "A complete machine learning project for classifying Nepali news content into respective categories. Involved data extraction, preprocessing, training multiple algorithms, and deploying the model.",
      imgUrl: nepaliNewsImage,
      tags: ["Python", "Machine Learning", "Data Science", "Academic"],
      codeLink: "#",
      demoLink: "#",
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleProjectFilter = (category) => {
    setActiveFilter(category);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (category === 'All') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.tags.includes(category)));
      }
    }, 500);
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="section-title">
          <h2>My Projects</h2>
          <div className="projects-intro">
            <p>
              Below is a collection of projects I've built, contributed to, and explored academically over the years. These include personal projects developed from scratch, professional projects I was part of, focusing on backend development and API integrations, and academic projects that showcase my passion for machine learning and data science. Each project reflects my dedication to solving real-world problems and delivering impactful, innovative solutions.            </p>
          </div>
          <br></br>
          <div className="underline"></div>
        </div>

        <div className="project-filter">
          {['All', 'Web', 'Ruby on Rails', 'API Development', 'Python', 'Machine Learning', 'Database Design', 'Data Analytics', "eCommerce"].map((item, index) => (
            <div
              key={index}
              onClick={() => handleProjectFilter(item)}
              className={`project-filter-item ${activeFilter === item ? 'active-filter' : ''}`}
            >
              {item}
            </div>
          ))}
        </div>

        <div
          className="projects-grid"
          style={{
            transform: `translateY(${animateCard.y}px)`,
            opacity: animateCard.opacity,
            transition: 'all 0.5s ease'
          }}
        >
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-img">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-project.jpg';
                  }}
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="project-tag" key={tagIndex}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;