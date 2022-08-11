import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Axios } from 'axios';

export default function Formdialog(props){

  const [editValues, setValues] = useState();

  const handleClickDelete = () => {
    Axios.delete(`http://localhost:3001/delete${editValues.id}`);
    handleClose();
  }

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog open={props.open} 
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      classes={{root: "dialog"}}
      >
        <DialogTitle>Excluir ou Editar</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Deseja excluir ou editar o seu pedido?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mudar Senha"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClickDelete}>Excluir</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}