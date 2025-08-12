import React from "react";

const Card = () => {
  const stats = [
    {label: "Built with precision" },
    { label: "Client Satisfaction" },
    { label: "Built by the Best" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 py-10 text-center">
      {stats.map((stat, index) => (
        <div
          key={index}
          className=" bg-cyan-600 rounded-xl shadow-md  py-3 text-center w-64"
        >
          
          <p className="text-white  mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
