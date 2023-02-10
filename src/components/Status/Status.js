import { useState } from "react";
import { Progress } from "react-sweet-progress";
import help from "../../assets/icons/help.png";

const Status = () => {
  const [openModal, setopenModal] = useState(false);
  

  const toggleModal = () => {
    setopenModal(!openModal);
  };

  //if financial aid is selected, render its content 

  

  return (
    <>
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
    </>
  );
};

export default Status;
