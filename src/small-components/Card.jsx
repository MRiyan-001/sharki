import React from "react";

const Card = (props) => {
  return (
    <div className="card h-[350px] w-[23%] flex flex-col gap-[0.2rem] relative">
      {/* Sale Tag  */}
      <div className="w-full flex items-center justify-end p-3 absolute">
        <div className="px-1 font-mono font-semibold text-[1rem] text-white bg-red-500">
         {props.sale}
        </div>
      </div>
      {/* ------------------------------- */}

      <img src={props.image} alt="Product" />
      <h2 className="text-[0.9rem] font-semibold">{props.name}</h2>
      <p className="font-mono text-[0.8rem]">{props.price}</p>
    </div>
  );
};

export default Card;
