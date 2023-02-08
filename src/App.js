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
  const URL = "http://localhost:8000";
  const login = "/login";
  const signup = "/signup";
  
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

  console.log('app.js',URL)
  return (
    <>
      <Router>
        <PageHeader />
        <Routes>
          <Route path="/login" element={<LoginPage URL={URL} login={login} />}/>
          <Route path="/signup" element={<SignUpPage URL={URL} signup={signup}/>} />

          <Route path="/" element={<Homepage cardDetails={cardDetails} />} />
          <Route path="/status" element={<StatusUpdatePage />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
        <Navigation />
      </Router>
    </>
  );
}

export default App;
