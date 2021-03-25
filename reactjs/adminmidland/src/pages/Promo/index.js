// componentDidMount(){
//     axios({
//         method:"GET",
//         url:"http://localhost:8000/pesan/",
//         data: this.state
//     })
//     .then(res => {
//         this.setState({
//             email: res.data,
//         });
//         console.log(res.data);
//     })
//     .catch(e => {
//         console.log(e);
//     });

// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Profil from '../../components/Profil';
import { Apartment, ContactMail, HomeWork, Photo, PowerSettingsNewOutlined, Store } from '@material-ui/icons';
import { logo } from '../../assets';
import Promos from '../../components/Promos';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#299BD7'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Promo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src={logo} style={{height:60, width:50}} />
          <Typography variant="h6" noWrap>
            Admin Midland Properti
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List component="nav" aria-label="main">
            <ListItem button>
                <ListItemIcon>
                    <HomeWork/>
                </ListItemIcon>
                <ListItemText primary="Company Profile"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Store/>
                </ListItemIcon>
                <ListItemText primary="Promo"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Apartment/>
                </ListItemIcon>
                <ListItemText primary="Our Project"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Photo/>
                </ListItemIcon>
                <ListItemText primary="Gallery"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ContactMail/>
                </ListItemIcon>
                <ListItemText primary="Customer Care"/>
            </ListItem>
          </List>
          <Divider />
          <List component="nav" aria-label="main">
            <ListItem button>
                  <ListItemIcon>
                      <PowerSettingsNewOutlined/>
                  </ListItemIcon>
                  <ListItemText primary="Logout"/>
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Promos/>
      </main>
    </div>
  );
}
