import styles from './QuattroSezioni.module.css';
import { Container, Row, Col  } from 'react-bootstrap'

function QuattroSezioni() {

  const generateCards = () => {
    console.log('helloworld2');
  }

  return (
    <div className={styles.quattroSezioniContainer}>
      <Row>
        <Col xs="12" lg="6">
          <div style={{backgroundImage: "url('https://www.novacharta.it/wp-content/uploads/2019/08/40464180_1817592548316980_917951725107675136_n-1.jpg')"}} className={`${styles.cardContainer} ${styles.desktopCard1}`}>
            <div className={styles.shadedArea}>
              <h2 className={styles.cardTitle}>Riviste</h2>
            </div>
          </div>
        </Col>
        <Col xs="12" lg="6">
          <div style={{backgroundImage: "url('https://uc5347fadc521e6c56600b49c2f5.previews.dropboxusercontent.com/p/thumb/AAsRr7hEorjI8UzTbeRYm7FmdG2jN8QNF_Wk6un176HmA_VH1_sSEgWavavdEMXBSseu5B79t8QdiKavpOhs9S-ONteBUloLcNybXYimpTMBKMpHfRq3DndeECJM9YTDjWskYEU_v4UqvkSMAC7BsXt8_zGsrYdVWaChQQ1iXE7D3bOC7CIHwD5g2f9TGUgaIXwdJMO9c6V0q7ryyxqcGwa6mIEPrr0iudrk6nQOaPm9x5MeuCQs0fxYE6MeXhvINQRACvMi2EZllmxPkBPlsZzS0blB3m1ik-aU7pRWWClDiIXzm4wLwCqh0RuoUO1a0kGF9uCnIo4vlpTEHYr1jtHknLBwzYq48TJpJro0PLzFt4P5-LNl8CNfo6ekeUCv0i8/p.jpeg?fv_content=true&size_mode=5')"}} className={`${styles.cardContainer} ${styles.desktopCard2}`}>
            <div className={styles.shadedArea}>
              <h2 className={styles.cardTitle}>Libri</h2>
            </div>
          </div>
        </Col>
        <Col xs="12" lg="6">
          <div style={{backgroundImage: "url('https://uc36bc6b502bf4f7a1fbc9c5824d.previews.dropboxusercontent.com/p/thumb/AAu8SsCQ6CBD081m7MwMWwmvPc_tSHqnpUGw_HM4pCJpiW3otpckU8rcybowvg4Kd1_bu1v5aHqiiCof1NYmeGQI-kV_i1mAwUK2y_9ITpaVpZs51dziQ3Sb9l-NXiJV2FRx_3J_2to6_FDfleicUFcU_EA683yf3LkfoTXE735mZQlSKOCLP8JZkOLVtX3r1olkYeVjnZHywgypmhF9dh_LrlYkBOip0VM3upNYDhMxIyQ-2aecmgIghPbglkLqFcU8hJe0XQIQu0jMQPQB5xwISTa8Db1RkMmLcJQwy-SJIEGX01rTm2KGEecBwXzPjLouSa-bZ5DSWEXRxgiWjRMMMKZW6xbfguE3ZtUNeDrTUaibVIX22hv2t_t2d-IxBp8/p.jpeg?fv_content=true&size_mode=5')"}} className={`${styles.cardContainer} ${styles.desktopCard3}`}>
            <div className={`${styles.shadedArea} ${styles.desktopCard3}`}>
              <h2 className={styles.cardTitle}>Salva un codice</h2>
            </div>
          </div>
        </Col>
        <Col xs="12" lg="6">
          <div style={{backgroundImage: "url('https://www.novacharta.it/wp-content/uploads/2018/02/Nova-Charta-%E2%80%94-Gruppo-di-codici-34-1024x681.jpg')"}} className={`${styles.cardContainer} ${styles.desktopCard4}`}>
            <div className={`${styles.shadedArea} ${styles.desktopCard4}`}>
              <h2 className={styles.cardTitle}>Cattedre Ambulanti</h2>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default QuattroSezioni;
