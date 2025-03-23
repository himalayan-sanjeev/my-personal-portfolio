import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaPython, FaDatabase, FaGitAlt, FaDocker,
  FaShopify, FaChartLine, FaServer, FaFileContract,
  FaNetworkWired, FaBook, FaExchangeAlt
} from 'react-icons/fa';
import {
  SiRubyonrails, SiDjango, SiFlask,
  SiPostgresql, SiMongodb, SiHeroku,
  SiGraphql, SiPandas, SiNumpy,
  SiScikitlearn, SiPostman, SiSwagger, SiRedis
} from 'react-icons/si';
import './Skills.css';

// Function to get the appropriate icon for a skill
const getSkillIcon = (skill) => {
  const iconMap = {
    'HTML/CSS': <><FaHtml5 className="skill-icon html" /><FaCss3Alt className="skill-icon css" /></>,
    'JavaScript': <FaJs className="skill-icon js" />,
    'React.js': <FaReact className="skill-icon react" />,
    'Ruby on Rails': <SiRubyonrails className="skill-icon rails" />,
    'Python': <FaPython className="skill-icon python" />,
    'Django': <SiDjango className="skill-icon django" />,
    'Flask': <SiFlask className="skill-icon flask" />,
    'SQL': <FaDatabase className="skill-icon sql" />,
    'PostgreSQL': <SiPostgresql className="skill-icon postgres" />,
    'mySQL': <FaDatabase className="skill-icon mysql" />,
    'MongoDB': <SiMongodb className="skill-icon mongodb" />,
    'Git': <FaGitAlt className="skill-icon git" />,
    'Docker': <FaDocker className="skill-icon docker" />,
    'Heroku': <SiHeroku className="skill-icon heroku" />,
    'RESTful APIs': <FaNetworkWired className="skill-icon rest" />,
    'API Testing (Postman)': <SiPostman className="skill-icon postman" />,
    'API Documentation(Swagger/OpenAPI)': <SiSwagger className="skill-icon swagger" />,
    'GraphQL': <SiGraphql className="skill-icon graphql" />,
    'Pandas': <SiPandas className="skill-icon pandas" />,
    'NumPy': <SiNumpy className="skill-icon numpy" />,
    'Scikit-learn': <SiScikitlearn className="skill-icon sklearn" />,
    'Matplotlib': <FaChartLine className="skill-icon matplotlib" />,
    'Seaborn': <FaDatabase className="skill-icon seaborn" />,
    'NLTK': <FaBook className="skill-icon nltk" />,
    'Database Design & Normalization': <FaServer className="skill-icon database-design" />,
    'Indexing & Query Optimization': <FaChartLine className="skill-icon query-opt" />,
    'Database Migrations': <FaExchangeAlt className="skill-icon migrations" />,
    'ORM (ActiveRecord)': <FaFileContract className="skill-icon orm" />,
    'NoSQL (Redis)': <SiRedis className="skill-icon redis" />,
    'Shopify API': <FaShopify className="skill-icon shopify" />,
    'Recharge Payments': <FaDatabase className="skill-icon recharge" />,
    'Payment Gateway Integration': <FaDatabase className="skill-icon payment" />,
  };

  return iconMap[skill] || <FaDatabase className="skill-icon default" />;
};

// Define color intensity based on skill level
const getSkillColor = (level) => {
  // Returns a hex color with opacity based on skill level
  // Higher skill = more vibrant color
  if (level >= 90) return 'var(--primary-color)';
  if (level >= 80) return 'var(--primary-color-light, #61DAFB)';
  if (level >= 70) return 'var(--primary-color-lighter, #7EE7FC)';
  if (level >= 50) return 'var(--primary-color-lightest, #A9EFFD)';
  return '#ccc';
};

const SkillsSection = ({ skills }) => {
  // Define the preferred category order
  const preferredOrder = [
    'Backend Development',
    'API Development',
    'Frontend Development',
    'Machine Learning & Data Science',
    'Database Management',
    'DevOps & Tools',
    'eCommerce & Integrations'
  ];

  // Sort the skills based on the preferred order
  const sortedSkills = [...skills].sort((a, b) => {
    const indexA = preferredOrder.indexOf(a.category);
    const indexB = preferredOrder.indexOf(b.category);

    // If both categories are in the preferred order list, sort by that order
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    // If only one is in the list, prioritize it
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    // For categories not in the preferred list, sort alphabetically
    return a.category.localeCompare(b.category);
  });

  return (
    <div className="skills-section">
      <h3>My Skills</h3>

      <div className="skills-container">
        {sortedSkills.map((category, index) => (
          <div key={index} className="skill-category-card">
            <h4>{category.category}</h4>
            <div className="skill-badges">
              {category.items.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-badge"
                  title={`${skill.name} - ${skill.level}%`}
                  style={{ borderBottom: `3px solid ${getSkillColor(skill.level)}` }}
                >
                  <div className="skill-icon-container">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-dots">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`skill-dot ${i < Math.ceil(skill.level / 20) ? 'filled' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;