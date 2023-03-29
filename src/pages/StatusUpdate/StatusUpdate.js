import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import more from "../../assets/icons/more.png";
import help from "../../assets/icons/help.png";

const StatusUpdate = ({ cardDetails }) => {
  const [expandStates, setExpandStates] = useState([]);

  // useEffect(() => {
  //   setExpandStates(Array(cardDetails.length).fill(false));
  // }, [cardDetails]);

  // const handleClick = (index) => {
  //   const newExpandStates = [...expandStates];
  //   newExpandStates[index] = !newExpandStates[index];
  //   setExpandStates(newExpandStates);
  // };

  // const statusCard = cardDetails.map((element, index) => {
  //   return (
  //     <div className="status__application" key={element.id}>
  //       <div className="status__title-info">
  //         <div className="status__title__wrapper">
  //           <p className="status__title-text">{element.title}</p>
  //           <img
  //             src={more}
  //             alt="expand"
  //             onClick={() => handleClick(index)}
  //             className="status__title__more"
  //           ></img>
  //         </div>
  //         <Progress
  //           theme={{
  //             active: {
  //               color: "#61876E",
  //             },
  //           }}
  //           percent={element.percentage}
  //         />
  //         <p className="status__status">Status: {element.status}</p>
  //         {expandStates[index] && (
  //           <div>
  //             <p className="status__additional">Additional Information:</p>
  //             <Link to={element.related_links} target="_blank">
  //               <p className="status__link">{element.query}</p>
  //             </Link>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <section className="status">
      <h2 className="status__title">STATUS UPDATE</h2>
      <div className="status__box">
        <p className="status__statement">
          Here you will find further information regarding the status of your
          application.
        </p>
      </div>
      <div className="status__options">
        {/* {statusCard} */}
        <div className="status__disclaimer">
          <img className="status__disclaimer__help" src={help} alt="info"></img>
          <p className="status__disclaimer__text">
            Please note that this is an estimate only and is subjected to change
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatusUpdate;
