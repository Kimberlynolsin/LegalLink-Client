import { useState } from "react";
import { Link } from "react-router-dom";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Status from "../../components/Status/Status";
import more from "../../assets/icons/more.png";

const StatusUpdate = ({ cardDetails }) => {
  const [statusWork, setStatusWork] = useState(false);
  const [statusFinalcial, setStatusFinalcial] = useState(false);
  const [statusTravel, setStatusTravel] = useState(false);

  const handleWork = (e) => {
    e.preventDefault();
    setStatusWork(!statusWork);
  };
  const handleFinancial = (e) => {
    e.preventDefault();
    setStatusFinalcial(!statusFinalcial);
  };
  const handleTravel = (e) => {
    e.preventDefault();
    setStatusTravel(!statusTravel);
  };

  return (
    <section className="status">
      <h2 className="homepage__title">STATUS UPDATE</h2>
      <Status />
      <div className="status__options">
        <div className="status__application">
          <div className="status__title-info">
            <p> WORK PERMIT</p>
            <img src={more} alt="expand" onClick={handleWork}></img>
          </div>
          {statusWork && (
            <div className="status__card">
              <h3 className="status__card__title">MORE INFORMATION:</h3>
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
                <p className="status__card__details">
                  Who can get a work permit
                </p>
              </Link>
            </div>
          )}
        </div>
        <div className="status__application">
          <div className="status__title-info">
            <p>FINANCIAL AID</p>
            <img src={more} alt="expand" onClick={handleFinancial}></img>
          </div>
          {statusFinalcial && (
            <div className="status__card">
              <h3 className="status__card__title">MORE INFORMATION:</h3>
              <Link
                to="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/financial.html"
                target="_blank"
              >
                <p className="status__card__details">Loan Programs</p>
              </Link>
              <Link
                to="https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/financial.html"
                target="_blank"
              >
                <p className="status__card__details">
                 Loan Repayment
                </p>
              </Link>
            </div>
          )}
        </div>
        <div className="status__application">
          <div className="status__title-info">
            <p>TRAVEL DOCUMENT</p>
            <img src={more} alt="expand" onClick={handleTravel}></img>
          </div>
          {statusTravel && (
            <div className="status__card">
              <h3 className="status__card__title">MORE INFORMATION:</h3>
              <Link
                to="https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/pr-travel-document/how-to-apply.html"
                target="_blank"
              >
                <p className="status__card__details">Travel document application fees</p>
              </Link>
              <Link
                to="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices.html"
                target="_blank"
              >
                <p className="status__card__details">
                  Change of address
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StatusUpdate;
