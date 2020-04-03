import styles from './Header.module.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

function Header() {
  return (
    <div className={styles.headerContainer}>
    <Navbar className={styles.navBarElemCont} variant="dark" bg="bg-red" expand="lg">
      <Navbar.Brand href="/">
        <img className={styles.logoNavbar} src="/img/novacharta-logo.svg" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={styles.navLinkContainer}>
          <Nav.Link className={`${styles.midNavLink}`} href="https://novacharta.it" target="_blank"><span className={styles.hvrUnderlineFromCenter}>Catalogo</span></Nav.Link>
          <Nav.Link className={`${styles.midNavLink}`} href="/librerie#librerie"><span className={styles.hvrUnderlineFromCenter}>Librerie</span></Nav.Link>
          <Nav.Link className={`${styles.midNavLink}`} href="/corsi#corsi"><span className={styles.hvrUnderlineFromCenter}>I nostri Corsi</span></Nav.Link>
          <Nav.Link className={`${styles.midNavLink}`} href="/pubblicita"><span className={styles.hvrUnderlineFromCenter}>Pubblicità</span></Nav.Link>
          <Nav.Link className={`${styles.midNavLink}`} href="/raccolta-fondi"><span className={styles.hvrUnderlineFromCenter}>Raccolta Fondi</span></Nav.Link>
          <Nav.Link className={`${styles.lastNavLink} `} href="/contatti#contatti"><span className={styles.hvrUnderlineFromCenter}>Contatti</span></Nav.Link>
          {/* <NavDropdown className={styles.midNavLink} title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
