import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaTag, FaSearch } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample blog posts data - will update later
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React.js",
      summary: "Learn the basics of React.js and how to create your first React application.",
      content: "This is a detailed guide on getting started with React.js...",
      date: "March 15, 2025",
      category: "Rails",
      image: "/blogs/react.jpg",
      tags: ["Ruby on Rails", "JavaScript", "Web Development"]
    },
    {
      id: 2,
      title: "Introduction to RESTful APIs",
      summary: "Understanding the principles and best practices of RESTful API design.",
      content: "RESTful APIs are an essential part of modern web development...",
      date: "March 10, 2025",
      category: "API",
      image: "/blogs/api.jpg",
      tags: ["API", "Backend", "Web Development"]
    },
    {
      id: 3,
      title: "The Future of JavaScript",
      summary: "Exploring upcoming features and trends in JavaScript development.",
      content: "JavaScript continues to evolve with new features and capabilities...",
      date: "March 5, 2025",
      category: "JavaScript",
      image: "/blogs/javascript.jpg",
      tags: ["JavaScript", "Web Development", "Frontend"]
    },
    {
      id: 4,
      title: "Optimizing React Performance",
      summary: "Tips and tricks to improve the performance of your React applications.",
      content: "Performance optimization is crucial for providing a smooth user experience...",
      date: "February 28, 2025",
      category: "React",
      image: "/blogs/react-performance.jpg",
      tags: ["React", "Performance", "Web Development"]
    },
    {
      id: 6,
      title: "CSS Grid vs Flexbox",
      summary: "Comparing two powerful CSS layout systems and when to use each.",
      content: "CSS Grid and Flexbox are two layout systems that solve different problems...",
      date: "February 15, 2025",
      category: "CSS",
      image: "/blogs/css.jpg",
      tags: ["CSS", "Web Design", "Frontend"]
    }
  ];

  const [displayedPosts, setDisplayedPosts] = useState(blogPosts);
  const [selectedPost, setSelectedPost] = useState(null);

  // Get unique categories
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  useEffect(() => {
    filterPosts();
  }, [searchTerm, activeCategory]);

  const filterPosts = () => {
    let filtered = blogPosts;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setDisplayedPosts(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="section-title">
          <h2>Blog</h2>
          <div className="underline"></div>
        </div>

        {!selectedPost ? (
          <>
            <div className="blog-search">
              <div className="search-input">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            <div className="blog-categories">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`category-btn ${activeCategory === category ? 'active-category' : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="blog-grid">
              {/* {displayedPosts.length > 0 ? (
                displayedPosts.map((post) => (
                  <div
                    className="blog-card"
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                  >
                    <div className="blog-image">
                      <img
                        src={post.image}
                        alt={post.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/placeholder-blog.jpg';
                        }}
                      />
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-summary">{post.summary}</p>
                      <div className="blog-meta">
                        <span className="blog-date">
                          <FaCalendarAlt /> {post.date}
                        </span>
                        <span className="blog-category">
                          <FaTag /> {post.category}
                        </span>
                      </div>
                    </div>
                  </div>
                )) */}
              {/* ) : ( */}
              <div className="no-posts">
                <p>No posts matching your criteria.</p>
              </div>
              {/* )} */}
            </div>
          </>
        ) : (
          <div className="blog-post">
            <button
              className="back-btn"
              onClick={handleBackClick}
            >
              ← Back to all posts
            </button>

            <div className="post-header">
              <h1 className="post-title">{selectedPost.title}</h1>
              <div className="post-meta">
                <span className="post-date">
                  <FaCalendarAlt /> {selectedPost.date}
                </span>
                <span className="post-category">
                  <FaTag /> {selectedPost.category}
                </span>
              </div>
            </div>

            <div className="post-featured-image">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/placeholder-blog.jpg';
                }}
              />
            </div>

            <div className="post-content">
              <p>{selectedPost.content}</p>
              {/* This would be replaced with actual detailed content */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <h2>Section Title</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>

            <div className="post-tags">
              {selectedPost.tags.map((tag, index) => (
                <span key={index} className="post-tag">{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;