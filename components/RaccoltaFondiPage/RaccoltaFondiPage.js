import styles from './RaccoltaFondiPage.module.css';
import { Container, Row, Col, Image, Form, Button  } from 'react-bootstrap'

function RaccolteFondiPage(props) {

  return (
    <div className={styles.contattiContainer}>
      <h1 className={styles.mainTitle}>Raccolta Fondi</h1>
      <div dangerouslySetInnerHTML={{__html: props.contenutoPagina.content.rendered}}>

      </div>
    </div>
  )
}

export default RaccolteFondiPage;
