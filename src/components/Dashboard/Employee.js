import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Button, ButtonGroup } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import AddEmployeeModal from './AddEmployeeModal'; // Import the AddEmployeeModal component
import "./Employee.css"; // Add your CSS file for Employee styling

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
    },
    filterContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '30px',
        marginBottom: theme.spacing(2),
    },
}));

function Employee() {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleEdit = (id) => {
        // Implement edit logic here
        console.log(`Edit employee with ID: ${id}`);
    };
    

    // Sample data for the DataGrid
    const rows = [
        { id: 1, Name: 'John Doe', Mobile: '1234567890', Designation: 'Software Engineer', Department: 'Engineering', Location: 'Airoli', Status: 'Active' },
        { id: 2, Name: 'Jane Doe', Mobile: '9876543210', Designation: 'HR Manager', Department: 'HR', Location: 'Borivali', Status: 'Inactive' },
        // Add more rows as needed
    ];

    // Define columns for the DataGrid
    const columns = [
        { field: 'Name', headerName: 'Name', width: 200, sortable: true },
        { field: 'Mobile', headerName: 'Mobile', width: 150, sortable: true },
        { field: 'Designation', headerName: 'Designation', width: 200, sortable: true },
        { field: 'Department', headerName: 'Department', width: 200, sortable: true },
        { field: 'Location', headerName: 'Location', width: 150, sortable: true },
        { field: 'Status', headerName: 'Status', width: 150, sortable: true },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            sortable: false,
            renderCell: (params) => (
                <Button variant="contained" color="primary" onClick={() => handleEdit(params.row.id)}>Edit</Button>
            ),
        },
    ];

    // State for filtering and searching
    const [filterValue, setFilterValue] = useState('');
    const [filteredRows, setFilteredRows] = useState(rows);

    // Function to handle search filter
    const handleSearch = (event) => {
        const { value } = event.target;
        const lowercaseValue = value.toLowerCase();
        setFilterValue(lowercaseValue);

        const filteredRows = rows.filter(row =>
            Object.values(row).some(value =>
                String(value).toLowerCase().includes(lowercaseValue)
            )
        );

        setFilteredRows(filteredRows);
    };

    // Function to reset filters
    const resetFilters = () => {
        setFilterValue('');
        setFilteredRows(rows);
    };

    // Function to handle closing of the modal
    const handleClose = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <main className={classes.content}>
                <Container maxWidth="lg">
                    <div className={classes.filterContainer}>
                        {/* <Box display="flex" alignItems="center"> */}
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginRight: 10 }}
                            startIcon={<AddCircleOutlineIcon />} // Add the icon as startIcon
                            onClick={handleOpenModal}
                        >
                            Add Employee
                        </Button>
                        <TextField
                            label="Search"
                            variant="standard"
                            onChange={handleSearch}
                            style={{ width: 400 }}
                        />
                        {/* </Box> */}
                        {/* <Box display="flex" alignItems="center" justifyContent={'centr'}> */}
                        <ButtonGroup variant="contained" style={{ boxShadow: 'none' }}>
                            <Button className="btn-border" variant="contained" onClick={resetFilters}>
                                Reset
                            </Button>
                            {/* Add buttons for other actions */}
                        </ButtonGroup>
                        {/* </Box> */}
                    </div>
                    <div style={{ height: 400, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ height: 350, marginLeft: '2%', width: '95%', flexGrow: 1 }}>
                            <DataGrid
                                rows={filteredRows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5, 10, 20]}
                            />
                        </div>
                    </div>
                </Container>
                <AddEmployeeModal open={openModal} handleClose={handleClose} />

            </main>
        </div>
    );
}

export default Employee;
