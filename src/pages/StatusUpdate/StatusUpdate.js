import { useState } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import help from "../../assets/icons/help.png";
const StatusUpdate = () => {
  const [openModal, setopenModal] = useState(false);
  const percentage = 50;

  const toggleModal = () => {
    setopenModal(!openModal);
  };
  return (
    <section className="status">
      <h2 className="homepage__title">STATUS UPDATE</h2>

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
          <Progress
            type="circle"
            percent={30}
            theme={{
              active: {
                color: "#6F8565",
                trailColor: "#efefef",
              },
            }}
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
};

export default StatusUpdate;
