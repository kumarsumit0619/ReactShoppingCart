import React,{ useState } from 'react';

export default function Products({ addToCart }) {
  const [products] = useState([
    {
      name: 'King Size Berger',
      cost: '$2.99',
      image: 'https://townsquare.media/site/675/files/2017/09/Hamburger.jpg?w=980&q=75'
    },
    {
      name: 'Oven Pizza',
      cost: '$10.99',
      image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg'
    },
   ]);

  return (
    <>
      <h1>Products</h1>
      <div className="products">
            {products.map((product, idx) => (
                  <div className="product" key={idx}>
                    <h3>{product.name}</h3>
                    <h4>{product.cost}</h4>
                    <img src={product.image} alt={product.name} /><br/>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                  </div>
            ))}
      </div>
    </>
  )
}
