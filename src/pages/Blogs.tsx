import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const blogs = [
  {
    title: "My Journey in Full Stack Development",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://github.com/shaik1234567",
    description: "Exploring the world of full stack development and sharing my experiences.",
  },
  {
    title: "Building Modern Web Applications",
    platform: "Dev.to",
    icon: <FaDev />,
    link: "https://github.com/shaik1234567",
    description: "Tips and tricks for creating responsive and scalable web applications.",
  },
  {
    title: "Learning React and Beyond",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://github.com/shaik1234567",
    description: "A comprehensive guide to mastering React and modern JavaScript frameworks.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
