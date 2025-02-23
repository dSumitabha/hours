import Navbar from "./components/Navbar";
import StatsCards from "./components/StatsCards";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Main Dashboard Layout */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Section (Stats, Charts, Budget Status) */}
        <div className="lg:col-span-3 space-y-6">
            <StatsCards />
          

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
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
