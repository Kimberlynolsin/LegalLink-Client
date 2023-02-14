import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import Homepage from "./pages/Homepage/Homepage";
import PageHeader from "./components/PageHeader/PageHeader";
import StatusUpdatePage from "./pages/StatusUpdate/StatusUpdate";
import TicketPage from "./pages/Ticket/Ticket";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Layout from "./Layout/Layout";
import "./styles/styles.scss";

function App() {

  const URL = process.env.REACT_APP_BASE_URL
  const login = "/login";
  const signup = "/signup";

  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const cardDetails = [
    {
      id: 1,
      title: "WORK PERMIT",
      percentage: 30,
      status: "Started",
      query: "Work Permit Extension",
      related_links:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/claim-protection-inside-canada/work-study.html",
    },
    {
      id: 2,
      title: "FINANCIAL AID",
      percentage: 60,
      status: "In-Progress",
      query: "Resettlement Assistance Program",
      related_links:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/financial.html",
    },
    {
      id: 3,
      title: "TRAVEL DOCUMENT",
      percentage: 50,
      status: "In-Progress",
      query: "Travel Document Process",
      related_links:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/travel-documents-non-canadians.html",
    },
    {
      id: 4,
      title: "STUDY PERMIT",
      percentage: 0,
      status: "Not Started",
      query: "Studying in Canada",
      related_links:
        "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/study-permits/refugees-protected-persons.html",
    },
  ];

  useEffect(() => {
    if (!isSignedUp) {
      setIsSignedUp(true);
    }
  }, [isSignedUp]);
  return (
    <main>
      <Router>
        <PageHeader />
        <Routes>
          <Route element={<Layout isLoggedIn={isLoggedIn} />}>
            <Route path="/" element={<Homepage cardDetails={cardDetails} />} />
            <Route
              path="/status"
              element={<StatusUpdatePage cardDetails={cardDetails} />}
            />
            <Route path="/ticket" element={<TicketPage URL={URL} />} />
            <Route path="/history" element={<HistoryPage URL={URL} />} />
          </Route>

          <Route
            path="/signup"
            element={
              <SignUpPage
                URL={URL}
                signup={signup}
                isSignedUp={isSignedUp}
                setIsSignedUp={setIsSignedUp}
              />
            }
          />
          <Route
            path="/login"
            element={
              <LoginPage
                URL={URL}
                login={login}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
