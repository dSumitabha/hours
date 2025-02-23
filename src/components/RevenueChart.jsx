import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { useState } from "react";


ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const RevenueChart = () => {
  
  const [timeFrame, setTimeFrame] = useState("week"); 

  const data = {
    labels: ["19 June", "20 June", "21 June", "22 June", "23 June", "24 June", "25 June"],
    datasets: [
      {
        label: "Revenue (€)",
        data: [1000, 2500, 2000, 3500, 5000, 6000, 6500], 
        borderColor: "#14b8a6", 
        backgroundColor: "rgba(20, 184, 166, 0.2)", 
        borderWidth: 2,
        pointRadius: 5,
        tension: 0.3, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, 
      tooltip: { enabled: true }, 
    },
    scales: {
      x: { grid: { display: false } }, 
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/*  Month/Week toggle at Header  */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Total Revenue</h2>
        <div className="space-x-2">
          <button className={`px-3 py-1 text-sm rounded ${timeFrame === "month" ? "bg-gray-800 text-white" : "bg-gray-200"}`} onClick={() => setTimeFrame("month")}>Month</button>
          <button className={`px-3 py-1 text-sm rounded ${timeFrame === "week" ? "bg-gray-800 text-white" : "bg-gray-200"}`} onClick={() => setTimeFrame("week")}>Week</button>
        </div>
      </div>

      {/* Main Revenue Chart */}
      <Line data={data} options={options} />
    </div>
  );
};

export default RevenueChart;
