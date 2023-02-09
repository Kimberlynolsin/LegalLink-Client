import axios from "axios";
import { useRef } from "react";

const TicketPage = ({ URL }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const title = form.title.value;
    const description = form.description.value;

    const newTicket = {
      title: title,
      description: description,
    };

    axios
      .post(`${URL}/ticket`, newTicket)
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });

    form.reset();
  };

  return (
    <section className="ticket">
      <h2 className="ticket__title">TICKET</h2>
      <div className="ticket__box">
        <p>
          Have questions? Submit a ticket with a description of your problem and
          we'll get back to you as soon as possible.
        </p>
      </div>
      <form className="ticket__form" onSubmit={handleSubmit} ref={formRef}>
        <label className="ticket__label">
          TITLE:
          <input type="text" name="title" className="ticket__input"></input>
        </label>

        <label className="ticket__label">
          DESCRIBE YOUR ISSUE:
          <textarea
            type="text"
            name="description"
            className="ticket__textarea"
          ></textarea>
        </label>

        <div className="ticket__btn">
          <input
            type="submit"
            value="SUBMIT"
            className="ticket__submit"
          ></input>
        </div>
      </form>
    </section>
  );
};

export default TicketPage;
