import styles from './RaccolteFondi.module.css';
import { Container, Row, Col  } from 'react-bootstrap'

function RaccolteFondi() {

  const generateCards = () => {
    console.log('helloworld2');
  }

  return (
    <div className={styles.raccolteFondiContainer}>
      <h1 className={styles.mainTitle}>Raccolte fondi</h1>
      <Row>
        <Col sm="12">
          <div className={styles.raccolteCardContent}>

          </div>
        </Col>
      </Row>
    </div>
  )
}

export default RaccolteFondi;
