import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TicketPage = ({ url }) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const title = form.title.value;
    const description = form.description.value;
    const type = form.selected__type.value;

    const newTicket = {
      title: title,
      description: description,
      type: type,
    };

    if (!title || !description) {
      toast("All fields must be filled");
      return;
    }

    axios
      .post(`${url}/ticket`, newTicket)
      .then((response) => {
        const { data } = response;
        console.log(data);

        if (data) {
          navigate("/history");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    form.reset();
  };

  return (
    <section className="ticket">
      <h2 className="ticket__title">TICKET</h2>
      <form className="ticket__form" onSubmit={handleSubmit} ref={formRef}>
        <label className="ticket__options">
          INQUIRY:
          <select className="ticket__select" name="selected__type">
            <option className="ticket__option" value="Work Permit">Work Permit</option>
            <option className="ticket__option" value="Travel Document">Travel Document</option>
            <option className="ticket__option" value="Financial Aid">Financial Aid</option>
            <option className="ticket__option" value="Study Permit">Study Permit</option>
            <option className="ticket__option" value="Other">Other</option>
          </select>
        </label>
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
