import styles from './Librerie.module.css';
import { Container, Row, Col, Image, Form, Button  } from 'react-bootstrap'

function Librerie(props) {

  if (props.contenutoPagina.error) {
    return (
      <div className={styles.librerieContainer}>
        <h3 className={styles.mainTitle}>Si è verificato un errore, riprovare più tardi.</h3>
      </div>
    )
  }

  return (
    <div className={styles.librerieContainer}>
      <h1>Librerie Affiliate</h1>
      <div dangerouslySetInnerHTML={{__html: props.contenutoPagina.content.rendered}}>

      </div>
    </div>
  )
}

export default Librerie;
