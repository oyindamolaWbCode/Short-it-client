import { Modal, Box } from '@mui/material';
import React, { useState } from 'react';


const ModalBox = () => {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  
  const style = {
    backgroundColor: 'red',
    margin: 'auto',
  };


  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
      </Modal>
    </>
  )
}

export default ModalBox