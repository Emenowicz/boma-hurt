import React from 'react';
import sweets from '../assets/sweets.jpeg';
import pasta from '../assets/pasta.jpeg';
import coffee from '../assets/coffee.jpeg';
import jars from '../assets/jars.jpeg';
import drinks from '../assets/drinks.jpeg';
import groceries from '../assets/groceries.jpeg';
import './Products.css';

const Products: React.FC = () => {
  const items = [
    { name: 'Owoce i warzywa', img: groceries },
    { name: 'Soki, napoje, woda', img: drinks },
    { name: 'Puszki i słoiki', img: jars },
    { name: 'Makarony, cukier, ryż, kasze', img: pasta },
    { name: 'Kawy, herbaty', img: coffee },
    { name: 'Słodycze', img: sweets },
  ];

  return (
    <section className="products" id="products">
      <h2>Nasze Produkty</h2>
      <div className="product-grid">
        {items.map(item => (
          <div className="product-item" key={item.name}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;