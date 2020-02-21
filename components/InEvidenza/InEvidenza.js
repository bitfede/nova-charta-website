import styles from './InEvidenza.module.css';
import { Carousel, Card, Button  } from 'react-bootstrap'

function inEvidenza(props) {
  console.log("PROPS - IN EVIDENZA:", props);

  const generateCards = () => {
    console.log('In Evidenza - Component');
  }

  return (
    <div className={styles.inEvidenzaContainer}>
      <div className={styles.titlesContainer}>
        <h1 className={styles.mainTitle}>In evidenza</h1>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cardDiv}>

        <Carousel className="d-lg-none d-xl-none" controls={false} indicators={true} interval={3000}>

        <Carousel.Item>
          <div style={{backgroundImage: "url('https://www.novacharta.it/wp-content/uploads/2020/01/RL-600x0.jpg')"}} className={styles.cardContainer}>
            <div className={`${styles.shadedHalf} ${styles.shadedHalfMobile}`}>
              <h3 className={styles.cardTitle}><a href="#">Abbonamento Alumina Italia</a></h3>
              <p className={styles.cardDescription}>Alumina è la rivista trimestrale dedicata al mondo della miniatura, dei codici...</p>
              <div className={styles.ctaPriceDiv}>
                <span>$0.00</span> <Button variant="success" size="sm">Acquista</Button>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{backgroundImage: "url('https://www.novacharta.it/wp-content/uploads/2016/01/AbbonamentoAlumina_IT_DEF.jpg')"}} className={styles.cardContainer}>
            <div className={`${styles.shadedHalf} ${styles.shadedHalfMobile}`}>
              <h3 className={styles.cardTitle}><a href="#">Una festa senza fine, Raquel Levy</a></h3>
              <p className={styles.cardDescription}>Dal numero 166 di Charta, Francesco Rapazzini ci accompagna a scoprire la storia ...</p>
              <div className={styles.ctaPriceDiv}>
                <span>$100</span> <Button variant="success" size="sm">Acquista</Button>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={{backgroundImage: "url('https://www.novacharta.it/wp-content/uploads/2016/01/alumina-e-charta-copia-600x0.jpg')"}} className={styles.cardContainer}>
            <div className={`${styles.shadedHalf} ${styles.shadedHalfMobile}`}>
              <h3 className={styles.cardTitle}><a href="#">Abbonamento Charta + -Abbonamento Alumina</a></h3>
              <p className={styles.cardDescription}>Scopri di piu</p>
              <div className={styles.ctaPriceDiv}>
                <span>$100.00</span> <Button variant="success" size="sm">Acquista</Button>
              </div>
            </div>
          </div>
        </Carousel.Item>


        </Carousel>

        {/* DESKTOP CAROUSEL */}
        <Carousel className="d-none d-lg-block d-xl-block" controls={false} indicators={true} interval={3000}>

          <Carousel.Item>
          <div className={styles.carouselWrapperDeskt}>

          <div className={`${styles.cardContainerDesk} col-sm-4`}>
            <div style={{backgroundImage: "url('https://www.novacharta.it/wp-content/uploads/2020/01/RL-600x0.jpg')"}} className={styles.cardContentDiv1}>
              <div className={styles.shadedHalf}>
                <h3 className={styles.cardTitle}><a href="#">Una festa senza fine, Raquel Levy</a></h3>
                <p className={styles.cardDescription}>Dal numero 166 di Charta, Francesco Rapazzini ci accompagna a...</p>
                <div className={styles.ctaPriceDiv}>
                  <span>$100</span> <Button variant="success" size="sm">Acquista</Button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.cardContainerDesk} col-sm-4`}>
            <div style={{backgroundImage: "url('https://www.novacharta.it/wp-content/uploads/2016/01/AbbonamentoAlumina_IT_DEF.jpg')"}} className={styles.cardContentDiv2}>
              <div className={styles.shadedHalf}>
                <h3 className={styles.cardTitle}><a href="#">Abbonamento Alumina Italia</a></h3>
                <p className={styles.cardDescription}>Alumina è la rivista trimestrale dedicata al mondo della miniatura, dei codici...</p>
                <div className={styles.ctaPriceDiv}>
                  <span>$0.00</span> <Button variant="success" size="sm">Acquista</Button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.cardContainerDesk} col-sm-4`}>
            <div style={{backgroundImage: "url('https://www.novacharta.it/wp-content/uploads/2016/01/alumina-e-charta-copia-600x0.jpg')"}} className={styles.cardContentDiv3}>
              <div className={`${styles.shadedHalf} ${styles.shadedHalfRight}`}>
                <h3 className={styles.cardTitle}><a href="#">Lorem ipsum dolor sit amet</a></h3>
                <p className={styles.cardDescription}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className={styles.ctaPriceDiv}>
                  <span>$100.00</span> <Button variant="success" size="sm">Acquista</Button>
                </div>
              </div>
            </div>
          </div>

          </div>
        </Carousel.Item>

        <Carousel.Item>
        <div className={styles.carouselWrapperDeskt}>

        <div className={`${styles.cardContainerDesk} col-sm-4`}>
          <div style={{backgroundImage: "url('https://www.novacharta.it/wp-content/uploads/2020/01/RL-600x0.jpg')"}} className={styles.cardContentDiv1}>
            <div className={styles.shadedHalf}>
              <h3 className={styles.cardTitle}><a href="#">Una festa senza fine, Raquel Levy</a></h3>
              <p className={styles.cardDescription}>Dal numero 166 di Charta, Francesco Rapazzini ci accompagna a...</p>
              <div className={styles.ctaPriceDiv}>
                <span>$100</span> <Button variant="success" size="sm">Acquista</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.cardContainerDesk} col-sm-4`}>
          <div style={{backgroundImage: "url('https://www.novacharta.it/wp-content/uploads/2016/01/AbbonamentoAlumina_IT_DEF.jpg')"}} className={styles.cardContentDiv2}>
            <div className={styles.shadedHalf}>
              <h3 className={styles.cardTitle}><a href="#">Abbonamento Alumina Italia</a></h3>
              <p className={styles.cardDescription}>Alumina è la rivista trimestrale dedicata al mondo della miniatura, dei codici...</p>
              <div className={styles.ctaPriceDiv}>
                <span>$0.00</span> <Button variant="success" size="sm">Acquista</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.cardContainerDesk} col-sm-4`}>
          <div style={{backgroundImage: "url('https://www.novacharta.it/wp-content/uploads/2016/01/alumina-e-charta-copia-600x0.jpg')"}} className={styles.cardContentDiv3}>
            <div className={`${styles.shadedHalf} ${styles.shadedHalfRight}`}>
              <h3 className={styles.cardTitle}><a href="#">Lorem ipsum dolor sit amet</a></h3>
              <p className={styles.cardDescription}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <div className={styles.ctaPriceDiv}>
                <span>$100.00</span> <Button variant="success" size="sm">Acquista</Button>
              </div>
            </div>
          </div>
        </div>

        </div>
      </Carousel.Item>


        </Carousel>

        </div>
      </div>
    </div>
  )
}

export default inEvidenza;
