import ProjectForm from '../project/ProjectForm'
import styles from './Doar.module.css'

function Doar(){
    return(
        <div className={styles.doar_container}>
            <h1>Escolha por categoria</h1>
        <ProjectForm />
        </div>
    )
}

export default Doar