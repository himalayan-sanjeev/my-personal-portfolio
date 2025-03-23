import React from 'react';
import { FaCode, FaDatabase, FaServer, FaMobile, FaRobot, FaPenAlt, FaChartLine } from 'react-icons/fa';
import './About.css';
import './Skills.css';
import SkillsSection from './SkillsSection'; // Import the new SkillsSection component

const About = () => {

  const skills = [
    {
      category: 'Backend Development',
      items: [
        { name: 'Ruby on Rails', level: 95 },
        { name: 'Django', level: 65 },
        { name: 'Flask', level: 75 },
      ],
    },
    {
      category: 'API Development',
      items: [
        { name: 'RESTful APIs', level: 85 },
        { name: 'API Testing (Postman)', level: 75 },
        { name: 'API Docs(Swagger/OpenAPI)', level: 80 },
      ],
    },
    {
      category: 'Frontend Development',
      items: [
        { name: 'HTML/CSS', level: 80 },
        { name: 'JavaScript', level: 60 },
        { name: 'React.js', level: 50 },
      ],
    },
    {
      category: 'Database Management',
      items: [
        { name: 'SQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'mySQL', level: 65 },
        { name: 'Database Design', level: 80 },
        { name: 'Indexing & Optimization', level: 75 },
        { name: 'NoSQL (Redis)', level: 65 },
      ],
    },
    {
      category: 'DevOps & Tools',
      items: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Heroku', level: 50 },
      ],
    },
    {
      category: 'Machine Learning & Data Science',
      items: [
        { name: 'Pandas', level: 80 },
        { name: 'NumPy', level: 80 },
        { name: 'Scikit-learn', level: 70 },
        { name: 'Matplotlib', level: 75 },
        { name: 'Seaborn', level: 70 },
        { name: 'NLTK (NLP)', level: 65 },
      ],
    },
    {
      category: 'eCommerce & Integrations',
      items: [
        { name: 'Shopify API', level: 80 },
        { name: 'Recharge Payments', level: 75 },
        { name: 'Payment Gateway Integration', level: 50 },
      ],
    },
  ];

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Danphe Softwares Lab',
      period: '2021 - Present',
      description: 'Working on various web development projects using Ruby on Rails and other modern technologies. Implementing responsive designs and improving user experience.'
    },
    {
      title: 'ICT Assistant',
      company: 'STAAR Nepal',
      period: '2019 - 2020',
      description: 'Developed and maintained websites for this local non-government organization(NGO). Assisted in resolving ICT-related issues and conducted ICT training sessions to enhance team and communities capabilities.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Engineering',
      institution: 'Nepal College of Information Technology',
    },
    {
      degree: 'HSEB (+2)',
      institution: 'St. Xavier\'s College, Kathmandu'
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate software engineer from Nepal with a strong foundation in computer science. I specialize in full-stack development using Ruby on Rails and backend development with Python, with a keen interest in machine learning and AI technologies. I enjoy building applications that solve real-world problems while delivering seamless and impactful user experiences.
            </p>
            <p>
              I thrive on continuous learning, constantly immersing myself in the latest technologies and trends to stay adaptable and innovative in the dynamic world of software development and beyond.
            </p>
            <p>
              I occasionally share my thoughts on my blog, exploring multidisciplinary topics like technology, history, and contemporary societal issues, reflecting my passion for connecting diverse fields and bridging technical and humanistic perspectives.            </p>
          </div>

          <div className="services">
            <h3>What I Do</h3>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FaCode />
                </div>
                <h4>Full Stack Development</h4>
                <p>Building end-to-end web applications using Ruby on Rails, ensuring seamless functionality and user experience.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaServer />
                </div>
                <h4>Backend & API Development</h4>
                <p> Developing scalable and efficient server-side systems and RESTful APIs using Ruby on Rails and Python</p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaDatabase />
                </div>
                <h4>Database Design</h4>
                <p>Designing and optimizing databases ensuring high performance, scalability, and data integrity for dynamic, robust and data-intensive modern applications.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <FaRobot />
                </div>
                <h4>AI/ML Development</h4>
                <p>Exploring AI and machine learning technologies to build intelligent, data-driven solutions.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <FaChartLine />
                </div>
                <h4>Data Analytics</h4>
                <p>Transforming raw data into actionable insights through advanced analytics, visualization, and reporting.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <FaPenAlt />
                </div>
                <h4>Content Creation</h4>
                <p>Crafting engaging and informative content on multidisciplinary topics, with a focus on technology, history, and societal issues, for blogs and communities.</p>
              </div>
            </div>
          </div>

          <SkillsSection skills={skills} />
          <br></br>
          <div className="experience-section">
            <h3>Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <h5>{exp.company}</h5>
                    <p className="period">{exp.period}</p>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3>Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <p className="period">{edu.period}</p>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;