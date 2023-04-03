import { useState } from "react";
import "react-sweet-progress/lib/style.css";
import info from "../../assets/icons/help.png";
import "react-sweet-progress/lib/style.css";
import { Progress } from "react-sweet-progress";

const Landing = ({ status }) => {
  const cards =
    status &&
    status.map((element) => {
      return (
        <>
          <div key={element.id} className="landing__backdrop">
            <div className="landing__container">
              <div className="landing__progress-work" key={element.id}>
                <h3 className="landing__progress-work__title">
                  {element.title}
                </h3>
              </div>
            </div>
            <div className="landing__solution">
              <p className="landing__status">Status: {element.status}</p>
              <p className="landing__resolution">{element.resolution}</p>
            </div>
            <div className="landing__test">
              <Progress
                theme={{
                  active: {
                    color: "#afaab9",
                  },
                }}
                percent={element.percentage}
              />
            </div>
            <div>
              <hr></hr>
            </div>
          </div>
        </>
      );
    });

  return (
    <section className="landing">
      <h2 className="landing__title">HOME</h2>
      <div className="landing__flexed">
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
                alt="help"
              ></img>
            </div>
          </div>
          <p className="landing__estimate__details">To be determined</p>

          <p className="landing__estimate__popup">
            Please be advised that you will receive an official notification in
            your mailbox regarding the scheduled date of your court hearing,
            prior to the actual proceedings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
