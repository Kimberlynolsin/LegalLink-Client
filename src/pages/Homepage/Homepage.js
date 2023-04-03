import axios from "axios";
import { useEffect } from "react";
import Landing from "../../components/Landing/Landing";

const HomePage = ({ status, history, setHistory, url }) => {
  useEffect(() => {
    const getInquiries = async () => {
      try {
        const { data } = await axios.get(`${url}/ticket`);
        setHistory(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getInquiries();
  }, []);

  return (
    <>
      <Landing status={status} history={history}/>
    </>
  );
};

export default HomePage;
