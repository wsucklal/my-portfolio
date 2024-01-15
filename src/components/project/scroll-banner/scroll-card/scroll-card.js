import React from 'react';
import './scroll-card.scss';

const ScrollCard = (props) => (
  <a className="ScrollCard" data-testid="ScrollCard" href={props.url} target="_blank" rel="noreferrer">
    <div className="scroll-card-ctnt scroll-card-header">
      <div className="name">{props.name}</div>
    </div>
    <div className="scroll-card-ctnt scroll-card-info">
      <div className='createdAt'>{props.createdAt.slice(0,  10)}</div> <div className='language'>{props.language}</div>
    </div>
  </a>
);

ScrollCard.defaultProps = {};

export default ScrollCard;
