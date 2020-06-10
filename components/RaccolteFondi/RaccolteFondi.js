import styles from './RaccolteFondi.module.css';
import { Container, Row, Col, Button  } from 'react-bootstrap'
import Link from 'next/link'

function RaccolteFondi() {

  const generateCards = () => {
    console.log('Raccolta Fondi - Component');
  }

  return (
    <div className={styles.raccolteFondiContainer}>
      <h1 className={styles.mainTitle}>Raccolte fondi</h1>
      <Row>
        <Col sm="12">
          <div className={styles.raccolteCardContent}>
            <div className={styles.shadedHalf}>
              <p>Dal 2008 sosteniamo il recupero di antichi codici nelle biblioteche di Cesena, Vicenza, Bologna, Padova, Roma, Venezia, Firenze e Torino</p>
              <Button className={styles.ctaButton} variant="primary"><Link href="https://novacharta.it/raccolta-fondi">Scopri di più</Link></Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default RaccolteFondi;
