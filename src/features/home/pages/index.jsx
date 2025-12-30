import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Packages from '../components/card';
import { useNavigate } from 'react-router-dom';


export function HomePage() {
   const navigate = useNavigate();
    const theme = useTheme();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundImage: "url('/hero.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    justifyContent: "flex-start",
                }}
            >
                <Box sx={{ paddingLeft: '150px', maxWidth: '700px' }}>
                    <Grid container spacing={0} alignItems="start">
                        {/* Left Side - Text Content */}
                        <Grid item xs={12} md={12}>
                            <Box sx={{ color: '#fff', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '48px' }}>
                                <Typography
                                    variant="h3"
                                    component="h1"
                                    sx={{
                                        fontWeight: 700,
                                        lineHeight: 1.2,
                                        margin: 0,
                                    }}
                                >
                                    Get your own restaurant website
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: '16px',
                                        lineHeight: 1.6,
                                        opacity: 0.9,
                                        margin: 0,
                                    }}
                                >
                                    Termbi's booking solution for restaurants makes a lot of your daily business tasks much easier, so that you can fully focus on your guests.
                                </Typography>

                                <Button
                                onClick={() => {
                                    navigate('/resturants');
                                }}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#FF3D3D',
                                        color: '#fff',
                                        padding: '12px 40px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        width: 300,
                                        '&:hover': {
                                            backgroundColor: '#E63030',
                                        },
                                    }}
                                >
                                    Try Now
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* New Section - Add your content here */}
            <Box
                sx={{
                    padding: '50px 50px 50px',
                    minHeight: '400px',
                    display: 'flex', flexDirection: 'start',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >


                <Container maxWidth="lg" sx={{
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    alignItems: "center",
                    display: 'flex', flexDirection: 'column',
                    padding: '50px 50px 50px',
                    position: 'relative'
                }}  >
                    <img src="/whytrembi1.png" height="35" style={{
                        position: "absolute",
                        top: 0,
                        height: "100px",
                        left: 0,
                        zIndex: -1,
                    }} />

                    <img src="/whytrembi2.png" height="35" style={{
                        position: "absolute",
                        // width: "100px",
                        height: "100px",
                        bottom: 0,
                        right: 0,
                        zIndex: -1
                    }} />

                    <Box
                        sx={{
                            display: 'flex', flexDirection: 'Row', gap: '15px'
                        }}
                    >
                        <Typography variant="h4" component="h1" sx={{ marginBottom: '24px', color: theme.palette.primary.main }}>
                            Why
                        </Typography>
                        <img src="/whytrembi3.png" height="35" style={{
                            paddingTop: 10
                        }} />



                    </Box>

                    <Typography variant="body1" sx={{ width: "80%" }}>
                        Termbi's booking tool allows guests to check table availability in real time and then book a table with just a few clicks. Even outside of your business hours. Your effort: Low. Your benefit: Up to 30% more bookings.
                        With Termbi, you are instantly listed on over 100 national and international platforms.
                    </Typography>
                </Container>
            </Box>


            <Box
                sx={{
                    padding: '50px 50px 50px',
                    minHeight: '400px',
                    display: 'flex', flexDirection: 'start',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >


                <Container maxWidth="lg" sx={{
                    alignItems: "center",
                    display: 'flex', flexDirection: 'column',
                    position: 'relative'
                }}  >


                    <Box
                        sx={{
                            display: 'flex', flexDirection: 'Row', gap: '15px'
                        }}
                    >
                        <Typography variant="h5" cxomponent="h1" sx={{ marginBottom: '24px', color: theme.palette.text.main }}>
                            restaurants already trust in
                        </Typography>
                        <img src="/whytrembi3.png" height="27" style={{
                            paddingTop: 10
                        }} />



                    </Box>


                    <Box
                        sx={{
                            display: 'flex', flexDirection: 'Row', gap: '50px', flexWrap: 'wrap'
                        }}
                    >

                        <img src="public/Resturants/rest1.png" height="150" style={{
                            paddingTop: 10
                        }} />
                        <img src="public/Resturants/rest2.png" height="150" style={{
                            paddingTop: 10
                        }} />
                        <img src="public/Resturants/rest3.png" height="150" style={{
                            paddingTop: 10
                        }} />
                        <img src="public/Resturants/rest4.png" height="150" style={{
                            paddingTop: 10
                        }} />
                        <img src="public/Resturants/rest5.png" height="150" style={{
                            paddingTop: 10
                        }} />



                    </Box>



                </Container>
            </Box>


            <Box
                sx={{
                    padding: '50px 50px 50px',
                    minHeight: '400px',
                    display: 'flex', flexDirection: 'start',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >


                <Container maxWidth="lg" sx={{
                    alignItems: "center",
                    display: 'flex', flexDirection: 'column',
                    position: 'relative'
                }}  >


                    <Box
                        sx={{
                            display: 'flex', flexDirection: 'Row', gap: '10px',
                            marginBottom: '15px'
                        }}
                    >
                        <Typography variant="h5" cxomponent="h1" sx={{ marginBottom: '24px', color: theme.palette.primary.main, fontWeight: 700 }}>
                            Pricing
                        </Typography>
                        <Typography variant="h5" cxomponent="h1" sx={{ marginBottom: '24px', color: theme.palette.text.main, fontWeight: 700 }}>
                            Packages
                        </Typography>



                    </Box>


                    <Box
                        sx={{
                            display: 'flex', flexDirection: 'Row', gap: '50px'
                            , flexWrap: 'wrap'
                        }}
                    >

                        <Packages features={['Services', 'Support', 'Analytics', 'Custom Domain', 'Daily Backups']} price='0' planName='Free' />
                        <Packages features={['Services', 'Support', 'Analytics', 'Custom Domain', 'Daily Backups']} price='45' planName='Premium' />
                        <Packages features={['Services', 'Support', 'Analytics', 'Custom Domain', 'Daily Backups']} price='75' planName='Enterprise' />



                    </Box>


                    <Box
                        sx={{
                            display: 'flex', flexDirection: 'Row', gap: '15px',
                            marginBottom: '15px',
                            paddingTop: '25px',
                            justifyContent: 'end',
                            alignItems: 'start'
                        }}
                    >
                        <img src="/whytrembi3.png" height="35" style={{
                            paddingTop: 10
                        }} />
                        <Typography variant="h4" cxomponent="h1" sx={{ marginBottom: '24px', color: theme.palette.text.main, fontWeight: 700 }}>
                            Features
                        </Typography>



                    </Box>


                    <Box
                        sx={{
                            display: 'flex', flexDirection: 'grid', gap: '30px'
                            , flexWrap: 'wrap'
                        }}
                    >

                        <Box sx={{ color:theme.palette.text.primary, zIndex: 2, display: 'flex', flexDirection: 'column', gap: '30px',maxWidth:'400px' }}>
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                    margin: 0,
                                }}
                            >
                                Dashboard
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: '16px',
                                    lineHeight: 1.6,
                                    opacity: 0.9,
                                    margin: 0,
                                    color:theme.palette.text.secondary
                                }}
                            >
                                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.  </Typography>

                        </Box>


                        <Box sx={{ maxWidth: "300" }}>
                            <img src="public/dashboard.png" height="auto" width="90%"></img>
                        </Box>


                    </Box>







                </Container>
            </Box>




        </Box>
    );
}
