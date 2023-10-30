import React from 'react'
import { Box, Link as MuiLink, Divider, Button, Typography, MenuItem, IconButton, Menu } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <Box sx={{ backgroundColor: "#e3e6ec", height: "50px", marginTop: 2, display: "flex", alignItems: "center", paddingLeft: 17, }}>
                <MuiLink component={RouterLink} sx={{ textDecoration: "none", cursor: "pointer", color: "rgb(55 65 112)", fontSize: "20px" }} to="/">Home</MuiLink>
            </Box>
            <Divider sx={{background:"darkgrey"}}  />
            <Box sx={{ backgroundColor: "#e3e6ec", display: "flex", p: 2, alignItems: "center", justifyContent: "space-around" }}>
                <Box sx={{ fontSize: "20px" }}>
                    <MuiLink component={RouterLink} sx={{ textDecoration: "none", marginRight: 3, cursor: "pointer", color: "rgb(55 65 112)" }} to="/">License</MuiLink>
                    <MuiLink component={RouterLink} sx={{ textDecoration: "none", marginRight: 3, cursor: "pointer", color: "rgb(55 65 112)" }} to="/">Privacy policy</MuiLink>
                    <MuiLink component={RouterLink} sx={{ textDecoration: "none", marginRight: 3, cursor: "pointer", color: "rgb(55 65 112)" }} to="/">About</MuiLink>
                    <MuiLink component={RouterLink} sx={{ textDecoration: "none", marginRight: 3, cursor: "pointer", color: "rgb(55 65 112)" }} to="/">Advertise here</MuiLink>
                    <Button sx={{ marginRight: 3, backgroundColor: "#86d4f5", fontWeight: 700, textTransform: 'none' }} variant='contained'>Twitter</Button>
                    <Button sx={{ backgroundColor: "#0084ff", fontWeight: 700, textTransform: 'none' }} variant='contained'>Facebook</Button>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography>Copyright @ 2023. Bootdey created by</Typography>
                    <Typography sx={{ paddingLeft: 1, color: "#94df4a", cursor: "pointer" }}>Deyson</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Footer
