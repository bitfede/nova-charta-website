import styles from './CatalogoLista.module.css';
import { Container, Row, Col, Image, Form, Button  } from 'react-bootstrap'

function CatalogoLista() {

  const generateCards = () => {
    console.log('Footer - Component');
  }

  return (
    <div className={styles.catalogoContainer}>
      <h1 className={styles.mainTitle}>Catalogo</h1>
      <Row className={styles.catalogListItem}>
        <Col sm="12" lg="5">
          <div className={styles.pictureContainer}>
            <Image src="img/novacharta-riviste.jpg" fluid />
          </div>
        </Col>
        <Col sm="12" lg="7">
          <div className={styles.textContainer}>
            <h2 className={styles.catalogElemTitle}>Riviste</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <div className={styles.catalogCtaContainer}>
              <Button variant="success">Scopri di più</Button>
            </div>
          </div>
        </Col>
      </Row>


      <Row className={styles.catalogListItem}>
        <Col sm="12" lg="5">
          <div className={styles.pictureContainer}>
            <Image src="img/novacharta-riviste.jpg" fluid />
          </div>
        </Col>
        <Col sm="12" lg="7">
          <div className={styles.textContainer}>
            <h2 className={styles.catalogElemTitle}>Riviste</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <div className={styles.catalogCtaContainer}>
              <Button variant="success">Scopri di più</Button>
            </div>
          </div>
        </Col>
      </Row>


      <Row className={styles.catalogListItem}>
        <Col sm="12" lg="5">
          <div className={styles.pictureContainer}>
            <Image src="img/novacharta-riviste.jpg" fluid />
          </div>
        </Col>
        <Col sm="12" lg="7">
          <div className={styles.textContainer}>
            <h2 className={styles.catalogElemTitle}>Riviste</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <div className={styles.catalogCtaContainer}>
              <Button variant="success">Scopri di più</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CatalogoLista;
