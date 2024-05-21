// Dashboard.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Sidebar from './SideBar';
import Header from '../Header/Header';
import { Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
 
function Dashboard() {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
    
     <Sidebar/>
      <Header/>
      <main className={classes.content}>
        <Container maxWidth="md">
          <div>Dashboard</div>
        </Container>
      </main>
    
    </div>
  );
}

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <p>Welcome to the dashboard!</p>
//       {/* Add your dashboard content here */}
//     </div>
//   );
// }

export default Dashboard;
