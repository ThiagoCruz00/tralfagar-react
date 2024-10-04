import './style.css'
import Inovação from '../../assets/img/Accessible.svg'

export default function Accessible(){
    return(
        <section className='Accessible-container'>
            <div className="accessible">
                <img src={Inovação} alt="" />

                <div className="text-accessible">
                    <h1>Leading healthcare providers</h1>
                    <div className="borda-accessible"></div>
                    <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
                    in the solutions we deliver </p>
                    <button className='learn-more'>Learn more</button>
                </div>
            </div>
        </section>
    )
}