function Footer() {
  return (
    <div className="foo text-white">
          <footer>
            <ul className="social_icon">
              <li>
                <a href="https://www.linkedin.com/in/oriana-olaia/">Linkedin</a>
              </li>
              <li>
                <a href="https://github.com/OriOlaia">Github</a>
              </li>
              <li>
                <a href="mailto:oriana.olaia17@gmail.com">Correo</a>
              </li>
            </ul>
            <p>
              @{new Date().getFullYear()} Oriana Olaia. Todos los derechos reservados.
            </p>
          </footer>
        </div>
  )
}

export default Footer
