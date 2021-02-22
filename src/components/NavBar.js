import React from "react";
import { Link, useHistory } from "react-router-dom";

const NavBar = ({ userData, setUserData, setToken }) => {
  const history = useHistory();
  const logOutHere = () => {
    localStorage.clear();
    setUserData({});
    setToken("");
    history.push("/");
  };

  return (
    <nav className="navbar">
      {userData._id ? (
        ""
      ) : (
        <div className="navlinks">
          <Link to="/" className="nav-link">
            {" "}
            Home{" "}
          </Link>
        </div>
      )}
      <div className="navlinks">
        <Link to="/posts" className="nav-link">
          {" "}
          Posts{" "}
        </Link>
      </div>
      {userData._id ? (
        <div className="navlinks">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </div>
      ) : (
        ""
      )}
      {userData._id ? (
        <div className="navlinks">
          <Link to="/posts/createpost" className="nav-link">
            Create Posts
          </Link>
        </div>
      ) : (
        ""
      )}

      <div className="navlinks">
        {userData._id ? (
          <Link to="/" className="nav-link" onClick={() => logOutHere()}>
            Logout
          </Link>
        ) : ( 
          <Link to="/login" className="nav-link">
            Login/Register
          </Link>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
