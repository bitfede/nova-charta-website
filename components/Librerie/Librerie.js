import styles from './Librerie.module.css';
import { Container, Row, Col, Image, Form, Button  } from 'react-bootstrap'

function Librerie(props) {

  console.log("<><><><><>", props.contenutoPagina.content.rendered);

  return (
    <div className={styles.librerieContainer}>
      <h1>Librerie Affiliate</h1>
      <div dangerouslySetInnerHTML={{__html: props.contenutoPagina.content.rendered}}>

      </div>
    </div>
  )
}

export default Librerie;
