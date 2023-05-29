import ErrorPageComponent from "../components/ErrorPageComponent/ErrorPageComponent";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./page.css";
export default function ErrorPage() {
  return (
    <>
      <div className="page">
        <Navbar />
        <ErrorPageComponent />
      </div>
      <Footer />
    </>
  );
}
