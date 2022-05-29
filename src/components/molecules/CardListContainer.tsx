import React from "react";

interface PropsCardListContainer {
  id: number;
  children: React.ReactNode;
}
const CardListContainer = ({ id, children }: PropsCardListContainer) => {
  return (
    <div className="text-light border-2 border-light px-3 py-6 rounded-lg flex flex-col gap-2 my-4 shadow-md shadow-light">
      <h4 className="border-b border-b-gold">ID : {id}</h4>
      <p>{children}</p>
    </div>
  );
};

export default CardListContainer;
