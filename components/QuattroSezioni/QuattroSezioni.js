import styles from './QuattroSezioni.module.css';
import { Container, Row, Col  } from 'react-bootstrap'

function QuattroSezioni() {

  const generateCards = () => {
    console.log('helloworld2');
  }

  return (
    <div className={styles.quattroSezioniContainer}>
      <Row>
        <Col xs="12" lg="6">
          <div style={{backgroundImage: "url('img/novacharta-riviste.jpg')"}} className={`${styles.cardContainer} ${styles.desktopCard1}`}>
            <div className={styles.shadedArea}>
              <h2 className={styles.cardTitle}>Riviste</h2>
            </div>
          </div>
        </Col>
        <Col xs="12" lg="6">
          <div style={{backgroundImage: "url('img/novacharta-libri.png')"}} className={`${styles.cardContainer} ${styles.desktopCard2}`}>
            <div className={styles.shadedArea}>
              <h2 className={styles.cardTitle}>Libri</h2>
            </div>
          </div>
        </Col>
        <Col xs="12" lg="6">
          <div style={{backgroundImage: "url('img/novacharta-codici.jpg')"}} className={`${styles.cardContainer} ${styles.desktopCard3}`}>
            <div className={`${styles.shadedArea} ${styles.desktopCard3}`}>
              <h2 className={styles.cardTitle}>Salva un codice</h2>
            </div>
          </div>
        </Col>
        <Col xs="12" lg="6">
          <div style={{backgroundImage: "url('https://www.novacharta.it/wp-content/uploads/2018/02/Nova-Charta-%E2%80%94-Gruppo-di-codici-34-1024x681.jpg')"}} className={`${styles.cardContainer} ${styles.desktopCard4}`}>
            <div className={`${styles.shadedArea} ${styles.desktopCard4}`}>
              <h2 className={styles.cardTitle}>Cattedre Ambulanti</h2>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default QuattroSezioni;
