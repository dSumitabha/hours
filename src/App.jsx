import Navbar from "./components/Navbar";
import StatsCards from "./components/StatsCards";
import RevenueChart from "./components/RevenueChart";
import BudgetChart from "./components/BudgetChart";
import TeamMood from "./components/TeamMood";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Main Dashboard Layout */}
      <div className="w-11/12 mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6 border">
        {/* Left Section (Stats, Charts, Budget Status) */}
        <div className="lg:col-span-9 space-y-6">
            <StatsCards />
          
          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border">
            <RevenueChart />
            <BudgetChart />
          </div>

          {/* Budget Status Section */}
          
        </div>

        {/* Right Section (Team Mood) */}
        <div className="col-span-12 md:col-span-3 border">
          <TeamMood />
        </div>
      </div>
    </div>
  );
};

export default App;
