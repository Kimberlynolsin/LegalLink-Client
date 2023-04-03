import { useState } from "react";
import "react-sweet-progress/lib/style.css";
import info from "../../assets/icons/help.png";

const Landing = ({ status }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const toggleModal = () => {
    setOpenDialog(!openDialog);
  };

  const cards =
    status &&
    status.map((element) => {
      return (
        <>
          {/* <hr></hr> */}
          <div className="landing__container">
          <div className="landing__progress-work" key={element.id}>
            <h3 className="landing__progress-work__title">{element.title}</h3>
            <p className="landing__status">Status: {element.status}</p>
          </div>
          <div className="landing__solution">
            <p className="landing__resolution">{element.resolution}</p>
            </div>
            </div>
          <div>
            <hr></hr>
          </div>
        </>
      );
    });

  return (
    <section className="landing">
      <h2 className="landing__title">HOME</h2>
      {/* <div className="landing__box">
        <p className="landing__statement">
          Easing your immigration journey with transparent updates, prompt
          support, and accessible history.
        </p>
      </div> */}
      {/* <h3 className="landing__subtitle">Your application progress</h3> */}
      <div className="landing__content">{cards}</div>
      <div className="landing__estimate">
        <div className="landing__estimate__box">
          <h3 className="landing__estimate__title">
            ESTIMATED COURT CASE DATE:
          </h3>
          <div className="landing__estimate__img">
            <img
              className="landing__estimate__info"
              src={info}
              onClick={toggleModal}
              alt="help"
            ></img>
          </div>
        </div>
        <p className="landing__estimate__details">To be determined</p>
        {openDialog && (
          <p className="landing__estimate__popup">
            Please be advised that you will receive an official notification in
            your mailbox regarding the scheduled date of your court hearing,
            prior to the actual proceedings.
          </p>
        )}
      </div>
    </section>
  );
};

export default Landing;
