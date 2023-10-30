import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Card, Divider, Grid, Input, Link as MuiLink, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function Home() {
    const navigate = useNavigate()

    const trending = [
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-1284.png",
            name: "Bs5 Dark Footer",
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-544.png",
            name: "Shopping Cart Table"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-640.png",
            name: "Edit Profile Page"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-1093.png",
            name: "Shopping Cart With Selected Products Order Summary And Checkout Button"
        },
    ]

    const latest = [
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-1432.png",
            name: "Social Network Multiple Image Post"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-1418.png",
            name: "Ecommerce Products With Image Description Colors And Add Button"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-1417.png",
            name: "Ecommerce Checkout With Customer Info And Order Summary"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-1424.png",
            name: "Colorful Testimonial"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-1415.png",
            name: "File Manager With Folders Recent Files And Members"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-1377.png",
            name: "Latest Arrivals Products"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-1373.png",
            name: "Products Grid With Hove Icons"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-1374.png",
            name: "Blog Post Grid Cards"
        },
    ]

    const popular = [
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-729.png",
            name: "Whatsapp Web Chat Template"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-1094.png",
            name: "Events Card Widget"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-110.png",
            name: "Bootstrap 3 Toggle Switch Buttons"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-1265.png",
            name: "Timeline Steps"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-496.png",
            name: "Filter Search Result Page"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-505.png",
            name: "User Profile With Friends And Chat"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-213.png",
            name: "Shopping Cart"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-433.png",
            name: "Product Full Detail"
        },
    ]

    const other = [
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-1256.png",
            name: "Meet Our Experts"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-999.png",
            name: "Bs4 Social Friends"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-425.png",
            name: "Rating Contacts"
        },
        {
            image: "https://www.bootdey.com/files/SnippetsImages/bootstrap-snippets-859.png",
            name: "Bs4 Shop Product List"
        },
    ]

    return (
        <>
            <Header />
            <Box sx={{ backgroundColor: "#e3e6ec", height: "100%" }}>
                <Box sx={{ paddingLeft: 10, paddingY: 7, color: "rgb(55 65 112)", backgroundImage: `url('https://www.bootdey.com/img/overlay.svg')` }}>
                    <Typography sx={{ fontSize: "25px", fontWeight: 900 }}> Free bootstrap snippets and html examples</Typography>
                    <Typography sx={{ width: "800px", letterSpacing: 3, fontSize: "20px", lineHeight: 2 }}>Free code snippets, examples, design elements, playground and components built with bootstrap framework, html and css</Typography>
                </Box>
                <Box sx={{ height: "74px", backgroundColor: "white", marginX: 10, display: "flex", justifyContent: "center" }}>
                    <Box sx={{ width: "1395px", display: "flex", alignItems: "center", }}>
                        <TextField
                            label="Search..."
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#ebedf2", borderRadius: "20px", height: 45 }}>
                                                <Typography sx={{ fontSize: "30px", fontWeight: 900, color: "rgb(160 161 167)", paddingY: 1, px: 3 }}>
                                                    <SearchIcon />
                                                </Typography>
                                            </Box>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4, fontSize: "32px", fontWeight: 700, color: "rgb(55 65 112)" }}>Trending snippets</Box>
                <Grid container spacing={5} sx={{ display: "flex", justifyContent: "center", marginTop: "4px" }} >
                    {
                        trending.map((item) => {
                            return (
                                <>
                                    <Grid item md={2.5} sm={6} xs={12}>
                                        <Card sx={{ height: "100%", boxShadow: "0 .5rem 1rem rgba(43,42,53,.075)" }}>
                                            <Box sx={{ display: "flex", justifyContent: "center", p: 2, }}>
                                                <img src={item.image} />
                                            </Box>
                                            <Box sx={{ textAlign: "center", p: 1.2, color: "rgb(55 65 112)", fontSize: "20px" }}>
                                                {item.name}
                                            </Box>
                                            <Divider />
                                            <Box sx={{ display: "flex", justifyContent: "flex-end", paddingRight: 1.5, mt: 2, mb: 2 }}>
                                                <Button onClick={() => navigate('/details', { state: item })} sx={{ color: "rgb(57 67 114)", textTransform: "none", borderColor: "#f2f6f8", backgroundColor: "#f3f8fa", }} variant='outlined'>View<ArrowForwardIcon sx={{ paddingLeft: 1 }} />
                                                </Button>
                                            </Box>
                                        </Card>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>

                <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4, fontSize: "32px", fontWeight: 700, color: "rgb(55 65 112)" }}>Latest snippets</Box>
                <Grid container spacing={5} sx={{ display: "flex", justifyContent: "center", marginTop: "4px" }} >
                    {
                        latest.map((item) => {
                            return (
                                <>
                                    <Grid item md={2.5}>
                                        <Card sx={{ height: "400px", boxShadow: "0 .5rem 1rem rgba(43,42,53,.075)" }}>
                                            <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                                                <img src={item.image} />
                                            </Box>
                                            <Box sx={{ textAlign: "center", p: 1.2, color: "rgb(55 65 112)", fontSize: "20px" }}>
                                                {item.name}
                                            </Box>
                                            <Divider />
                                            <Box sx={{ display: "flex", justifyContent: "flex-end", paddingRight: 1.5, mt: 2 }}>
                                                <Button onClick={() => navigate('/details', { state: item })} sx={{ color: "rgb(57 67 114)", textTransform: "none", borderColor: "#f2f6f8", backgroundColor: "#f3f8fa" }} variant='outlined'>View<ArrowForwardIcon sx={{ paddingLeft: 1 }} /></Button>
                                            </Box>
                                        </Card>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>

                <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4, fontSize: "32px", fontWeight: 700, color: "rgb(55 65 112)" }}>Popular snippets</Box>
                <Grid container spacing={5} sx={{ display: "flex", justifyContent: "center", marginTop: "4px" }} >
                    {
                        popular.map((item) => {
                            return (
                                <>
                                    <Grid item md={2.5}>
                                        <Card sx={{ height: "400px", boxShadow: "0 .5rem 1rem rgba(43,42,53,.075)" }}>
                                            <Box sx={{ display: "flex", justifyContent: "center", p: 2, }}>
                                                <img src={item.image} />
                                            </Box>
                                            <Box sx={{ textAlign: "center", p: 1.2, color: "rgb(55 65 112)", fontSize: "20px" }}>
                                                {item.name}
                                            </Box>
                                            <Divider />
                                            <Box sx={{ display: "flex", justifyContent: "flex-end", paddingRight: 1.5, mt: 2 }}>
                                                <Button onClick={() => navigate('/details', { state: item })} sx={{ color: "rgb(57 67 114)", textTransform: "none", borderColor: "#f2f6f8", backgroundColor: "#f3f8fa" }} variant='outlined'>View<ArrowForwardIcon sx={{ paddingLeft: 1 }} /></Button>
                                            </Box>
                                        </Card>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>

                <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4, fontSize: "32px", fontWeight: 700, color: "rgb(55 65 112)" }}>Other snippets</Box>
                <Grid container spacing={5} sx={{ display: "flex", justifyContent: "center", marginTop: "4px" }} >
                    {
                        other.map((item) => {
                            return (
                                <>
                                    <Grid item md={2.5}>
                                        <Card sx={{ height: "400px", boxShadow: "0 .5rem 1rem rgba(43,42,53,.075)" }}>
                                            <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
                                                <img src={item.image} />
                                            </Box>
                                            <Box sx={{ textAlign: "center", p: 1.2, color: "rgb(55 65 112)", fontSize: "20px" }}>
                                                {item.name}
                                            </Box>
                                            <Divider />
                                            <Box sx={{ display: "flex", justifyContent: "flex-end", paddingRight: 1.5, mt: 2 }}>
                                                <Button onClick={() => navigate('/details', { state: item })} sx={{ color: "rgb(57 67 114)", textTransform: "none", borderColor: "#f2f6f8", backgroundColor: "#f3f8fa" }} variant='outlined'>View<ArrowForwardIcon sx={{ paddingLeft: 1 }} /></Button>
                                            </Box>
                                        </Card>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>

                <Box sx={{ marginTop: 5, display: "flex", justifyContent: "center" }}>
                    <Button sx={{ marginRight: 3, backgroundColor: "#86d4f5", fontWeight: 700, textTransform: 'none' }} variant='contained'>View All Snippets</Button>
                    <Button sx={{ backgroundColor: "#86d4f5", fontWeight: 700, textTransform: 'none' }} variant='contained'>Browse All Tags</Button>
                </Box>
                <Footer />
            </Box>
        </>
    );
};

export default Home;