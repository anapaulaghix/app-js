import ProjectForm from '../project/ProjectForm'
import styles from './Receber.module.css'

function Receber(){
    return(
        <div className={styles.receber_container}>
            <h1>Escolha o que deseja</h1>
            <ProjectForm />
        </div>
    )
}

export default Receber