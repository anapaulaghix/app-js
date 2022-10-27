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
        id={props.id}
        produto={props.produtos}
        doador={props.doador}
        categoria={props.categoria}
        quant={props.quant}
        data_={props.data_}
         listClient={props.listClient}
         setListClient={props.setListClient}/>
       
        <div className={styles.p}>
            <h3 className={styles.h1}>Pedido Realizado!</h3> 
            <ul className={styles.social_list}>
                <li><BiEdit onClick={() => {handleClick()}}/></li>
                <li><MdDelete onClick={() => {handleClick()}}/></li>
            </ul>
            <p >Nome do produto: {props.produtos}</p>
            <p>Email/Nome pessoal: {props.doador}</p>
            <p>Categoria: {props.categoria}</p>
            <p>Quantidade: {props.quant}</p>
            <p>Data realizada: {props.data_}</p>
        </div>
        </>
    )
}
export default Doadores