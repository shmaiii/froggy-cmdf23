import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CreateEntry from '../pages/CreateEntry';
import ViewEntry from '../pages/ViewEntry';
import './Dialogue.css';
import { padding } from '@mui/system';


export default function FormDialog(props) {
//   const [open, setOpen] = React.useState(false);
console.log(props.entry)
  
  const status = props.status;
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    props.setOpen(false);
  };
  let content;
  let title;
  if (status === "create"){
    content = <CreateEntry setCreated={props.setCreated} setEntry={props.setEntry}/>
    title = "Add a diary entry"
  } else {
    content = <ViewEntry entry={props.entry}/>
    title = "Your Diary Entry"
  }

//   if (props.open == true){
//     handleClickOpen();
//   }
  

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={props.open} onClose={handleClose} maxWidth="lg">
        <DialogTitle
          fontFamily={'Public Sans, sans-serif'}
          fontWeight= {"600"}
          fontSize= {"40px"}
          color= {"#01575C"}
        >
        {title} <span id="title-date"> March 12, 2023</span></DialogTitle>
        <DialogContent>
            {content}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} id="dialog-button">
            <div style={{padding: "0px 20px"}}>
              Cancel
            </div>
          </Button>
          <Button onClick={handleClose} id="dialog-button">
          <div style={{padding: "0px 20px"}}>
              Finish
            </div>
            </Button> 
          
        </DialogActions>
      </Dialog>
    </div>
  );
}