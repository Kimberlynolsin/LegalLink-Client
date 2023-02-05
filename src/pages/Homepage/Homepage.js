import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Homepage() {
  const percentage = 50;

  return (
    <section className="status">
      <h2 className="status__title">HOME</h2>
      <div className="status__box">
        <p className="status__statement">
          Easing your immigration journey with transparent updates, prompt
          support, and accessible history.
        </p>
      </div>
      <div>
        <h3 className="status__subtitle">WORK PERMIT</h3>
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
        <div className="status__disclaimer">
          <p className="status__info">
            Please note that the progress bar is an estimate only
            and subject to change.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
