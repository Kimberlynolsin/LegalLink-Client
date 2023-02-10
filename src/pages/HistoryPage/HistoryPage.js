import axios from "axios";
import { useEffect, useState } from "react";

const HistoryPage = ({ URL }) => {
  const [tickets, setTickets] = useState(null);
  const [more, setMore] = useState(false)

  const moreInfo = ()=>{
    setMore(!more)
  }

  useEffect(() => {
    const getTickets = async () => {
      try {
        const { data } = await axios.get(`${URL}/ticket`);
        console.log(data);
        setTickets(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTickets();
  }, []);

  const ticketArr =
    tickets &&
    tickets.map((element) => {
      return (
        <div className="history__wrapper" key={element.id}>
          <h4 className="history__subtitle" onClick={moreInfo}>{element.title}</h4>
         <p>{element.description}</p>
        </div>
      );
    });

  return (
    <section className="history">
      <h2 className="history__title">TICKET HISTORY</h2>
      <div className="history__container">
      {ticketArr}
      </div>
    </section>
  );
};

export default HistoryPage;
