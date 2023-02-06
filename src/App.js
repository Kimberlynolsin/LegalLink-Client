import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Homepage from "./pages/Homepage/Homepage";
import PageHeader from "./components/PageHeader/PageHeader";
import Navigation from "./components/Navigation/Navigation";
import StatusUpdatePage from "./pages/StatusUpdate/StatusUpdate";
import TicketPage from "./pages/Ticket/Ticket";
import HistoryPage from "./pages/History/History";
import "./styles/styles.scss";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  const cardDetails = [
    {
      id: 1,
      title: "WORK PERMIT",
      percentage: 30,
    },
    {
      id: 2,
      title: "FINANCIAL AID",
      percentage: 60,
    },
    {
      id: 3,
      title: "TRAVEL DOCUMET",
      percentage: 5,
    },
    {
      id: 4,
      title: "TEST",
      percentage: 90,
    },
  ];

  //have navbar render footer conditionally so that if they pass the login page, the footer will show
  return (
    <>
      <Router>
        <PageHeader />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/" element={<Homepage cardDetails={cardDetails} />} />
          <Route path="/status" element={< StatusUpdatePage/>} />
          <Route path="/status" element={< TicketPage/>} />
          <Route path="/status" element={< HistoryPage/>} />

        </Routes>
        <Navigation/>
      </Router>
    </>
  );
}

export default App;
