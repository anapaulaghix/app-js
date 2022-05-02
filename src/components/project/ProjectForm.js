import styles from './ProjectForm.module.css'

function ProjectForm(){
    return (
        <form> 
            <select name="category_id">
                <option>Selecione o tipo de produto</option>
            </select>
            <div>
            <input type='submit' value='Adicionar ao carrinho'></input>
            </div>
        </form>
    )
}

export default ProjectForm