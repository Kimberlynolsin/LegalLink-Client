import axios from "axios";
import { useEffect, useState } from "react";

const HistoryPage = ({ URL }) => {
  const [tickets, setTickets] = useState(null);
  const [expanded, setExpanded] = useState(null);

  const moreInfo = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  useEffect(() => {
    const getTickets = async () => {
      try {
        const { data } = await axios.get(`${URL}/ticket`);
        setTickets(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTickets();
  }, [URL]);

  const ticketArr =
    tickets &&
    tickets.map((element) => {
      return (
        <div className="history__wrapper" key={element.id}>
          <div className="history__box" onClick={() => moreInfo(element.id)}>
            <h4 className="history__box__subtitle">{element.title}</h4>
            <p className="history__timestamp">
              {new Date(element.timestamp).toLocaleDateString()}
            </p>
          </div>
          {expanded === element.id && (
            <>
              <p className="history__box__description">{element.description}</p>
              <p className="history__box__solved">solved</p>
            </>
          )}
        </div>
      );
    });

  return (
    <section className="history">
      <h2 className="history__title">TICKET HISTORY</h2>
      <div className="history__container-statement">
        <p className="history__statement">
          View your past history and additional information.
        </p>
      </div>
      <div className="history__container">{ticketArr}</div>
    </section>
  );
};

export default HistoryPage;
