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
    { name: 'Słodycze', description: 'Turbo słodkie', img: sweets },
    { name: 'Makarony, cukier, ryż, kasze', description: 'Produkty sypkie', img: pasta },
    { name: 'Kawy, herbaty', description: 'Najlepsze na świecie', img: coffee },
    { name: 'Puszki i słoiki', description: 'Na ciężkie czasy', img: jars },
    { name: 'Soki, napoje, woda', description: 'Turbo słodkie ale w płynie', img: drinks },
    { name: 'Owoce i warzywa', description: 'Najświeższe w okolicy', img: groceries },
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