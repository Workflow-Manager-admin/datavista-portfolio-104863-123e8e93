import React, { useState, useEffect } from 'react';
import './Blog.css';

// Demo: Use a couple of static blog posts as markdown sources.
const blogPosts = [
  {
    title: "How to Tell a Story with Data",
    date: "2024-03-26",
    preview: `
**Key steps in data storytelling:** 
Start with a clear question, provide insight with visuals, and deliver your conclusion for action. *Show, don't just tell*, and tailor to your audience!`,
    slug: "data-storytelling"
  },
  {
    title: "Quick Python Tips for Clean Analysis",
    date: "2024-03-10",
    preview: `
Use list comprehensions, avoid for-loops on pandas DF, and harness groupby!<br/>Small tweaks lead to cleaner, faster code.
    `,
    slug: "python-tips"
  }
];

// PUBLIC_INTERFACE
export default function Blog() {
  const [posts, setPosts] = useState(blogPosts);

  // In a real site, fetch blog posts or Markdown files via network or use import.
  // Here, we just use the array above.

  return (
    <div className="blog-container">
      <h3>Latest Blog Articles</h3>
      <div className="blog-grid">
        {posts.map((post) => (
          <div className="blog-card" key={post.slug}>
            <h4>{post.title}</h4>
            <span className="blog-date">{post.date}</span>
            <div className="blog-preview" dangerouslySetInnerHTML={{ __html: post.preview.replace(/\n/g, "<br/>") }} />
            <a href="#" className="btn-outline blog-readmore">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}
