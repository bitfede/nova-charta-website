import styles from './QuattroSezioni.module.css';
import { Container, Row, Col  } from 'react-bootstrap'

function QuattroSezioni() {
  const rootDomain = "negozio.novacharta.it"

  const generateCards = () => {
    console.log('Quattro Sezioni - Component');
  }

  return (
    <div className={styles.quattroSezioniContainer}>
      <Row>
        <Col xs="12" lg="6">
          <a className={`${styles.cardLinkElem} ${styles.hvrShrink}`} target="_blank" href="https://negozio.novacharta.it/categoria-prodotto/abbonamenti/">
            <div style={{backgroundImage: "url('img/novacharta-riviste2.png')"}} className={`${styles.cardContainer} ${styles.desktopCard1}`}>
              <div className={styles.shadedArea}>
                <h2 className={styles.cardTitle}>Riviste</h2>
              </div>
            </div>
          </a>
        </Col>
        <Col xs="12" lg="6">
          <a className={`${styles.cardLinkElem} ${styles.hvrShrink}`} target="_blank" href="https://negozio.novacharta.it/categoria-prodotto/collana-cimelia/">
            <div style={{backgroundImage: "url('img/novacharta-libri.jpeg')"}} className={`${styles.cardContainer} ${styles.desktopCard2}`}>
              <div className={styles.shadedArea}>
                <h2 className={styles.cardTitle}>Libri</h2>
              </div>
            </div>
          </a>
        </Col>
        <Col xs="12" lg="6">
          <a className={`${styles.cardLinkElem} ${styles.hvrShrink}`} target="_blank" href="/salviamo-un-codice">
            <div style={{backgroundImage: "url('img/novacharta-codici.jpg')"}} className={`${styles.cardContainer} ${styles.desktopCard3}`}>
              <div className={`${styles.shadedArea} ${styles.desktopCard3}`}>
                <h2 className={styles.cardTitle}>Salviamo un Codice</h2>
              </div>
            </div>
          </a>
        </Col>
        <Col xs="12" lg="6">
          <a className={`${styles.cardLinkElem} ${styles.hvrShrink}`} target="_blank" href="/corsi">
            <div style={{backgroundImage: "url('img/novacharta-cattedre.jpeg')"}} className={`${styles.cardContainer} ${styles.desktopCard4}`}>
              <div className={`${styles.shadedArea} ${styles.desktopCard4}`}>
                <h2 className={styles.cardTitle}>Cattedre Ambulanti</h2>
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  )
}

export default QuattroSezioni;
