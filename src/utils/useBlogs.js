import { useState, useEffect } from 'react';

// Hook to fetch all blogs
export const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/blogs');
        const result = await response.json();
        
        if (result.success) {
          // Transform the data to include required fields
          const transformedBlogs = result.data.map(blog => ({
            ...blog,
            date: blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : 'No date',
            category: blog.category || 'Techtrek News'
          }));
          setBlogs(transformedBlogs);
        } else {
          setError(result.message || 'Failed to fetch blogs');
        }
      } catch (err) {
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};

// Hook to fetch a single blog by slug
export const useBlog = (slug) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/blogs/${slug}`);
        const result = await response.json();
        
        if (result.success) {
          // Transform the data to include required fields
          const transformedBlog = {
            ...result.data,
            date: result.data.createdAt ? new Date(result.data.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : 'No date',
            category: result.data.category || 'Techtrek News'
          };
          setBlog(transformedBlog);
        } else {
          setError(result.message);
        }
      } catch (err) {
        setError('Failed to fetch blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  return { blog, loading, error };
};
