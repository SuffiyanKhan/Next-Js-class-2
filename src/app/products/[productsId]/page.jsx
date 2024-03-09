// import React  from 'react'
// import { notFound } from 'next/navigation'

// export async function generateMetadata({ params }) {
//     console.log(params)
//     return {
//       title: `${data.title}`,
//     }
//   }
// async function ProductsId({params}) {
//     if(params.productsId > 100){
//         notFound()
//     } 
// const fetchData = async () => {
//     try {
//         const data = await fetch(`https://dummyjson.com/products/${params.productsId}`)
//         if(!data.ok){
//             notFound()
//         }
//         return data.json()
//     } catch (error) {
//         console.log(error)        
//     }
// }


// const data = await fetchData()
     
         
//     console.log(data)
//     // console.log(params.productsId)
//   return (
 
//     <>
//         <div className="card" style={{border : '0.0975rem solid lightgrey', width: '350px'}}>
//         <h3> {data.title}</h3>
//         <img style={{height : '200px'}} src={data.images[0]} alt="" />
//         <p>description : {data.description}</p>
//         <p>price : {data. price}</p>
//         <p>discountPercentage : {data. discountPercentage}</p>
//         <p>brand : {data. brand}</p>
//         </div>
//     </>
//   )
// }

// export default ProductsId
import React from 'react';
import { notFound } from 'next/navigation';

async function fetchData(productsId) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productsId}`);
    if (!response.ok) {
      notFound();
    }
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function generateMetadata({ params }) {
  try {
    const data = await fetchData(params.productsId);
    return {
      title: data.title,
      description : data.description
    };
  } catch (error) {
    console.error(error);
  }
}

const ProductsId = ({ params }) => {
  if (params.productsId > 100) {
    notFound();
  }

  const fetchDataAndRender = async () => {
    try {
      const data = await fetchData(params.productsId);

      return (
        <>
          <div className="card" style={{ border: '0.0975rem solid lightgrey', width: '350px' }}>
            <h3>{data.title}</h3>
            <img style={{ height: '200px' }} src={data.images[0]} alt="" />
            <p>description: {data.description}</p>
            <p>price: {data.price}</p>
            <p>discountPercentage: {data.discountPercentage}</p>
            <p>brand: {data.brand}</p>
          </div>
        </>
      );
    } catch (error) {
      console.error(error);
    }
  };

  return fetchDataAndRender();
};

export { generateMetadata };
export default ProductsId;
