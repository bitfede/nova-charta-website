import styles from './Corsi.module.css';
import { Container, Row, Col, Image, Form, Button  } from 'react-bootstrap'

function Corsi(props) {

  return (
    <div className={styles.corsiContainer}>
      <h1 className={styles.mainTitle}>Cattedre Ambulanti</h1>
      <div dangerouslySetInnerHTML={{__html: props.contenutoPagina.content.rendered}}>

      </div>
    </div>
  )
}

export default Corsi;
