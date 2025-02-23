import Navbar from "./components/Navbar";
import StatsCards from "./components/StatsCards";
import RevenueChart from "./components/RevenueChart";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Main Dashboard Layout */}
      <div className="w-11/12 mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 border">
        {/* Left Section (Stats, Charts, Budget Status) */}
        <div className="lg:col-span-10 space-y-6">
            <StatsCards />
          

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border">
            <RevenueChart />

          </div>

          {/* Budget Status Section */}
          
        </div>

        {/* Right Section (Team Mood) */}
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
