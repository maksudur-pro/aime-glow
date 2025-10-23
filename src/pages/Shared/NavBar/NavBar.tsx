import { Link } from "react-router-dom";
import logo from "/src/assets/logo-black.png";

const navOptions = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "Contact", to: "/contact" },
];

const NavBar = () => {
  const renderNavItems = () =>
    navOptions.map((item) => (
      <li key={item.name}>
        <Link
          to={item.to}
          className="nav-link relative inline-block text-[#7e7e7e] hover:text-black transition-colors">
          {item.name}
        </Link>
      </li>
    ));

  return (
    <nav className="navbar bg-base-100 shadow-sm">
      {/* --- Mobile Drawer --- */}
      <div className="navbar-start lg:hidden">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
        <label htmlFor="drawer-toggle" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        <div className="drawer-side">
          <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
          <ul className="bg-base-200 min-h-full w-40 p-4">
            {renderNavItems()}
          </ul>
        </div>
      </div>

      {/* --- Desktop Nav --- */}
      <div className="navbar-start hidden lg:flex">
        <ul className="flex items-center gap-6 px-2 uppercase">
          {renderNavItems()}
        </ul>
      </div>

      {/* --- Center Logo --- */}
      <div className="navbar-center">
        <Link to="/">
          <img
            src={logo}
            alt="Aime-Glow"
            className="w-32 h-12 object-contain"
          />
        </Link>
      </div>

      {/* --- Icons --- */}
      <div className="navbar-end px-2 flex items-center gap-4">
        {/* User Icon */}
        <button aria-label="User Profile" className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-700 hover:text-black">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 21a9 9 0 0115 0H4.5z"
            />
          </svg>
        </button>

        {/* Cart Icon */}
        <button aria-label="Shopping Cart" className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-700 hover:text-black">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
                 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 
                 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 
                 1 5.513 7.5h12.974c.576 0 1.059.435 
                 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 
                 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 
                 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        {/* Favorite Icon */}
        <button aria-label="Favorites" className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-700 hover:text-black">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.362 5.636a5.25 5.25 0 00-7.424 0L12 
                 7.574l-1.938-1.938a5.25 5.25 0 10-7.424 
                 7.424L12 21.75l9.362-9.362a5.25 5.25 
                 0 000-7.424z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
