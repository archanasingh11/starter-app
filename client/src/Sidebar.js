import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InboxIcon from '@mui/icons-material/Inbox';
import './Sidebar.css';


const Sidebar = () => {

    const [state, setState] = React.useState({
        left: false
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <PermContactCalendarIcon />
                </ListItemIcon>
                <ListItemText primary={"Contact"} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <List>
          <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Inbox"} />
            </ListItemButton>
          </ListItem>
          </List>
        </Box>
      );

  return (
    <div className='Sidebar'>
            <MenuIcon
            onClick={toggleDrawer("left", true)
        }
        />
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer(left, false)}
          >
            {list(anchor)}
          </Drawer>
    
    </div>
  )
}

export default Sidebar
