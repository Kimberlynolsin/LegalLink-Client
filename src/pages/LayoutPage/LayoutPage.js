import { ToastContainer } from "react-toastify";
import PageHeader from "../../components/PageHeader/PageHeader";
import HistoryPage from "../HistoryPage/HistoryPage";
import Homepage from "../Homepage/Homepage";
import StatusUpdate from "../StatusUpdate/StatusUpdate";
import TicketPage from "../Ticket/Ticket";

const LayoutPage = () => {
  const URL = process.env.REACT_APP_BASE_URL;
  const login = "/login";
  const signup = "/signup";

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

  console.log(cardDetails);
  return (
    <>
      <ToastContainer />
      <Homepage cardDetails={cardDetails} />
      <StatusUpdate cardDetails={cardDetails} />
      <TicketPage URL={URL} />
      <HistoryPage URL={URL} />
    </>
  );
};

export default LayoutPage;
