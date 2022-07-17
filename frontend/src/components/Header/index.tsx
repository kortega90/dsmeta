import logo from '../../assets/img/logo.svg'

import './styless.css'

function Header() {
    return (
        <header>
        <div class="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/kengi_ortega/">@Kortega.ig</a>
            </p>
        </div>
    </header>
    )
}

export default Header
