import styles from './StoriaCasa.module.css';
import { Container, Row, Col, Image  } from 'react-bootstrap'

function StoriaCasa() {

  const generateCards = () => {
    console.log('Storia Casa Editrice - Component');
  }

  return (
    <div className={styles.storiaCasaContainer}>
      <h1 className={styles.mainTitle}>Storia della casa editrice</h1>
      <Row>
        <Col sm="12" lg="7">
          <div className={styles.storiaParaContainer}>
            <p>
              Nova Charta è una <b>casa editrice veneta che da oltre vent’anni</b>, grazie alla passione e alla lungimiranza del suo editore, si occupa di <b>raccontare la storia e l’evoluzione del libro</b> dal manoscritto alla rete, attraverso la <b>pubblicazione di riviste, libri, corsi di approfondimento, e-book</b>. Fondata e diretta da <b>Vittoria de Buzzaccarini</b>, con sedi a Padova e Venezia, promuove pubblicazioni ricercate e progetti di largo respiro.
            </p>
            <p>
              <b>A Nova Charta fanno capo due prestigiose riviste: <i>Charta</i></b>, che quest’anno compie 25 anni e che è l’unica rivista illustrata italiana dedicata a bibliofili, librai antiquari, collezionisti, appassionati di cultura e storia dell’editoria; e <b><i>Alumina</i></b> che dal 2003 propone articoli su antichi codici, biblioteche, sull’arte della miniatura, accompagnati da immagini di rara bellezza stampate con il quinto colore in oro. Dal 2008 con il progetto <b><i>Salviamo un Codice</i></b> ha sostenuto il recupero di antichi codici nelle biblioteche di Cesena, Vicenza, Bologna, Padova, Roma, Venezia, Firenze e Torino.
            </p>
            <p>
              L’iniziativa è collegata alla stampa dei facsimili delle opere restaurate e alla collana <b><i>Quaderni di Restauro</i></b>, i saggi che raccontano l’intervento.  Fra le opere salvate e pubblicate in facsimile: il Codice Sforza di Ludovico il Moro, il diario di viaggio di Vincenzo Scamozzi, il taccuino di Gaspar van Wittel con gli studi per rendere navigabile il Tevere.
            </p>
            <p>
              Nella collana <b><i>Cimelia</i></b> trovano invece spazio argomenti specifici come <i>Dal manoscritto alla rete</i> a cura di Vittoria de Buzzaccarini, <i>Le stampe originali</i> di Alessandro Gusmano, <i>Il manoscritto islamico</i> di A. Balistrieri, G. Solmi, D. Villani. Nel 2013 fece notizia la pubblicazione di <i>Sì è il re, le memorie private di un sovrano</i>, uno dei diari autografi di Vittorio Emanuele III, il cui aiutante di campo Brunoro Buzzaccarini era il padre di Vittoria. Nova Charta promuove inoltre il progetto <i>Salviamo una Biblioteca</i> e le <i>Cattedre Ambulanti</i>: corsi itineranti di aggiornamento che approfondiscono materie legate alla conoscenza del libro antico delle stampe antiche e moderne.
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
