import {useState} from 'react';
import {Button} from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"

export default function FormDialog(props) {

  const[editValues, seteditvalues] = useState({
    iddoadores: props.iddoadores,
    name: props.name,
    email: props.email,
    senha:props.senha,
    quant: props.quant,
  })

  const handleEdit = () => {
     axios.put("http://localhost:3001/edit", {
      iddoadores: editValues.iddoadores,
      name: editValues.name, 
      email: editValues.email,
      senha: editValues.senha,
      quant: editValues.quant,
     }).then(() => {
      props.setListClient(
        props.listClient.map((value) => {
          return value.iddoadores == editValues.iddoadores
            ? {
                iddoadores: editValues.iddoadores,
                name: editValues.name,
                email: editValues.email,
                senha: editValues.senha,
                quant: editValues.quant,
              }
            : value;
        })
      );
    });
     handleClose()
     console.log(editValues)
  }

  const handleDelete = () => {
     axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
      props.setListClient(
        props.listClient.filter((value) => {
          return value.iddoadores != editValues.iddoadores;
        })
      );
    });
     handleClose()
  }

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = value => {
    seteditvalues(prevValues => ({
      ...prevValues,
      [value.target.iddoadores] : value.target.value
    }))
  }

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar ou Excluir</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Edite o produto mostrado caso haja erros ou exclua
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do Produto"
            defaultValue={props.name}
            onChange={handleChangeValues}
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email ou informacao do doador"
            defaultValue={props.email}
            onChange={handleChangeValues}
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Senha"
            defaultValue={props.senha}
            onChange={handleChangeValues}
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Quantidade"
            defaultValue={props.quant}
            onChange={handleChangeValues}
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleEdit()}>Salvar</Button>
          <Button onClick={() => handleDelete()}>Excluir</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}