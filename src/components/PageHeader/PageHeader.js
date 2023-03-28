import { Link } from "react-router-dom";
import Nav from '../Navbar/Navbar'

function PageHeader() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <h1 className="header__title">LegalLink</h1>
        </Link>
        <Nav/>
      </header>
    </>
  );
}

export default PageHeader;
