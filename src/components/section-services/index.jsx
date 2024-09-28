import "./style.css";
import Lupa from "../../assets/img/Lupa-cards.svg";
import Remedio from "../../assets/img/remedio-cards.svg";
import Tablet from "../../assets/img/tablet-cards.svg";
import Prancheta from "../../assets/img/prancheta-cards.svg";
import Maleta from "../../assets/img/maleta-cards.svg";
import Emergencia from "../../assets/img/emergencia-cards.svg";

export default function Services() {
  return (
    <>
      <section className="servicos-container">
        <h1>Our services</h1>

        <div className="borda"></div>
        <p>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>

        <div className="cards">
          <img src={Lupa} alt="Lupa" />
          <h1>Search doctor</h1>
          <p>
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </p>
        </div>
      </section>
    </>
  );
}
