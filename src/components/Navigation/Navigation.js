import home from "../../assets/icons/home.png";
import ticket from "../../assets/icons/ticket.png";
import history from "../../assets/icons/history.png";

function Navigation() {
  return (
    <section className="nav">
      <div className="nav__container">
        <ul className="nav__list">
          <li className="nav__list__item nav__list__item--home">
            <img src={home} alt="home nav" className='nav__list__item__icons'></img>
          </li>
          <li className="nav__list__item nav__list__item--ticket">
            <img src={ticket} alt="home nav" className='nav__list__item__icons'></img>
          </li>
          <li className="nav__list__item nav__list__item--history">
            <img src={history} alt="home nav" className='nav__list__item__icons'></img>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navigation;
