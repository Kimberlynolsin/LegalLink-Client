import { Link } from "react-router-dom";
import Nav from '../Navbar/Navbar'
import logo from '../../assets/logo/ll-logo.png'

function PageHeader() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} className="header__logo"></img>
        </Link>
        <Nav/>
      </header>
    </>
  );
}

export default PageHeader;
