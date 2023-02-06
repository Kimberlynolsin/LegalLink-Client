import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
const Homepage = ({ cardDetails }) => {
  const cards = cardDetails.map((element) => {
    return (
      <div className="homepage__progress-work" key={element.id}>
        <h3 className="homepage__progress-work__title">{element.title}</h3>
        <Progress
          theme={{
            active: { 
              color: "#61876E",
            },
          }}
          percent={element.percentage}
        />
      </div>
    );
  });

  return (
    <section className="homepage">
      <h2 className="homepage__title">HOME</h2>
      <div className="homepage__box">
        <p className="homepage__statement">
          Easing your immigration journey with transparent updates, prompt
          support, and accessible ticket history.
        </p>
      </div>
      <h3 className="homepage__subtitle">Your current progress</h3>
      <div className="homepage__content">{cards}</div>
    </section>
  );
};

export default Homepage;
