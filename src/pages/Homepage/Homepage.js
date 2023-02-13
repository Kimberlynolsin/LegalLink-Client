import { useState } from "react";
import "react-sweet-progress/lib/style.css";
import info from "../../assets/icons/help.png";

const Homepage = ({ cardDetails }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const toggleModal = () => {
    setOpenDialog(!openDialog);
  };
  const cards = cardDetails.map((element) => {
    return (
      <div className="homepage__progress-work" key={element.id}>
        <h3 className="homepage__progress-work__title">{element.title}</h3>
        <p className="homepage__status">Status: {element.status}</p>
      </div>
    );
  });

  return (
    <section className="homepage">
      <h2 className="homepage__title">HOME</h2>
      <div className="homepage__box">
        <p className="homepage__statement">
          Easing your immigration journey with transparent updates, prompt
          support, and accessible history.
        </p>
      </div>
      <h3 className="homepage__subtitle">Your application progress</h3>
      <div className="homepage__content">{cards}</div>
      <div className="homepage__estimate">
        <div className="homepage__estimate__box">
          <h3 className="homepage__estimate__title">
            ESTIMATED COURT CASE DATE:
          </h3>
          <div className="homepage__estimate__img">
            <img
              className="homepage__estimate__info"
              src={info}
              onClick={toggleModal}
              alt="help"
            ></img>
          </div>
        </div>
        <p className="homepage__estimate__details">To be determined</p>
        {openDialog && (
          <p className="homepage__estimate__popup">
            Please be advised that you will receive an official notification in
            your mailbox regarding the scheduled date of your court hearing,
            prior to the actual proceedings.
          </p>
        )}
      </div>
    </section>
  );
};

export default Homepage;
