import { MdNotificationsNone, MdNotificationsOff, MdArrowDropDown, } from 'react-icons/md';


const Navbar = () => {
    return (
      <nav className="bg-gray-900 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold tracking-wide"><span className="text-teal-500">H</span> O U R S</h1>
  
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 text-sm">
            {["Dashboard", "Projects", "Team", "Clients", "Time", "Reports"].map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-gray-300 transition">
                {item}
              </li>
            ))}
          </ul>
  
          {/* User Profile */}
          <div className='flex items-center space-x-4 '>
              <MdNotificationsNone size={24} className="text-neutral-300"/>
            <div className="flex items-center space-x-3">
                <img src="/cactus.png" alt="User Avatar" className="w-9 h-9 rounded-full" />
                <span className="text-sm text-neutral-300 font-medium">Mario <MdArrowDropDown size={24} className="text-neutral-300 inline"/> </span>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  