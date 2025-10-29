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
      degree: 'HSEB (10+2)',
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
          <br />
          <div className="experience-section">
            <h3>Experience</h3>
            <div className="timeline">
              {/* Software Engineer - Danphe Software Labs */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Software Engineer</h4>
                  <h5>Danphe Software Labs · Full-time</h5>
                  <p className="period">Oct 2021 – Present · Kathmandu, Nepal (Hybrid)</p>

                  <p>
                    As a backend engineer, I’ve contributed to multiple international SaaS and web platform projects, collaborating with distributed teams to deliver scalable, production-ready solutions using Ruby on Rails and Agile practices.
                  </p>

                  <h4 style={{ marginTop: '12px' }}>Key Contributions</h4>

                  <div className="contrib-grid">
                    <div className="contrib-card">
                      <div className="contrib-card-inner">
                        <h5 className="contrib-title">Fluid Commerce (USA)</h5>
                        <p className="contrib-role">Backend feature development · API integrations · Code quality</p>
                        <p className="contrib-desc">Contributed to the U.S.-based SaaS eCommerce platform powering direct sales and MLM businesses, as part of external engineering team. Gained hands-on experience Collaborating with global, cross-functional teams coordinating across international time zones on backend feature development, API design and integrations, and code quality improvements in a distributed agile environment and delivering scalable, production-ready features.</p>
                        <div className="contrib-tags">
                          <span className="contrib-tag">eCommerce</span>
                          <span className="contrib-tag">APIs</span>
                          <span className="contrib-tag">Fair Share</span>
                        </div>
                      </div>
                    </div>

                    <div className="contrib-card">
                      <div className="contrib-card-inner">
                        <h5 className="contrib-title">Root Beer Club / Float (USA)</h5>
                        <p className="contrib-role">Shopify integrations · Order automation</p>
                        <p className="contrib-desc">Contributed to backend systems integrating Shopify and ShipStation to automate order processing and improve inventory management, helping streamline subscription and eCommerce workflows.</p>
                        <div className="contrib-tags">
                          <span className="contrib-tag">Shopify</span>
                          <span className="contrib-tag">ShipStation</span>
                          <span className="contrib-tag">Integrations</span>
                        </div>
                      </div>
                    </div>

                    <div className="contrib-card">
                      <div className="contrib-card-inner">
                        <h5 className="contrib-title">HeavenTech (USA)</h5>
                        <p className="contrib-role">Third-party API integrations · Recharge Subscriptions</p>
                        <p className="contrib-desc">Supported backend infrastructure integrating Shopify and Recharge APIs to ensure smooth user experiences, subscription handling, and payment reliability for eCommerce operations.</p>
                        <div className="contrib-tags">
                          <span className="contrib-tag">Shopify</span>
                          <span className="contrib-tag">Recharge</span>
                          <span className="contrib-tag">Payments</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="role-skills">
                    <strong>Skills:</strong>
                    <div className="skills-list">
                      <span className="role-skill">Ruby on Rails</span>
                      <span className="role-skill">REST APIs</span>
                      <span className="role-skill">Test Driven Development </span>
                      <span className="role-skill">Relational Databases </span>
                      <span className="role-skill">Third Party API Integrations</span>
                      <span className="role-skill">Cross Functional Team Collaboration </span>
                      <span className="role-skill">CI/CD</span>
                      <span className="role-skill">Query Optimization</span>
                      <span className="role-skill">Software Infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Associate Software Engineer */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Associate Software Engineer</h4>
                  <h5>Danphe Software Labs</h5>
                  <p className="period">May 2021 – Sep 2021 · Remote</p>
                  <p>
                    Worked under the mentorship of senior developers, gaining hands-on experience in Ruby on Rails, PostgreSQL, and RSpec. Contributed to internal and client projects focusing on backend development, API integration, and testing, which led to a full-time position as a Software Engineer.
                  </p>
                  <div className="role-skills">
                    <strong>Skills:</strong>
                    <div className="skills-list">
                      <span className="role-skill">Ruby</span>
                      <span className="role-skill">Ruby on Rails</span>
                      <span className="role-skill">Web Fundamentals</span>
                      <span className="role-skill">MVC</span>
                      <span className="role-skill">RSpec</span>
                      <span className="role-skill">Object Relational Mapping(ORM)</span>
                      <span className="role-skill">API Development</span>
                      <span className="role-skill">React JS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Freelance / Volunteer */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Freelance Software Engineer / ICT Assistant</h4>
                  <h5>Freelancer</h5>
                  <p className="period">Nov 2019 – Jan 2021 · Kathmandu, Nepal (Remote)</p>
                  <p>
                    Undertook freelance and volunteer projects involving ICT assistance and web development for local community and non-profit organizations, including STAAR Nepal NGO and alumni and welfare societies. Provided technical and content support, handled WordPress site setup, customization, and maintenance, and created documentation and digital content.
                  </p>
                  <div className="role-skills">
                    <strong>Skills:</strong>
                    <div className="skills-list">
                      <span className="role-skill">WordPress</span>
                      <span className="role-skill">Content Writing</span>
                      <span className="role-skill">Client Communication</span>
                      <span className="role-skill">Digital Collaboration</span>
                      <span className="role-skill">Technical Documentation</span>
                      <span className="role-skill">ICT</span>

                    </div>
                  </div>
                </div>
              </div>
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