import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function Formdialog(props){

  const [editValues, setValues] = useState({
    iddoadores: props.iddoadores,
    name: props.name,
    senha: props.senha,
    email: props.email,
    quant: props.quant
  });

  const handleClickDelete = () => {
    axios.delete(`http://localhost:3001/delete${editValues.iddoadores}`).then(() => {
      props.setListClient(
        props.listClient.filter((value) => {
          return value.iddoadores !== editValues.iddoadores;
        })
      );
    });
    handleClose();
  }

  const handleChangeValues = value => {
    setValues(prevValues => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }))
  }

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog open={props.open} 
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Excluir ou Editar</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Deseja excluir ou editar o seu pedido?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>Cancel</Button>
          <Button color="primary" onClick={() => handleClickDelete()}>Excluir</Button>
          <Button>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}