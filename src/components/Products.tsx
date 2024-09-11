import React from 'react';
import appleImg from '../assets/apple.jpg';
import orangeImg from '../assets/orange.jpg';
import './Products.css';

const Products: React.FC = () => {
  const items = [
    { name: 'Świeże Jabłka', description: 'Najwyższej jakości jabłka', img: appleImg },
    { name: 'Pomarańcze', description: 'Soczyste pomarańcze', img: orangeImg }
  ];

  return (
    <section className="products" id="products">
      <h2>Nasze Produkty</h2>
      <div className="product-grid">
        {items.map(item => (
          <div className="product-item" key={item.name}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;