// "use client"

// import React from 'react'

//  const getData = async()=>{
//     const fetchData = await fetch('https://dummyjson.com/products')

//     if(!fetchData.ok){
//         console.log('error')
//     }

//     return fetchData.json()

//  }

// async function page() {  
//         const data = await getData()
//         console.log(data.products)
//   return (
//     <div>
//         {
//          data.products.map(data =>   
//               {
//                 return <p>{data.title}</p>
//               }
//         )
//         }
//         hi
//     </div>
//   )
// }

// export default page

"use client"

import React, {  useState } from 'react';
  
const Page = () => {
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
//   useEffect(() => {
//     fetchData();
//   }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
          <p>hi</p>
        </>
      )}
    </div>
  );
};

export default Page;
