import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="[&>a]:underline [&>a]:mr-8 mb-6">
      <Link to="/home">Home</Link>
      <Link to="/not-found">Not found</Link>
    </header>
  );
}

export default Header;
