import Input from '../form/input'
import Select from '../form/Select'
import styles from './ProjectForm.module.css'

function ProjectForm(){
    return (
        <form className={styles.form}> 
        <Select />
        <Input
        type="text"
        text="Especificação do produto"
        name="name"
        placeholder="Especificação do produto. Ex: arroz, feijão, etc."
         />
            <div>
            <input type='submit' value='Adicionar ao carrinho'></input>
            </div>
        </form>
    )
}

export default ProjectForm