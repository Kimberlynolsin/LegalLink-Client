import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import help from "../../assets/icons/help.png";
import close from "../../assets/icons/close.png";

function Homepage() {
  const [openModal, setopenModal] = useState(false);
  const percentage = 50;

  const toggleModal = () => {
    setopenModal(!openModal);
  };

  return (
    <section className="status">
      <h2 className="status__title">HOME</h2>
      <div className="status__box">
        <p className="status__statement">
          Easing your immigration journey with transparent updates, prompt
          support, and accessible history.
        </p>
      </div>
      <div className="status__wrapper">
        <h3 className="status__subtitle">WORK PERMIT</h3>
        <img
          src={help}
          alt="help"
          className="status__help"
          onClick={toggleModal}
        ></img>
      </div>
      <div className="status__progress">
        <div className="status__progress-container">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "white",
              trailColor: "gray",
              textSize: "16px",
            })}
          />
        </div>
      </div>
      {openModal && (
        <div className="status__disclaimer">
          <p className="status__info">
            Please note that the progress bar is an estimate only and is
            subjected to change.
          </p>
        </div>
      )}
    </section>
  );
}

export default Homepage;
