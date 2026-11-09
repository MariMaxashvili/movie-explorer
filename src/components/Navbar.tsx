import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/watchlist">WatchList</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
}

export default Navbar;
