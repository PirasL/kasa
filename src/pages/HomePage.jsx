import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ItemList from "../components/ItemList/ItemList";
import Footer from "../components/Footer/Footer";
import "./page.css";

export default function Home() {
  return (
    <>
      <div className="page">
        <Navbar />
        <Hero />
        <ItemList />
      </div>
      <Footer />
    </>
  );
}
