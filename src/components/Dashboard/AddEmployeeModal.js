import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    position: 'relative', // Ensure position for close button
  },
  formControl: {
    justifyContent: 'center',
    marginTop: '8px !important'
  },
  textCenter: {
    textAlign: 'center'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(2),
  },
  cancelButton: {
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  addButton: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
}));

function AddEmployeeModal({ open, handleClose }) {
  const classes = useStyles();
  const [employeeName, setEmployeeName] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');

  const handleAddEmployee = () => {
    // Implement logic to add employee
    console.log('Employee added:', { employeeName, mobile, designation, department, location, status });
    handleClose();
  };

  const handleCls = () => {
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modal}
      aria-labelledby="add-employee-modal-title"
      aria-describedby="add-employee-modal-description"
    >
      <Box className={classes.paper}>
        <IconButton
          edge="end"
          aria-label="close"
          onClick={handleCls}
          sx={{
            position: 'absolute',
            top: '8px',
            right: '8px',
          }}
        >
          <CloseIcon />
        </IconButton>
        <h2 id="add-employee-modal-title" className={classes.textCenter}>Add Employee</h2>
        <form>
          <div className={classes.formGrid}>
            <TextField
              label="Name"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="status">Status</InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                inputProps={{
                  name: 'status',
                  id: 'status',
                }}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={classes.actionsContainer}>
            <Button
              variant="contained"
              color="error"
              className={classes.cancelButton}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              className={classes.addButton}
              onClick={handleAddEmployee}
            >
              Add
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
}

export default AddEmployeeModal;
