import React from 'react';
import './CardSection.css';

const CardSection = () => {
  const cards = [
    {
      title: 'Pizza',
      description: 'Delicious cheese pizza with fresh ingredients and a crispy crust.',
      author: 'Gladis Lennon',
      role: 'Head of SEO',
    },
    {
      title: 'Burger',
      description: 'Juicy beef burger with lettuce, tomato, and our special sauce.',
      author: 'Gladis Lennon',
      role: 'Head of SEO',
    },
    {
      title: 'Pasta',
      description: 'Creamy Alfredo pasta with grilled chicken and fresh herbs.',
      author: 'Gladis Lennon',
      role: 'Head of SEO',
    },
  ];

  return (
    <section className="card-section">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <p>{card.description}</p>
          <div className="card-footer">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="author"
              className="author-img"
            />
            <div>
              <p className="author-name">{card.author}</p>
              <p className="author-role">{card.role}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardSection;
