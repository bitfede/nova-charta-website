import styles from './InEvidenza.module.css';
import { Carousel, Card, Button  } from 'react-bootstrap'

function inEvidenza() {

  const generateCards = () => {
    console.log('helloworld2');
  }

  return (
    <div className={styles.inEvidenzaContainer}>
      <div className={styles.titlesContainer}>
        <h1 className={styles.mainTitle}>In evidenza</h1>
        <div className={styles.titleDecoration} />
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cardDiv}>

        <Carousel className="d-lg-none d-xl-none" controls={true} indicators={false} interval={3000}>

          <Carousel.Item>
            <div className="card" >
              <div className="row no-gutters">
                <div className={styles.cardImageContainer + " col-sm-4"} >
                  <img className={styles.cardImage} src="https://www.novacharta.it/wp-content/uploads/2020/01/RL-98x130.jpg" alt="..." />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h5 className="card-title">Una festa senza fine, Raquel Levy</h5>
                    <p className="card-text">Dal numero 166 di Charta, Francesco Rapazzini ci accompagna a…</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                  <div className="card-body">
                    <span href="#" className="card-link">45€</span>
                    <button type="button" className="card-link btn btn-primary">Compra Ora</button>
                  </div>


                </div>
              </div>
            </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="card" >
            <div className="row no-gutters">
              <div className={styles.cardImageContainer + " col-sm-4"} >
                <img className={styles.cardImage} src="https://www.novacharta.it/wp-content/uploads/2020/01/RL-98x130.jpg" alt="..." />
              </div>
              <div className="col-sm-8">
                <div className="card-body">
                  <h5 className="card-title">Una festa senza fine, Raquel Levy</h5>
                  <p className="card-text">Dal numero 166 di Charta, Francesco Rapazzini ci accompagna a…</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div className="card-body">
                  <span href="#" className="card-link">50€</span>
                  <button type="button" className="card-link btn btn-primary">Compra Ora</button>
                </div>


              </div>
            </div>
          </div>
      </Carousel.Item>

        </Carousel>

        <Carousel className="d-none d-lg-block d-xl-block" controls={false} indicators={false} interval={3000}>

          <Carousel.Item>

          <div className={`${styles.cardWrapperDiv} col-sm-6`}>
            <div className="card" >
              <div className="row no-gutters">
                <div className={styles.cardImageContainer + " col-sm-4"} >
                  <img className={styles.cardImage} src="https://www.novacharta.it/wp-content/uploads/2020/01/RL-98x130.jpg" alt="..." />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h5 className="card-title">Una festa senza fine, Raquel Levy</h5>
                    <p className="card-text">Dal numero 166 di Charta, Francesco Rapazzini ci accompagna a…</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                  <div className="card-body">
                    <span href="#" className="card-link">45€</span>
                    <button type="button" className="card-link btn btn-primary">Compra Ora</button>
                  </div>


                </div>
              </div>
            </div>
          </div>



          <div className={`${styles.cardWrapperDiv} col-sm-6`}>
            <div className="card" >
              <div className="row no-gutters">
                <div className={styles.cardImageContainer + " col-sm-4"} >
                  <img className={styles.cardImage} src="https://www.novacharta.it/wp-content/uploads/2020/01/RL-98x130.jpg" alt="..." />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h5 className="card-title">Una festa senza fine, Raquel Levy</h5>
                    <p className="card-text">Dal numero 166 di Charta, Francesco Rapazzini ci accompagna a…</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                  <div className="card-body">
                    <span href="#" className="card-link">45€</span>
                    <button type="button" className="card-link btn btn-primary">Compra Ora</button>
                  </div>


                </div>
              </div>
            </div>
          </div>

        </Carousel.Item>

        <Carousel.Item>

        <div className={`${styles.cardWrapperDiv} col-sm-6`}>
          <div className="card" >
            <div className="row no-gutters">
              <div className={styles.cardImageContainer + " col-sm-4"} >
                <img className={styles.cardImage} src="https://www.novacharta.it/wp-content/uploads/2020/01/RL-98x130.jpg" alt="..." />
              </div>
              <div className="col-sm-8">
                <div className="card-body">
                  <h5 className="card-title">Una festa senza fine, Raquel Levy</h5>
                  <p className="card-text">Dal numero 166 di Charta, Francesco Rapazzini ci accompagna a…</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div className="card-body">
                  <span href="#" className="card-link">45€</span>
                  <button type="button" className="card-link btn btn-primary">Compra Ora</button>
                </div>


              </div>
            </div>
          </div>
        </div>



        <div className={`${styles.cardWrapperDiv} col-sm-6`}>
          <div className="card" >
            <div className="row no-gutters">
              <div className={styles.cardImageContainer + " col-sm-4"} >
                <img className={styles.cardImage} src="https://www.novacharta.it/wp-content/uploads/2020/01/RL-98x130.jpg" alt="..." />
              </div>
              <div className="col-sm-8">
                <div className="card-body">
                  <h5 className="card-title">Una festa senza fine, Raquel Levy</h5>
                  <p className="card-text">Dal numero 166 di Charta, Francesco Rapazzini ci accompagna a…</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div className="card-body">
                  <span href="#" className="card-link">45€</span>
                  <button type="button" className="card-link btn btn-primary">Compra Ora</button>
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
