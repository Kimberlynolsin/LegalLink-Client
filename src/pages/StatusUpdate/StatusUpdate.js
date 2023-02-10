import { useState } from "react";
import { Link } from "react-router-dom";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import help from "../../assets/icons/help.png";
import Status from "../../components/Status/Status";
import add from '../../assets/icons/add-white.png'

const StatusUpdate = ({ cardDetails }) => {
  const [openInfo, setOpenInfo] = useState(false);

  const info = (e) => {
    e.preventDefault();
    setOpenInfo(!openInfo);
  };

  return (
    <section className="status">
      <h2 className="homepage__title">STATUS UPDATE</h2>
      <Status />
      <div className="status__options">
        <div className="status__application">
          <p> WORK PERMIT</p>
          <img src={add}></img>
        </div>
        <div className="status__application">
          <p> FINANCIAL AID</p>
          <img src={add}></img>
        </div>
        <div className="status__application">
          <p> TRAVEL DOCUMENT</p>
          <img src={add}></img>
        </div>
      </div>
      <form className="status__form" onClick={info}>
        <button className="status__btn">MORE</button>
      </form>
      {openInfo && (
        <div className="status__card">
          <h3 className="status__card__title">RELATED:</h3>
          <Link
            to="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/claim-protection-inside-canada/work-study.html#extend_permit"
            target="_blank"
          >
            <p className="status__card__details">Work permit extension</p>
          </Link>
          <Link
            to="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/claim-protection-inside-canada/work-study.html"
            target="_blank"
          >
            <p className="status__card__details">Who can get a work permit</p>
          </Link>
        </div>
      )}
    </section>
  );
};

export default StatusUpdate;
