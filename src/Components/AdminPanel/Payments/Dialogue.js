import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

export default function FormDialog({open,handleClose,data,onChange,handleFormSubmit}) {
 const {_id,email,hasPaid,paymentDate}=data

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{_id?"Update user":"Create new user"}</DialogTitle>
        <DialogContent>
         <form>
         {/* <TextField id="_id" value={_id} onChange={e=>onChange(e)} placeholder="Enter ID" label="ID" variant="outlined" margin="dense" fullWidth /> */}
             <TextField id="email" value={email} onChange={e=>onChange(e)} placeholder="email" label="email" variant="outlined" margin="dense" fullWidth />
             <TextField id="hasPaid" value={hasPaid} onChange={e=>onChange(e)} placeholder="hasPaid" label="hasPaid" variant="outlined" margin="dense" fullWidth />
             <TextField id="paymentDate" value={paymentDate} onChange={e=>onChange(e)} placeholder="paymentDate" label="paymentDate" variant="outlined" margin="dense" fullWidth />
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
            {_id?"Update":"Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}