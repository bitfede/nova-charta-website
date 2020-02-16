import styles from './StoriaCasa.module.css';
import { Container, Row, Col, Image  } from 'react-bootstrap'

function StoriaCasa() {

  const generateCards = () => {
    console.log('helloworld2');
  }

  return (
    <div className={styles.storiaCasaContainer}>
      <h1 className={styles.mainTitle}>Storia della casa editrice</h1>
      <Row>
        <Col sm="12" lg="7">
          <div className={styles.storiaParaContainer}>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugia
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exer
              stie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            </p>
          </div>
        </Col>
        <Col sm="12" lg="5">
          <Image className={styles.storiaImage} src="img/novacharta-storia.jpg" fluid />
        </Col>
      </Row>
    </div>
  )
}

export default StoriaCasa;
