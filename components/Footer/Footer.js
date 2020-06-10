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
            <form method="post">
              <p><label>Indirizzo E-M@il: </label>
              <input type="email" name="EMAIL" placeholder="Il tuo indirizzo E-M@il" required="" /></p>
              <p><input type="submit" value="Iscriviti" /></p>
              <div style={{display: "none"}}>
              <input type="text" name="_mc4wp_ho_58b515cfbcfb6d6c8027b2921b8bf2c2" value="" tabindex="-1" autocomplete="off" />
            </div>
              <input type="hidden" name="_mc4wp_timestamp" value="1590437296" />
              <input type="hidden" name="_mc4wp_form_id" value="0" />
              <input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" />
              <input type="hidden" name="_mc4wp_form_submit" value="1" />
              <input type="hidden" name="_mc4wp_form_nonce" value="8a57930ebf" />
            </form>
            {/*  ----- old form ----
              <Form className={styles.newsletterForm}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Indirizzo Email</Form.Label>
                  <div className={styles.formAndBtn}>
                  <Form.Control type="email" placeholder="Inserisci qui la tua email" />
                  <Button variant="primary" type="submit">Iscriviti</Button>
                  </div>
                  <Form.Text className="text-muted">
                    I dati saranno trattati seguendo il GDPR
                  </Form.Text>
                </Form.Group>
              </Form>
            */}
          </Col>
          <Col sm="12" lg="6">
            <div className={styles.socialIconsContainer}>
              <div>
                <a className={styles.hvrPop} target="_blank" href="https://twitter.com/novacharta"><Image src="img/twitter-icon.png" /></a>
                <a className={styles.hvrPop} target="_blank" href="https://www.facebook.com/NovaCharta"><Image src="img/facebook-icon.png" /></a>
                <a className={styles.hvrPop} target="_blank" href="https://www.instagram.com/novachartaeditore"><Image src="img/instagram-icon.png" /></a>
                <a className={styles.hvrPop} target="_blank" href="tel:+39049657574"><Image src="img/whatsapp-icon.png" /></a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer;
