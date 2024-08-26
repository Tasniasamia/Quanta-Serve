"use client";
const Sidebar = () => {
  return (
    <header
      className="bg-white z-50 lg:static absolute left-0 top-0 w-[270px] lg:w-[270px] min-h-screen overflow-x-hidden transition-all duration-300 sidebar-header"
      style={{ width: '270px' }} // Set initial width
    >
      <ul className="list-none">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        {/* Add more items as needed */}
      </ul>
    </header>
  );
};

export default Sidebar;
