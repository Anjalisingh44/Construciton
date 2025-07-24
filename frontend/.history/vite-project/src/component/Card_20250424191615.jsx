import React from "react";

const Card = () => {
  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "25+", label: "Expert Team" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-7 bg-gray-50">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md px-5 py-3 text-center w-64"
        >
          <h2 className="text-3xl font-bold">
            <span className="text-black">
              {stat.value.replace(/[+%]/, "")}
            </span>
            <span className="text-blue-600">
              {stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""}
            </span>
          </h2>
          <p className="text-gray-600 mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
