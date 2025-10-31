import { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/config/api';

// Hook to fetch all categories
export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const apiUrl = `${API_BASE_URL}/get-all-category`;
       
        
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        console.log('Response Status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
      
        let categoriesArray = [];
        
        if (Array.isArray(result)) {
          categoriesArray = result;
        } else if (Array.isArray(result.categories)) {
          categoriesArray = result.categories;
        } else if (Array.isArray(result.data)) {
          categoriesArray = result.data;
        }
  
        
        if (categoriesArray.length > 0) {
          setCategories(categoriesArray);
         
        } else {
          setError('No categories found');
          setCategories([]);
        }
      } catch (err) {
       
        
        if (err.message.includes('Failed to fetch')) {
          setError('Cannot connect to backend. Enable CORS in your backend server.');
        } else {
          setError(`Failed to fetch categories: ${err.message}`);
        }
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

// Hook to fetch a single category by ID with products
// export const useCategory = (id) => {
//   const [category, setCategory] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!id) return;

//     const fetchCategory = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${API_BASE_URL}/category/${id}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const result = await response.json();
//         console.log('Single Category Response:', result);
        
//         if (result.message === 'Category fetched successfully') {
//           setCategory(result.category);
//         } else {
//           setError(result.message);
//         }
//       } catch (err) {
//         console.error('Error fetching category:', err);
//         setError('Failed to fetch category');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategory();
//   }, [id]);

//   return { category, loading, error };
// };

