import React from "react";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const BudgetStatusCard = ({ title, actualHours, soldHours, image, status, totalBudget }) => {
  const progress = (actualHours / soldHours) * 100;
  const isExceeded = actualHours > soldHours;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between relative">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xs text-gray-500">Total Budget : <span className="text-neutral-600">{totalBudget}h</span></p>
        <p className="text-sm text-gray-500">Actual: {actualHours}h / Sold: {soldHours}h</p>
        <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
          <div className="h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="mt-2 flex items-center gap-2">
          {isExceeded ? (
            <FaExclamationTriangle className="text-red-500" size={18} />
          ) : (
            <FaCheckCircle className="text-green-500" size={18} />
          )}
          <span className={`text-sm font-medium ${isExceeded ? "text-red-500" : "text-green-500"}`}>
            {isExceeded ? "Hours Exceeded" : "Perfect Hours"}
          </span>
        </div>
      </div>
      <img src={image} alt={title} className="w-12 h-12 absolute right-4 top-4 opacity-80" />
    </div>
  );
};

const BudgetStatus = () => {
  const budgetData = [
    { title: "Insurance App", totalBudget: 7000, actualHours: 50, soldHours: 40, image: "cactus.png", status: "exceeded" },
    { title: "Neo", totalBudget: 7000, actualHours: 35, soldHours: 40, image: "pineapple.png", status: "perfect" },
    { title: "VR Website", totalBudget: 7000, actualHours: 60, soldHours: 50, image: "cactus.png", status: "exceeded" },
    { title: "VR Website", totalBudget: 7000, actualHours: 38, soldHours: 40, image: "pineapple.png", status: "perfect" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {budgetData.map((item, index) => (
        <BudgetStatusCard key={index} {...item} />
      ))}
    </div>
  );
};

export default BudgetStatus;
