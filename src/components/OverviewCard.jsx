import React from 'react';

const OverviewCard = ({ title, count }) => {
  return (
    <div className="p-4 bg-green-50 border rounded shadow-md text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  );
};

export default OverviewCard;
