import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import RoomContent from "../components/RoomContent/RoomContent";
import RoomSlider from "../components/RoomSlider/RoomSlider";
import fetchData from "../utils/fetchData";
import ErrorPage from "./ErrorPage";

export default function RoomPage() {
  let id = useParams();
  let data = fetchData(id);

  if (!data) return <ErrorPage />;
  return (
    <>
      <div className="page">
        <Navbar />
        <RoomSlider pictures={data?.pictures} />
        <RoomContent {...data} />
      </div>
      <Footer />
    </>
  );
}
