import "./Header.css"

export default function Header() {
    return (
        <header>
            <nav>
                <section className="credit">
                    <p>Hecho con ♥️ por <span>Raúl Arroyo</span></p>
                    <h2>Web Developer</h2>
                </section>
                
                <section className="links">
                    <a href="https://github.com/RaulxAG" target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/raul-arrgon/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </section>
            </nav>
        </header>
    )
}