import styles from './InEvidenza.module.css';
import { Carousel, Card, Button  } from 'react-bootstrap'

function inEvidenza(props) {
  console.log("PROPS - IN EVIDENZA:", props);

  //UTILITY FX for desktop generation of card row
  const placeCardRow = (cardsData) => {
    console.log(cardsData, "ASD", `questi sono ${Object.keys(cardsData).length}`); // DEBUG
    let theCardsRowLeft, theCardsRowCenter, theCardsRowRight;
    let styletoApplyShade, styletoApplyCard;
    const totalContentLen = 140;

    // LEFT card
    let titleLen = cardsData.left.name.length;
    let paragraphLen = cardsData.left.short_description.length;
    let paraAllowedLen = totalContentLen - titleLen
    // console.log(totalContentLen, titleLen, paragraphLen, paraAllowedLen); // DEBUG
    let short_description_cut = cardsData.left.short_description.substring(0, paraAllowedLen);
    if (short_description_cut < cardsData.left.short_description) {
      short_description_cut = short_description_cut + '...'
    }
    if (Object.keys(cardsData).length === 1) {
      styletoApplyCard = `${styles.cardContentDiv3}`
      styletoApplyShade = `${styles.shadedHalf} ${styles.shadedHalfRight}`
    } else {
      styletoApplyCard = `${styles.cardContentDiv1}`
      styletoApplyShade = `${styles.shadedHalf}`
    }
    theCardsRowLeft = (
      <div key={`inevid-left`} className={`${styles.cardContainerDesk} col-sm-4`}>
        <div style={{backgroundImage: `url('${cardsData.left.images[0].src}')`}} className={styletoApplyCard}>
          <div className={styletoApplyShade}>
            <h3 className={styles.cardTitle}><a target="_blank" href={cardsData.left.permalink}>{cardsData.left.name}</a></h3>
            <div className={styles.cardDescription} dangerouslySetInnerHTML={{__html: short_description_cut}}></div>
            <div className={styles.ctaPriceDiv}>
              <span>€{cardsData.left.price}</span> <Button target="_blank" href={cardsData.left.permalink} variant="success" size="sm">Acquista</Button>
            </div>
          </div>
        </div>
      </div>
    )

    // CENTER card
    if (cardsData.center) {
      titleLen = cardsData.center.name.length;
      paragraphLen = cardsData.center.short_description.length;
      paraAllowedLen = totalContentLen - titleLen
      // console.log(paraAllowedLen); // DEBUG
      short_description_cut = cardsData.center.short_description.substring(0, paraAllowedLen);
      if (short_description_cut < cardsData.center.short_description) {
        short_description_cut = short_description_cut + '...'
      }
      if (Object.keys(cardsData).length === 2) {
        styletoApplyCard = `${styles.cardContentDiv3}`
        styletoApplyShade = `${styles.shadedHalf} ${styles.shadedHalfRight}`
      } else {
        styletoApplyCard = `${styles.cardContentDiv2}`
        styletoApplyShade = `${styles.shadedHalf}`
      }
      theCardsRowCenter = (
        <div key={"inevid-center"} className={`${styles.cardContainerDesk} col-sm-4`}>
          <div style={{backgroundImage: `url('${cardsData.center.images[0].src}')`}} className={styletoApplyCard}>
            <div className={styletoApplyShade}>
              <h3 className={styles.cardTitle}><a target="_blank" href={cardsData.center.permalink}>{cardsData.center.name}</a></h3>
                <div className={styles.cardDescription} dangerouslySetInnerHTML={{__html: short_description_cut}}></div>
              <div className={styles.ctaPriceDiv}>
                <span>€{cardsData.center.price}</span> <Button target="_blank" href={cardsData.center.permalink} variant="success" size="sm">Acquista</Button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // RIGHT card
    if (cardsData.right) {
      titleLen = cardsData.right.name.length;
      paragraphLen = cardsData.right.short_description.length;
      paraAllowedLen = totalContentLen - titleLen
      // console.log(paraAllowedLen); // DEBUG
      short_description_cut = cardsData.right.short_description.substring(0, paraAllowedLen);
      if (short_description_cut < cardsData.right.short_description) {
        short_description_cut = short_description_cut + '...'
      }
      theCardsRowRight = (
        <div key={"inevid-right"} className={`${styles.cardContainerDesk} col-sm-4`}>
          <div style={{backgroundImage: `url('${cardsData.right.images[0].src}')`}} className={styles.cardContentDiv3}>
            <div className={`${styles.shadedHalf} ${styles.shadedHalfRight}`}>
              <h3 className={styles.cardTitle}><a target="_blank" href={cardsData.right.permalink}>{cardsData.center.name}</a></h3>
              <div className={styles.cardDescription} dangerouslySetInnerHTML={{__html: short_description_cut}}></div>
              <div className={styles.ctaPriceDiv}>
                <span>€{cardsData.right.price}</span> <Button target="_blank" href={cardsData.right.permalink} variant="success" size="sm">Acquista</Button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return [theCardsRowLeft, theCardsRowCenter, theCardsRowRight]
  }

  // DESKTOP CARDS GENERATION
  const generateCardsDesktop = () => {
    if (props.data.error) {
      return
    }
    const rawData = props.data
    let organizedData = []
    let triad = {}
    let counter = 0;
    for (let i = 0; i < rawData.length; i++) {
      if (counter === 0) {
        triad.left = rawData[i];
      } else if (counter === 1) {
        triad.center = rawData[i]
      } else if (counter === 2) {
        triad.right = rawData[i]
      } else {
        counter = 0;
        organizedData.push(triad)
        triad = {}
        triad.left = rawData[i]
      }
      if (i === rawData.length - 1) {
        organizedData.push(triad)
        triad = {}
      }
      counter++;
    }

    // console.log("<datafinal> ", organizedData); // DEBUG

    let generatedCards = organizedData.map( (element, index) => {
      return (
        <Carousel.Item key={`desktop-card-${index}`}>
          <div className={styles.carouselWrapperDeskt}>
            {placeCardRow(element)}
          </div>
        </Carousel.Item>
      )
    })

    return generatedCards
  }

  // MOBILE CARDS GENERATION
  const generateCardsMobile = () => {
    if (props.data.error) {
      return
    }
    let generatedCards = props.data.map( (element, index) => {
      const totalContentLen = 140;
      let titleLen = element.name.length;
      let paragraphLen = element.short_description.length;
      let paraAllowedLen = totalContentLen - titleLen
      let short_description_cut = element.short_description.substring(0, paraAllowedLen);
      if (short_description_cut < element.short_description) {
        short_description_cut = short_description_cut + '...'
      }
      return (
        <Carousel.Item key={`inevid-${index}`}>
          <div style={{backgroundImage: `url('${element.images[0].src}')`}} className={styles.cardContainer}>
            <div className={`${styles.shadedHalf} ${styles.shadedHalfMobile}`}>
              <h3 className={styles.cardTitle}><a target="_blank" href={element.permalink}>{element.name}</a></h3>
              <div className={styles.cardDescription} dangerouslySetInnerHTML={{__html: short_description_cut}}></div>
              <div className={styles.ctaPriceDiv}>
                <span>€{element.price}</span> <Button target="_blank" href={element.permalink} variant="success" size="sm">Acquista</Button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      )
    })
    return generatedCards
  }


  let mainTitleElem

  if (props.data.error) {
    mainTitleElem = ("")
  } else {
    mainTitleElem = (<h1 className={styles.mainTitle}>In evidenza</h1>)
  }

  return (
    <div className={styles.inEvidenzaContainer}>
      <div className={styles.titlesContainer}>
        {mainTitleElem}
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cardDiv}>

        {/* MOBILE CAROUSEL */}
        <Carousel className="d-lg-none d-xl-none" controls={false} indicators={true} interval={4000}>

        {generateCardsMobile()}

        </Carousel>

        {/* DESKTOP CAROUSEL */}
        <Carousel className="d-none d-lg-block d-xl-block" controls={false} indicators={true} interval={4000}>

          {generateCardsDesktop()}

        </Carousel>

        </div>
      </div>
    </div>
  )
}

export default inEvidenza;
