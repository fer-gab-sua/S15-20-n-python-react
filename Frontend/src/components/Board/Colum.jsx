import React from 'react';

const Colum = ({ title, children }) => {
  return (
    <div className="m-4 p-4 rounded-lg w-72 bg-boardbg">
      <h2 className="text-lg font-bold text-columtext">{title}</h2>
      {children}
    </div>
  );
}

export default Colum;
