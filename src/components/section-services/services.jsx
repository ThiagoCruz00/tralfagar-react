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
        <main className="fundo">
          <h1>Our services</h1>

          <div className="borda"></div>
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
          <div className="cards-container">
            <div className="cards">
              <img src={Lupa} alt="Lupa" />
              <h1>Search doctor</h1>
              <p>
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </p>
            </div>
            <div className="cards">
              <img src={Remedio} alt="Remedio" />
              <h1>Online pharmacy</h1>
              <p>
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </div>
            <div className="cards">
              <img src={Tablet} alt="Tablet" />
              <h1>Consultation</h1>
              <p>
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
            <div className="cards">
              <img src={Prancheta} alt="Prancheta" />
              <h1>Details info</h1>
              <p>
              Free consultation with our trusted doctors and get the best recomendations
              </p>
            </div>
            <div className="cards">
              <img src={Maleta} alt="Maleta" />
              <h1>Emergency care</h1>
              <p>
              You can get 24/7 urgent care for yourself or your children and your
              lovely family
              </p>
            </div>
            <div className="cards">
              <img src={Emergencia} alt="Emergência" />
              <h1>Tracking</h1>
              <p>
              Track and save your medical history and health data 
              </p>
            </div>
          </div>
          <button className="Learn-more">Learn more</button>
        </main>
      </section>
    </>
  );
}
