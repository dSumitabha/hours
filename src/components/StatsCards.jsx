import { FaChartBar, FaCheckCircle, FaSync, FaExclamationTriangle, FaUsers } from 'react-icons/fa';

const StatsCards = () => {
    // Data for the cards
    const stats = [
      { label: "Total Projects", value: 5, color: "bg-gray-200", icon: <FaChartBar /> },
      { label: "Completed", value: 1, color: "bg-green-200", icon: <FaCheckCircle /> },
      { label: "Ongoing", value: 3, color: "bg-blue-200", icon: <FaSync /> },
      { label: "Delayed", value: 1, color: "bg-red-200", icon: <FaExclamationTriangle /> },
      { label: "Employees", value: 5, color: "bg-white", icon: <FaUsers /> },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`aspect-square p-6 rounded-lg shadow-md ${stat.color} flex items-center justify-center space-x-4 relative`}>
            {/* Icon */}
            <span className={`absolute top-4 left-4 text-3xl ${stat.label === "Delayed" ? "text-red-700" : "text-teal-700"}`}>{stat.icon}</span>
            
            {/* Text Content */}
            <div className="text-center ">
              <h3 className={`text-4xl  font-bold ${stat.label === "Delayed" ? "text-red-700" : "text-teal-700"}`}>{stat.value}</h3>
              <p className={`text-sm text-gray-600 ${stat.label === "Delayed" ? "text-red-700" : "text-teal-700"}`}>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default StatsCards;
  