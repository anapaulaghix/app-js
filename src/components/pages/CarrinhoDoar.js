import { useEffect, useState } from "react"
import styles from './Company.module.css'
import Axios from "axios"
import Doadores from '../ajudantes/Doadores'

function Carrinho(){
    const [listClient, setListClient] = useState();
    const [values, setvalues] = useState();
    
    const handleChangeValues = (value) => {
        setvalues((prevvalue) => ({
            ...prevvalue,
            [value.target.name]: value.target.value,
        }))
    }
    const handleClickButton = () => {
        Axios.post("http://localhost:3001/register", {
            name: values.name,
            email: values.email,
            senha: values.senha,
            quant: values.quant,
        }).then(() => {
            Axios.post("http://localhost:3001/search", {
                name: values.name,
                email: values.email,
                senha: values.senha,
                quant: values.quant,
            }).then((response) => {
                setListClient([
                    ...listClient,
                    {
                        id: response.data[0].id,
                        name: values.name,
                        email: values.email,
                        senha: values.senha,
                        quant: values.quant,
                    }
                ])
            })
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/pedido").then((response)=>{
            setListClient(response.data);
        })
    }, [])

    return(
        <div className={styles.field1}>
        <form>
        <h3>Controle de doações</h3>
        <label>Digite aqui o nome da pessoa, se foi doação ou solicitação e qual foi o produto</label>
        <label>Disponível apenas para você</label>
        <br></br>
        <input type="text" 
        name="name"
        placeholder="Nome Completo" 
        onChange={handleChangeValues}></input>
        
        <input type="text" name="email"
        placeholder="Email ou informação sobre de quem doou" 
        onChange={handleChangeValues}/> 

       <input type="text" name="senha"
        placeholder="Descricao do produto" 
        onChange={handleChangeValues}/> 

        <input type="number" name="quant" placeholder="Quantidade de produtos" 
        onChange={handleChangeValues}></input>
        
       <button className={styles.form_step} onClick={() => handleClickButton() }>Enviar</button>
        </form>
        {typeof listClient != "undefined" &&
        listClient.map((value) => (
       <Doadores key={value.id} 
            listClient={listClient} 
            setListClient={setListClient}
            id={value.iddoadores}
            name={value.name}
            email={value.email}
            senha={value.senha}
            quant={value.quant}
            />
        ))}
        </div>
    )
}

export default Carrinho