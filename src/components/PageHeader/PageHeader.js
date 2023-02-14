import { Link } from "react-router-dom";

function PageHeader() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <h1 className="header__title">LegalLink</h1>
        </Link>
      </header>
    </>
  );
}

export default PageHeader;
