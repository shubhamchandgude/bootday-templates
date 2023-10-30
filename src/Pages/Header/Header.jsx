import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Link as MuiLink, MenuItem, IconButton, Menu, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Header() {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{ height: "72px", backgroundColor: "#111e2d", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: 21, paddingRight: 13 }}>
                <MuiLink component={RouterLink} to="/" sx={{ fontSize: "25px", fontWeight: 700, color: "white", textDecoration: "none", cursor: "pointer" }}>
                    Bootdey</MuiLink>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton aria-controls="menu" aria-haspopup="true" onClick={handleMenuOpen} >
                        <AccountCircleIcon sx={{ fontSize: "40px", color: "white"}} />
                        <Typography sx={{ paddingTop: "16px", color:"white"}}>
                        <ArrowDropDownIcon  />
                        </Typography>
                    </IconButton>
                    <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem sx={{ pr: 20, pl: 5, pb: 2 }} onClick={handleMenuClose}><MuiLink component={RouterLink} to="/login" sx={{ color: "#868aa8", textDecoration: "none" }}>Login</MuiLink></MenuItem>
                        <MenuItem sx={{ pr: 20, pl: 5, pb: 2 }} onClick={handleMenuClose}><MuiLink component={RouterLink} to="/signup" sx={{ color: "#868aa8", textDecoration: "none" }}>Sign Up</MuiLink></MenuItem>
                    </Menu>
                </Box>
            </Box>

            <Box sx={{ display: "flex", height: "72px", alignItems: "center" }}>
                <Box sx={{ marginLeft: "8rem", display: "flex", fontSize: 20 }}>
                    <MuiLink component={RouterLink} to="/snippets" sx={{ textDecoration: "none", paddingRight: 7, color: "#868aa8", cursor: "pointer" }}>Snippets</MuiLink>
                    <MuiLink component={RouterLink} to="/templates" sx={{ paddingRight: 7, textDecoration: "none", color: "#868aa8", cursor: "pointer" }}>Templates</MuiLink>
                    <MuiLink component={RouterLink} to="/reactnative" sx={{ textDecoration: "none", color: "#868aa8", cursor: "pointer" }}>React native</MuiLink>
                </Box>
            </Box>
        </>
    )
}

export default Header;
