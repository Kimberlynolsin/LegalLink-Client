import home from "../../assets/icons/home.png";
import ticket from "../../assets/icons/ticket.png";
import history from "../../assets/icons/history.png";
import update from "../../assets/icons/status.png";
import { Link } from "react-router-dom";

function Navigation() {
  const icons = [
    { id: 1, icon: home, alt: "homepage", to: "/" },
    { id: 4, icon: update, alt: "history page", to: "/status" },
    { id: 2, icon: ticket, alt: "ticket page", to: "/ticket" },
    { id: 3, icon: history, alt: "update page", to: "/history" },
  ];

  const navbar = icons.map((e) => {
    return (
      <Link to={e.to} key={e.id}>
        <div className="nav-container">
          <img src={e.icon} alt={e.alt} className="nav-container__icons"></img>
        </div>
      </Link>
    );
  });

  return (
    <section className="footer">
      <div className="nav">{navbar}</div>
    </section>
  );
}

export default Navigation;
