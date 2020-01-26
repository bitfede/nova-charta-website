import styles from './Header.module.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

function Header() {
  return (
    <div className={styles.headerContainer}>
    <Navbar variant="dark" bg="bg-red" expand="lg">
      <Navbar.Brand href="#home"><img className={styles.logoNavbar} src="/img/novacharta-logo.svg" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={styles.navLinkContainer}>
          <Nav.Link className={styles.firstNavLink} href="#home">Home</Nav.Link>
          <Nav.Link className={styles.midNavLink} href="#link">Chi Siamo</Nav.Link>
          <Nav.Link className={styles.midNavLink} href="#link">Librerie</Nav.Link>
          <Nav.Link className={styles.midNavLink} href="#link">I nostri Corsi</Nav.Link>
          <Nav.Link className={styles.midNavLink} href="#link">Diario</Nav.Link>
          <Nav.Link className={styles.midNavLink} href="#link">Vendita Ingombri</Nav.Link>
          <Nav.Link className={styles.midNavLink} href="#link">Raccolta Fondi</Nav.Link>
          <Nav.Link className={styles.lastNavLink} href="#link">Contatti</Nav.Link>
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
