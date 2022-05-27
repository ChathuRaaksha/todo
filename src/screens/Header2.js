import * as React from "react";
import {Link} from 'react-router-dom';
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
export default function Header2() {
    return (
        <AppBar position="static">
          <Toolbar>
            {/*Inside the IconButton, we 
             can render various icons*/}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/*This is a simple Menu 
               Icon wrapped in Icon */}
              <MenuIcon />
            </IconButton>
            {/* The Typography component applies 
             default font weights and sizes */}
    
            <Typography variant="h6" 
              component="div" sx={{ flexGrow: 1 }}>
              Todo App
            </Typography><Link to="/todo">
            <Button color="inherit">Todo</Button></Link>
            <Link to="/">   <Button color="inherit">Logout</Button></Link>
          </Toolbar>
          
        </AppBar>
    );
  }