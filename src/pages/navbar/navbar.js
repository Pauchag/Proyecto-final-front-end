import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



export class Navbar extends Component {

    state = {
        root: {
            flexGrow: '1',
        },
        menuButton: {
            marginRight: '16px',
        }
    }
    render() {
        return (
            <div>
                <div className={this.state.root}>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" className={this.state.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit">
                                Fleche
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>

            </div>
        )
    }
}

export default Navbar
