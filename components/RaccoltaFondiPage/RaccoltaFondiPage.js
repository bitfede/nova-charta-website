import styles from './RaccoltaFondiPage.module.css';
import { Container, Row, Col, Image, Form, Button  } from 'react-bootstrap'

function RaccolteFondiPage(props) {

  if (props.contenutoPagina.error) {
    return (
      <div className={styles.contattiContainer}>
        <h3 className={styles.mainTitle}>Si è verificato un errore, riprovare più tardi.</h3>
      </div>
    )
  }

  return (
    <div className={styles.contattiContainer}>
      <h1 className={styles.mainTitle}>Raccolta Fondi</h1>
      <div dangerouslySetInnerHTML={{__html: props.contenutoPagina.content.rendered}}>

      </div>
    </div>
  )
}

export default RaccolteFondiPage;
