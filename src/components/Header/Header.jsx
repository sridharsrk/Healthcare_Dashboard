import "./Header.css";

// This are the React Icons used in the Header component
import { IoSearch } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";

function Header() {
  return (
    <header>
      <div className="logo">
        <p>Health<span>care.</span></p>
      </div>

      <div className="searchBar-notifications">
        <div className="searchBar">
          <IoSearch />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="notifications">
          <IoMdNotifications />
        </div>
      </div>

      <div className="userProfile-createButton">
        <button className="userProfile">
          <img width={"35px"} height={"35px"} src="im.png" alt="icon" />
        </button>

        <button className="createButton">
          +
        </button>
      </div>
    </header>
  );
}

export default Header;