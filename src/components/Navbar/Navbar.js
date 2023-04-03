// import home from "../../assets/icons/home.png";
// import ticket from "../../assets/icons/ticket.png";
// import history from "../../assets/icons/history.png";
// import update from "../../assets/icons/status.png";
// import { Link } from "react-router-dom";
import { useState } from "react";
import menu from "../../assets/icons/menu.png";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">
      <Menu
        customBurgerIcon={<img src={menu} alt="hamburger menu"></img>}
        right
      >
        <Link id="home" className="menu-item" to="/">
          Home
        </Link>
        <Link id="ticket" className="menu-item" to="/ticket">
          Ticket
        </Link>
        <Link id="contact" className="menu-item" to="/history">
          History
        </Link>
        <Link id="profile" className="menu-item" to="/profile">
          Profile
        </Link>
      </Menu>
    </div>
  );
}

export default Navigation;
