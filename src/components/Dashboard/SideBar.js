import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import HistoryIcon from '@mui/icons-material/History';
import MonitorIcon from '@mui/icons-material/Monitor';
import AppsIcon from '@mui/icons-material/Apps';
import './SideBar.css'
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const Sidebar = () => {
  const navigate = useNavigate();

  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={`${classes.toolbar} align`}>
        <div className='admin'>
         <span className='title'>Admin:</span>
         <span className='title-val'>ABCD</span>
        </div>
        <div className='emp'>
            <span className='title'>Emp Id:</span>
            <span className='title-val'>1222332</span>
        </div>
      </div>
      <List>
        <ListItem button>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={()=>{ navigate('/asset/dashboard/assets')}}>
          <ListItemIcon><MonitorIcon /></ListItemIcon>
          <ListItemText primary="Assets" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>< HistoryIcon/></ListItemIcon>
          <ListItemText primary="Asset History" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><AppsIcon/></ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem> 
        <ListItem button>
          <ListItemIcon>< HistoryIcon/></ListItemIcon>
          <ListItemText primary="Report" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
