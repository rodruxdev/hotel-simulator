import React from "react";

const ListItem = ({ field, value }) => {
  return (
    <div className="w-full my-3  flex justify-between items-center">
      <p className="text-base opacity-90">{field}:</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
};

export default ListItem;
