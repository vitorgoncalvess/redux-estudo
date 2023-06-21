import React from 'react';

const FeedItem = ({ photo }) => {
  const { title, src, acessos } = photo;
  return (
    <li className="grid grid-cols-[1fr,10rem,10rem] items-center">
      <img className="h-16 rounded-md" src={src} alt={title} />
      <h1 className="text-2xl font-semibold p-4">{title}</h1>
      <span className="text-end p-4 opacity-50 text-sm font-semibold">
        {acessos}
      </span>
    </li>
  );
};

export default FeedItem;
