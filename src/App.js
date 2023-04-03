import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Homepage from "./pages/Homepage/Homepage";
import StatusUpdatePage from "./pages/StatusUpdate/StatusUpdate";
import TicketPage from "./pages/Ticket/Ticket";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import PageHeader from "./components/PageHeader/PageHeader";
import "./styles/styles.scss";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const URL = process.env.REACT_APP_BASE_URL;

  const [status, setStatus] = useState(null);
  const [history,setHistory] = useState(null)

  useEffect(() => {
    const getStatus = async () => {
      try {
        const { data } = await axios.get(`${URL}/status`);
        setStatus(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getStatus();
  }, []);


  if (!status) {
    return (
      <>
        <p>Page is loading</p>
      </>
    );
  }

  return (
    <Router>
      <PageHeader />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage status={status} history={history} setHistory={setHistory} url={URL}/>} />
        <Route path="/status" element={<StatusUpdatePage status={status}/>} />
        <Route path="/ticket" element={<TicketPage url={URL}/>} />
        <Route path="/history" element={<HistoryPage history={history} url={URL} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
