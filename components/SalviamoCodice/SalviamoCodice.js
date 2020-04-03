import styles from './SalviamoCodice.module.css';
import { Container, Row, Col, Image, Form, Button  } from 'react-bootstrap'

function SalviamoCodice(props) {

  return (
    <div className={styles.contattiContainer}>
      <h1 className={styles.mainTitle}>Salviamo un Codice</h1>
      <div dangerouslySetInnerHTML={{__html: props.contenutoPagina.content.rendered}}>

      </div>
    </div>
  )
}

export default SalviamoCodice;
