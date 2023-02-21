import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ pages }) => {
  return (
    <header className="header">
      <div className="header-container">
        {pages?.map((page) => {
          return <Link key={page.to} to={page.to}>{page.label}</Link>
        })}
      </div>
    </header>
  );
};

export default Header;
