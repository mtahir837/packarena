# Blog API Setup Guide

## 🚀 **What We've Built**

✅ **MongoDB Connection** - Native MongoDB driver with connection pooling
✅ **RESTful APIs** - Full CRUD operations for blogs
✅ **Dynamic Blog System** - No more static data, everything comes from database
✅ **Search & Filtering** - Category, search, and pagination support
✅ **View Tracking** - Automatic view count increment
✅ **Soft Delete** - Blogs are marked as unpublished instead of hard deleted

## 📋 **API Endpoints**

### **GET /api/blogs** - Get All Blogs
- **Query Parameters:**
  - `category` - Filter by category
  - `search` - Search in title, content, and tags
  - `limit` - Number of blogs per page
  - `page` - Page number for pagination

**Example:**
```bash
GET /api/blogs?category=Techtrek%20News&limit=5&page=1
```

### **POST /api/blogs** - Create New Blog
**Body:**
```json
{
  "title": "Your Blog Title",
  "slug": "your-blog-slug",
  "content": "<h1>Your HTML content</h1>",
  "excerpt": "Short description...",
  "category": "Category Name",
  "author": "Author Name",
  "blog_list_image": "/path/to/image.png",
  "blog_detail_image": "/path/to/detail-image.png",
  "tags": ["tag1", "tag2"]
}
```

### **GET /api/blogs/[slug]** - Get Single Blog
- Automatically increments view count
- Returns full blog content

### **PUT /api/blogs/[slug]** - Update Blog
- Update any blog fields
- Automatically updates `updatedAt` timestamp

### **DELETE /api/blogs/[slug]** - Delete Blog
- Soft delete (marks as unpublished)
- Blog remains in database but won't show in public APIs

### **POST /api/blogs/seed** - Seed Sample Data
- Populates database with sample blogs
- Useful for testing and initial setup

## 🗄️ **Database Setup**

### **1. Install MongoDB**
```bash
# Local MongoDB
npm install mongodb

# Or use MongoDB Atlas (cloud)
# No installation needed, just get connection string
```

### **2. Environment Variables**
Create `.env.local` file:
```env
MONGODB_URI=mongodb://localhost:27017/techtrek
MONGODB_DB=techtrek
```

### **3. Start MongoDB**
```bash
# Local MongoDB
mongod

# Or use MongoDB Atlas
# Get connection string from dashboard
```

### **4. Seed Initial Data**
```bash
POST /api/blogs/seed
```

## 🔧 **Usage Examples**

### **Frontend Components**
Your existing components now work with real APIs:

```jsx
// BlogList component automatically fetches from /api/blogs
const { blogs, loading, error } = useBlogs();

// BlogDetail component fetches from /api/blogs/[slug]
const { blog, loading, error } = useBlog(slug);
```

### **Create New Blog**
```javascript
const newBlog = {
  title: "My New Blog",
  slug: "my-new-blog",
  content: "<h1>Content here</h1>",
  excerpt: "Short description",
  category: "Technology",
  author: "Your Name",
  blog_list_image: "/images/blog/new.png",
  blog_detail_image: "/images/blogDetail/new.png",
  tags: ["tech", "web"]
};

const response = await fetch('/api/blogs', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newBlog)
});
```

### **Search Blogs**
```javascript
const response = await fetch('/api/blogs?search=AI&category=Technology');
const result = await response.json();
```

## 🎯 **Next Steps**

1. **Set up MongoDB** (local or Atlas)
2. **Create `.env.local`** with your connection string
3. **Seed initial data** using `/api/blogs/seed`
4. **Test your APIs** - they're now fully functional!
5. **Add authentication** if needed (admin panel)
6. **Deploy to production** with your MongoDB service

## 🚨 **Important Notes**

- **No more static data** - Everything comes from database
- **Automatic view tracking** - Each blog visit increments counter
- **Soft delete** - Blogs are never permanently deleted
- **Search ready** - Full-text search across title, content, and tags
- **Production ready** - Use MongoDB Atlas or your preferred MongoDB service

Your blog system is now **fully dynamic** and **database-driven**! 🎉
