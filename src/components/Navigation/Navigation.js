import home from "../../assets/icons/home.png";
import ticket from "../../assets/icons/ticket.png";
import history from "../../assets/icons/history.png";
import update from "../../assets/icons/update.png";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <section className="nav">
      <div className="nav__container">
        <ul className="nav__list">
          <li className="nav__list__item nav__list__item--home">
            <Link to="/">
              <img
                src={home}
                alt="home nav"
                className="nav__list__item__icons"
              ></img>
            </Link>
          </li>{" "}
          <li className="nav__list__item nav__list__item--status">
            <Link to="/status">
              <img
                src={update}
                alt="ticket nav"
                className="nav__list__item__icons"
              ></img>
            </Link>
          </li>
          <li className="nav__list__item nav__list__item--ticket">
            <Link to="ticket">
              <img
                src={ticket}
                alt="ticket nav"
                className="nav__list__item__icons"
              ></img>
            </Link>
          </li>
          <li className="nav__list__item nav__list__item--history">
            <Link to="/history">
              <img
                src={history}
                alt="history nav"
                className="nav__list__item__icons"
              ></img>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navigation;
