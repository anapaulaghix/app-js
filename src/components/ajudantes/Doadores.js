import React from "react";
import styles from '../pages/Produtos.module.css'
import FormDialog from './dialogForm'
import {MdDelete} from 'react-icons/md'
import {BiEdit} from 'react-icons/bi'

function Doadores(props){
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true)
    }

    return (
        <>
        <FormDialog open={open} setOpen={setOpen} 
         name={props.name} 
         email={props.email}
         senha={props.senha}
         quant={props.quant}
         id={props.iddoadores} 
         listClient={props.listClient}
         setListClient={props.setListClient}/>
        <
            div className={styles.container}>
            <h3 className={styles.title}>Pedido Realizado!</h3> 
            <ul className={styles.social_list}>
                <li><BiEdit onClick={() => {handleClick()}}/></li>
                <li><MdDelete onClick={() => {handleClick()}}/></li>
            </ul>
            <p>Nome: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Senha: {props.senha}</p>
            <p>Quantidade: {props.quant}</p>
        </div>
        </>
    )
}
export default Doadores