import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TicketPage = ({ URL }) => {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;

    const title = form.title.value;
    const description = form.description.value;

    const newTicket = {
      title: title,
      description: description,
    };

    if (!title || !description) {
      toast("All fields must be filled");
      return;
    }

    axios
      .post(`${URL}/ticket`, newTicket)
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
      <div className="ticket__box">
        <p className="ticket__descript">
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
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </section>
  );
};

export default TicketPage;
