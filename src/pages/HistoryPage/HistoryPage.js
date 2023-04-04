import axios from "axios";
import { useEffect, useState } from "react";

const HistoryPage = ({ url }) => {
  const [tickets, setTickets] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const { data } = await axios.get(`${url}/ticket`);
        setTickets(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTickets();
  }, [url]);

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
  };

  const ticketArr =
    tickets &&
    tickets
      .filter((element) => {
        return selectedType ? element.type === selectedType : true;
      })
      .sort((elementA, elementB) => {
        return elementB.timestamp - elementA.timestamp;
      })
      .map((element) => {
        return (
          <div className="history__wrapper" key={element.id}>
            <div className="history__box">
              <h4 className="history__box__type">{element.type}</h4>
              <p className="history__timestamp">
                {new Date(element.timestamp).toLocaleDateString()}
              </p>
            </div>
            <h4 className="history__box__subtitle">{element.title}</h4>

            <>
              <p className="history__box__description">{element.description}</p>
              {/* <p className="history__box__solved">solved</p> */}
            </>
          </div>
        );
      });

  return (
    <section className="history">
      <h2 className="history__title">TICKET HISTORY</h2>
      <form className="history__form">
        <select className="history__select" name="history__type" onChange={handleSelectChange}>
          <option>Work Permit</option>
          <option>Travel Document</option>
          <option>Financial Aid</option>
          <option>Study Permit</option>
          <option>Other</option>
        </select>
      </form>
      <hr></hr>
      <div className="history__container">{ticketArr}</div>
    </section>
  );
};

export default HistoryPage;
