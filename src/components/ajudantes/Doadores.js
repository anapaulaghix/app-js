import React from "react";
import styles from '../pages/Produtos.module.css'
import FormDialog from './dialogForm'
import {MdDelete} from 'react-icons/md'
import {BiEdit} from 'react-icons/bi'

function Doadores(props){
    const [open, setOpen] = React.useState(false);

    const HandleDeleteValues = () => {
        setOpen(true);
    }
   
    const HandleEditValues = () => {
        setOpen(true);
    }


    return (
        <>
        <FormDialog open={open} setOpen={setOpen} senha={props.senha} name={props.name} email={props.email}
        id={props.iddoadores} produtos={props.produtos} quant={props.quant}/>
        <div className={styles.container}>
            <h3 className={styles.title}>Pedido Realizado!</h3> 
            <ul className={styles.social_list}>
                <li><BiEdit onClick={() => HandleEditValues()}/></li>
                <li><MdDelete onClick={() => HandleDeleteValues()}/></li>
            </ul>
            <p className={styles.name}>Nome: {props.name}</p>
            <p className={styles.senha}>Senha: {props.senha}</p>
            <p className={styles.p}>Quantidade: {props.quant}</p>
            <p>Produtos:</p>
        </div>
        </>
    )
}
export default Doadores