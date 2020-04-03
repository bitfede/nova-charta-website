import styles from './Pubblicita.module.css';
import { Container, Row, Col, Image, Form, Button  } from 'react-bootstrap'

function Pubblicita(props) {

  return (
    <div className={styles.contattiContainer}>
      <h1 className={styles.mainTitle}>Pubblicità</h1>
      <div dangerouslySetInnerHTML={{__html: props.contenutoPagina.content.rendered}}>

      </div>
    </div>
  )
}

export default Pubblicita;
