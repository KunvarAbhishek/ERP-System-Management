import React from 'react';
import './ProductTableGraph.css';

const Updates = () => {
  const categories = [
    'Electronics',
    'Clothing',
    'Home',
    'Beauty',
    'Toys',
    'Kids',
    'Sports',
    'Grocery',
    'Pet Supplies',
    'Health'
  ];

  const generateRandomPercentage = () => {
    return {
      percentage: Math.floor(Math.random() * 50) + 50, // Generate a random number between 50 and 100
      color: `rgb(${Math.floor(Math.random() * 156) + 100}, ${Math.floor(Math.random() * 156) + 100}, ${Math.floor(Math.random() * 156) + 100})` // Generate a random bright color
    };
  };

  return (
    <div className="Updates">
      {categories.map((category) => {
        const { percentage, color } = generateRandomPercentage();
        return (
          <div className="update" key={category}>
            <div className="category-name">{category}</div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
