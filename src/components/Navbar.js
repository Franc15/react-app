const Nav = () => {
  return (
    <div className="w-full min-h-screen font-sans text-gray-900">
      <nav className="flex items-center justify-between px-24 py-8 max-w-screen-xl mx-auto">
        <a href="#" className="text-4xl font-bold tracking-wide">
          Marz
        </a>
        <ul className="flex items-center space-x-8">
          <li className="texl font-medium group">
            <a href="#">Home</a>
          </li>
          <li className="texl font-medium group">
            <a href="#">Services</a>
          </li>
          <li className="texl font-medium group">
            <a href="#">Pricing</a>
          </li>
        </ul>
        <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
      </nav>
    </div>
  );
};

export default Nav;
