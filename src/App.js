import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Homepage from "./pages/Homepage/Homepage";
import StatusUpdatePage from "./pages/StatusUpdate/StatusUpdate";
import TicketPage from "./pages/Ticket/Ticket";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import PageHeader from "./components/PageHeader/PageHeader";
import "./styles/styles.scss";

function App() {
  return (
      <Router>
      <PageHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/status" element={<StatusUpdatePage />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
  );
}

export default App;
