import './style.css'
import Home from '../../assets/img/home.svg'

export default function SectionHome() {
    return (
        <div className="section-home">
            <section className='section-home'>
                <div>
                    <h1>Virtual healthcare for you</h1>
                    <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <button>Consult today</button>
                </div>
                <img src={Home} alt="Ilustração de sobre saúde" />
            </section>
        </div>
    )
}