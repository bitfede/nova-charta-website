import styles from './Contatti.module.css';
import { Container, Row, Col, Image, Form, Button  } from 'react-bootstrap'

function Contatti(props) {

  return (
    <div className={styles.contattiContainer}>
      <h1 className={styles.mainTitle}>Contatti</h1>
      <div dangerouslySetInnerHTML={{__html: props.contenutoPagina.content.rendered}}>

      </div>
    </div>
  )
}

export default Contatti;
