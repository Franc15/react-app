function Navbar() {
  return (
    <nav className="md:flex justify-between m-2">
      <h2 className="text-2xl text-green-600 p-2">Codeninjas</h2>
      <ul className="md:flex">
        <li className="p-2">Home</li>
        <li className="p-2">About</li>
        <button className="bg-red-300 rounded-sm text-white p-2 hover:bg-red-400 dark:bg-green-400">
          Contact
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
