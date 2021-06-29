import React from 'react';
import './topic.css';
import { Link } from 'react-router-dom';

function Topic({cards}) {
  
  const list = cards.map(card => {
    
    if (card.content) {
      return (

        <div>
          <div className='main-card'>
            <p className='topic-title more-div'>More Coming Soon 😄...</p>
          </div>
        </div>

      );
    }
    
    return (
      <Link className='link' to={ card.title === 'Linked List' ? 'linked' : `${card.title.toLowerCase()}`}>
        <div>
          <div className='main-card'>
            <div className="d-flex justify-content-between mb-3">
              <p className='topic-title my-auto'>{card.title}</p>
              <div className="button my-auto">Start</div>
            </div>
            <p className='definition'>{card.definition}</p>
          </div>
        </div>
      </Link>
    )
  });

  
  return (
    <div className='row row-cols-3 rdiv'>
      {list}
    </div>
  );
}

export default Topic;
