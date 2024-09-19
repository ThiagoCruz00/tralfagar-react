import './style.css'

export default function Header() {
    return (
        <div className="header-container">
            <header>
                <div className="logo">
                    <p className='logo-text'>T</p>
                    <h3>Tralfagar</h3>
                </div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Find a doctor</a>
                    <a href="#">Apps</a>
                    <a href="#">Testimonials</a>
                    <a href="#">About us</a>
                </nav>
            </header>
        </div>
    )
}