import styles from './InEvidenza.module.css';
// import {  } from 'react-bootstrap'

function inEvidenza() {
  return (
    <div className={styles.inEvidenzaContainer}>
      <h1 className={styles.inEvidMainTitle}>In evidenza</h1>
      <div className={styles.titleDecoration} />
    </div>
  )
}

export default inEvidenza;
