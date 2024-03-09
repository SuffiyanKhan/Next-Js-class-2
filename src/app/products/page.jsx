

"use client"

import React, {  useState } from 'react';
function ProductsPage() {
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setData(jsonData.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  fetchData()
  return (
    <div>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <h3>Products</h3>
          {data.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </>
      )}
    </div>
  )
}

export default ProductsPage