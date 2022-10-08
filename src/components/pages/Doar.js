import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alimentos from '../../img/Alimentos.png'
import Brinquedos from '../../img/brinquedos.png'
import Higiene from '../../img/higiene.png'
import Moveis from '../../img/pngwing.png'
import Pets from '../../img/petsss.jpg'
import Roupas from '../../img/doacao-de-roupas.png'
import styles from './DoarReceber.module.css'
function Doar() {
  return (
    <Container>
    <Row>
        <h1>Escolha por categorias</h1>
        <p>Escolha as categorias que quer doar e digite</p>
        <Card  style={{ width: '20rem', margin:'auto' }}>
        <Card.Img className={styles.img} variant="top" src={Alimentos} />
        <Card.Body>
          <Card.Title>Alimentos</Card.Title>
          <Card.Text>
            Digite o que deseja doar abaixo. Somente alimentos não perecíveis.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            <input placeholder='Digite aqui' type="text" name="produtos"></input>
          </small>
        </Card.Footer>
      </Card>


      <Card style={{ width: '20rem', margin:'auto' }}>
        <Card.Img className={styles.img}  variant="top" src={Brinquedos} />
        <Card.Body>
          <Card.Title>Brinquedos</Card.Title>
          <Card.Text>
            Digite o que deseja doar abaixo. Pode ser qualquer tipo de brinquedo.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
          <input placeholder='Digite aqui' type="text" name="produtos"></input>
          </small>
        </Card.Footer>
      </Card>


      <Card style={{ width: '20rem', margin:'auto' }}>
        <Card.Img className={styles.img}  variant="top" src={Higiene} />
        <Card.Body>
          <Card.Title>Higiene</Card.Title>
          <Card.Text>
          Digite o que deseja doar abaixo. Higiene pessoal(escovas de dente, etc) e geral (para a casa).
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
          <input placeholder='Digite aqui' type="text" name="produtos"></input>
          </small>
        </Card.Footer>
      </Card>


      <Card style={{ width: '20rem', margin:'auto' }}>
        <Card.Img className={styles.img}  variant="top" src={Moveis} />
        <Card.Body>
          <Card.Title>Móveis</Card.Title>
          <Card.Text>
            Móveis em geral: sofa, mesa, cama, etc.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
          <input placeholder='Digite aqui' type="text" name="produtos"></input>
          </small>
        </Card.Footer>
      </Card>


      <Card style={{ width: '20rem', margin:'5% 0'}}>
        <Card.Img className={styles.img} variant="top" src={Pets} />
        <Card.Body>
          <Card.Title>Animais</Card.Title>
          <Card.Text>
           Relacionados a animais: ração e gaiolas, etc.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
          <input placeholder='Digite aqui' type="text" name="produtos"></input>
          </small>
        </Card.Footer>
      </Card>


      <Card style={{ width: '20rem', margin:'auto', border:'8px' }}>
        <Card.Img className={styles.img} variant="top" src={Roupas} />
        <Card.Body>
          <Card.Title>Roupas</Card.Title>
          <Card.Text>
           Qualquer tipo de roupa ou calçado. Para criancas ou adultos, feminino ou masculino.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
             <input placeholder='Digite aqui' type="text"  name="produtos"></input></small>
        </Card.Footer>
      </Card>
    </Row>
    </Container>
  );
}

export default Doar;