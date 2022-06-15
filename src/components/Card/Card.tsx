import React from 'react';

import s from './card.module.scss';

interface CardProps {
  children: any;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <article className={`${s.card} ${className}`}>{children}</article>;
};

export default Card;
