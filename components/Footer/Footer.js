import styles from './Footer.module.css';
import { Container, Row, Col, Image, Form, Button  } from 'react-bootstrap'

function Footer() {

  const generateCards = () => {
    console.log('Footer - Component');
  }

  return (
    <div style={{backgroundImage: "url('img/footer-carta.png')"}} className={styles.footerContainer}>
      <div className={styles.footerContentContainer}>
        <Row className={styles.rowDiv}>
          <Col sm="6" lg="3">
            <h1>Nova Charta</h1>
            <p>
              <b>Indirizzo:</b> via Dietro Duomo 22,<br />
              35139 Padova <br />
            <b>p.iva:</b> 02589590278 <br />
              <b>CC postale:</b> 001009623883 <br />
              <b>IBAN:</b> IT07D9329482934829384
            </p>
          </Col>
          <Col sm="6" lg="3">
            <h1>Newsletter</h1>
            <Form className={styles.newsletterForm}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Indirizzo Email</Form.Label>
                <div className={styles.formAndBtn}>
                <Form.Control type="email" placeholder="Inserisci qui la tua email" />
                <Button variant="primary" type="submit">Iscriviti</Button>
                </div>
                <Form.Text className="text-muted">
                  La tua privacy verrà rispettata
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
          <Col sm="12" lg="6">
            <div className={styles.socialIconsContainer}>
              <a className={styles.hvrPop} href="#"><Image src="img/twitter-icon.png" /></a>
              <a className={styles.hvrPop} href="#"><Image src="img/facebook-icon.png" /></a>
            <a className={styles.hvrPop} href="#"><Image src="img/instagram-icon.png" /></a>
          <a className={styles.hvrPop} href="#"><Image src="img/whatsapp-icon.png" /></a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer;
