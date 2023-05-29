import Collapsible from "../components/Collapsible/Collapsible";
import Footer from "../components/Footer/Footer";
import HeroAbout from "../components/HeroAbout/HeroAbout";
import Navbar from "../components/Navbar/Navbar";
import "./page.css";

export default function About() {
  return (
    <>
      <div className="page">
        <Navbar />
        <HeroAbout />
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Collapsible
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
          <Collapsible
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapsible
            title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <Collapsible
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
