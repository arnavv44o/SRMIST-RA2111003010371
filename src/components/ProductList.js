import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const accessToken = "eyJhbGci0iJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEwODM1MjY4LCJpYXQi0jE3MTA4M\nzQ5NjgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjM3YmI0OTNjLTczZDMtNDdlYS04Njc1LTIxZjY2ZWY5YjczNSIsInN1\nYiI6InJhaHVsQGFiYy5lZHUifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjM3YmI0OTNjLTczZDMtNDd 1YS04Njc1LTIxZjY2ZWY5YjczNSIsImNsaWVudFNlY3JldCI6IkhWSVFCVmJxbVRHRW1hRUQiLCJvd25lck5hbWUi0iJSYW\nh1bCIsIm93bmVyRW1haWwiOiJyYWh1bEBhYmMuZWR1Iiwicm9sbE5vIjoiMSJ9.gmk2F736Z7q7EaIGDShc4oDKK1zWQ9Up\n3xQ-4Dbsu8A";
      
      const response = await fetch('/api/test/companies/AMZ/categories/Laptop/products/top=10&minPrice=1&maxPrice=10000', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  return (
    <div>
      <h1>Top 10 Laptops on AMZ</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <h3>{product.productName}</h3>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Discount: {product.discount}</p>
              <p>Availability: {product.availability}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
