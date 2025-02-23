import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const BudgetChart = () => {
  // my dummy data assuming API data
  const data = {
    labels: ["Over Budget", "On Budget", "Under Budget"],
    datasets: [
      {
        data: [48, 33, 19], 
        backgroundColor: ["#14b8a6", "#3b82f6", "#ef4444"], 
        hoverBackgroundColor: ["#dc2626", "#2563eb", "#0d9488"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout : "65%",
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 10, }, 
      },
      tooltip: { enabled: true },
      datalabels: {
        color: "#fff", 
        font: { weight: "bold", size: 14 }, 
        formatter: (value) => `${value}%`, 
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Budget</h2>
      <div className="w-64 h-64 mx-auto">
      <Doughnut data={data} options={options} width={150} height={150} />
      </div>
    </div>
  );
};

export default BudgetChart;
