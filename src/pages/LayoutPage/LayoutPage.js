import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import HistoryPage from "../HistoryPage/HistoryPage";
import Homepage from "../Homepage/Homepage";
import StatusUpdate from "../StatusUpdate/StatusUpdate";
import TicketPage from "../Ticket/Ticket";

const LayoutPage = () => {
  const URL = process.env.REACT_APP_BASE_URL;
  const login = "/login";
  const signup = "/signup";

  const [status, setStatus] = useEffect(null)


  useEffect(() => {
    const getTickets = async () => {
      try {
        const { data } = await axios.get(`${URL}/status`);
        setStatus(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTickets();
  }, []);

  console.log(status)
  return (
    <>
      <ToastContainer />
      <Homepage status={status} />
      <StatusUpdate cardDetails={cardDetails} />
      <TicketPage URL={URL} />
      <HistoryPage URL={URL} />
    </>
  );
};

export default LayoutPage;
