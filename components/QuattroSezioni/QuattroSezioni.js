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
          1
        </Col>
        <Col xs="12" lg="6">
          2
        </Col>
        <Col xs="12" lg="6">
          3
        </Col>
        <Col xs="12" lg="6">
          4
        </Col>
      </Row>
    </div>
  )
}

export default QuattroSezioni;
