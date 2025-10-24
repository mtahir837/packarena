// Blog Schema - This defines the structure of blog documents in MongoDB
export const BlogSchema = {
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  blog_list_image: { type: String, required: true },
  blog_detail_image: { type: String, required: true },
  tags: [{ type: String }],
  readTime: { type: String, default: '5 min read' },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
};

// Helper function to create a blog document
export function createBlogDocument(data) {
  return {
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 0,
    likes: 0,
    published: true
  };
}

// Helper function to validate blog data
export function validateBlogData(data) {
  const required = ['title', 'slug', 'content', 'category', 'author', 'blog_list_image', 'blog_detail_image'];
  const missing = required.filter(field => !data[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }
  
  return true;
}
