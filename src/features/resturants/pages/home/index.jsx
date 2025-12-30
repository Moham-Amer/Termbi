import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Modal from '@mui/material/Modal';
import { useCart } from '../../../cart/hooks/cart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useGetCategories, useGetProducts } from '../../services/queries';



export function ResturantHomePage() {
    const theme = useTheme();
    const [viewMode, setViewMode] = React.useState('cards');
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const { addToCart } = useCart();

    const { data: categories = [] } = useGetCategories();
    const { data: products = [] } = useGetProducts();

    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
    };

    const handleAddToCart = (item) => {
        addToCart(item);
        handleClose();
    };

    
    const categoryNames = categories.map(cat => cat.name);

    
    const filteredProducts = selectedCategory 
        ? products.filter(product => product.category_id === selectedCategory.id)
        : products;

    
    const menuItems = filteredProducts.map(product => ({
        id: product.id,
        title: product.name,
        description: product.description,
        price: product.price,
        img: product.image || 'Dishes/dish1.png',
    }));



    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>


            <Box sx={{
                display: 'flex', flexDirection: 'row', gap: '48px', justifyContent: 'space-between', flexWrap: 'wrap'

            }}>


                <Box sx={{
                    color: '#fff', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '48px', paddingLeft: '10%',
                    paddingTop: '2%'
                }}>
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            lineHeight: 1.2,
                            margin: 0,
                            color: theme.palette.text.primary,

                        }}
                    >
                        Best <span style={{

                            color: theme.palette.primary.main,
                        }}> Food</span>, Best <span style={{

                            color: theme.palette.primary.main,
                        }}>Services</span>!
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '30px',
                            lineHeight: 1.6,
                            opacity: 0.9,
                            margin: 0,
                            color: theme.palette.text.primary
                        }}
                    >
                        Sandwiches, Fries & Burger with best taste awaits you. </Typography>


                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '20px',
                            lineHeight: 1.6,
                            opacity: 0.9,
                            margin: 0,
                            color: '#157CD8',
                            textDecoration: 'underline',
                        }}
                    >
                        <img src='location.png' height='25px' style={{
                            marginRight: '15px',
                        }}>
                        </img>
                        2255 Nw 2nd Ave, Miami, FL 37214
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '20px',
                            lineHeight: 1.6,
                            opacity: 0.9,
                            margin: 0,
                            color: theme.palette.text.secondary,
                        }}
                    >
                        Rating:
                        <img src='rating.png' height='25px' style={{
                            marginRight: '15px',
                        }}>
                        </img>
                        5.0
                    </Typography>


                    <Button
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
                        Reserve a table
                    </Button>
                </Box>



                <img height='800px' src='/Resturants/ResturantHero.png'>
                </img>
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

                    alignItems: "center",
                    display: 'flex', flexDirection: 'column',
                    padding: '50px 50px 50px',
                    position: 'relative'
                }}  >


                    <Container maxWidth="lg" sx={{
                        alignItems: "center",
                        display: 'flex', flexDirection: 'column',
                        padding: '50px 50px 50px',
                        position: 'relative'
                    }}  >

                        <Typography variant="h3" component="h1" sx={{ marginBottom: '24px', fontWeight: '700', color: theme.palette.text.primary }}>
                            <span style={{
                                color: theme.palette.primary.main
                            }}  > About  </span>  us
                        </Typography>


                        <Typography variant="body1" sx={{ width: "100%", fontWeight: '400', color: theme.palette.text.primary, fontSize: '26px', textAlign: 'center' }}>
                            Welcome to <span style={{
                                color: theme.palette.primary.main
                            }}  > Termbi  </span> , where culinary excellence meets warm hospitality.<br />
                            Our journey began with a passion for creating unforgettable dining experiences.<br />
                            At<span style={{
                                color: theme.palette.primary.main
                            }}  > Termbi  </span>, we believe in using the freshest ingredients to craft dishes that delight the senses.
                        </Typography>
                    </Container>


                    <Container maxWidth="lg" sx={{
                        alignItems: "center",
                        display: 'flex', flexDirection: 'column',
                        padding: '50px 50px 50px',
                        position: 'relative'
                    }}  >

                        <Typography variant="h3" component="h1" sx={{ marginBottom: '24px', fontWeight: '700', color: theme.palette.text.primary }}>
                            Our
                            <span style={{
                                color: theme.palette.primary.main
                            }}  > Menu  </span>
                        </Typography>


                        <Typography variant="body1" sx={{ width: "100%", fontWeight: '400', color: theme.palette.text.primary, fontSize: '26px', textAlign: 'center' }}>
                            Explore our special, tasteful dishes on the Restaurant Menu!    </Typography>
                    </Container>
                    <Box>
                    </Box>
                </Container>
            </Box>



            <Box
                sx={{
                    display: 'flex', flexDirection: 'Row', gap: '45px', justifyContent: 'center'
                }}  >
                {categoryNames.map((cat) => (
                    <Typography
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        style={{
                            fontWeight: 500,
                            fontSize: 22,
                            cursor: "pointer",
                            borderBottom: selectedCategory?.id === cat.id ? "2px solid #DFDFDF" : "1px solid #DFDFDF",
                            padding: "1em",
                            margin: "0 -1em",
                        }}
                    >
                        {cat}
                        <span style={{ float: "right" }}>
                            {cat.includes("Fashion") ? "›" : ""}
                        </span>
                    </Typography>
                ))}
            </Box>



            <Box
                sx={{
                    display: 'flex', flexDirection: 'Row', gap: '45px', justifyContent: 'center', padding: '30px'
                }}  >
                <Button variant="outlined" onClick={() => setViewMode('cards')} sx={{
                    color: viewMode === 'cards' ? theme.palette.primary.main : theme.palette.text.primary,
                    padding: '15px',
                    border: viewMode === 'cards' ? `2px solid ${theme.palette.primary.main}` : '1px solid #DFDFDF',
                    fontWeight: viewMode === 'cards' ? 700 : 500
                }}>View as Cards</Button>
                <Button variant="outlined" onClick={() => setViewMode('list')} sx={{
                    color: viewMode === 'list' ? theme.palette.primary.main : theme.palette.text.primary,
                    padding: '15px',
                    border: viewMode === 'list' ? `2px solid ${theme.palette.primary.main}` : '1px solid #DFDFDF',
                    fontWeight: viewMode === 'list' ? 700 : 500
                }}>View as List</Button>
                <div style={{
                    borderLeft: "1px solid #DFDFDF",
                    height: "35px",
                    margin: "0 10px",
                }} />
                <Button variant="outlined" sx={{
                    color: theme.palette.text.primary,
                    padding: '15px',
                    border: '1px solid #DFDFDF'
                }}>Sort by Name</Button>
                <Button variant="outlined" sx={{
                    color: theme.palette.text.primary,
                    padding: '15px',
                    border: '1px solid #DFDFDF'
                }}>Sort by Price</Button>
                <div style={{
                    borderLeft: "1px solid #DFDFDF",
                    height: "35px",
                    margin: "0 10px",
                }} />
                <Button variant="outlined" sx={{
                    color: theme.palette.text.primary,
                    padding: '10px 40px 10px 40px',
                    border: '1px solid #DFDFDF'
                }}>Download Menu </Button>

            </Box>

            
            {viewMode === 'list' ? (
                <Box sx={{ padding: '50px', maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {menuItems.map((item) => (
                        <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #DFDFDF', pb: 2 }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                    {item.description}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 2 }}>
                                <Typography sx={{ color: theme.palette.primary.main, fontWeight: 700, fontSize: '18px', minWidth: '60px' }}>
                                    {item.price}$
                                </Typography>
                                <IconButton size="small" sx={{ color: theme.palette.primary.main }}>
                                    <img src='/public/cart.png' height='20px' alt="cart" />
                                </IconButton>
                            </Box>
                        </Box>
                    ))}
                </Box>
            ) : (
                <Box sx={{ padding: '50px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <Grid container spacing={3} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                        {menuItems.map((item) => (
                            <Grid item xs={12} sm={6} key={item.id}>
                                <Card 
                                    sx={{ display: 'flex', height: '100%', boxShadow: 'none', border: '1px solid #DFDFDF', borderRadius: '8px', cursor: 'pointer' }}
                                    onClick={() => handleOpen(item)}
                                >
                                    {/* Content */}
                                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: 2, justifyContent: 'space-between' }}>
                                        <Box>
                                            <Typography component="div" variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '13px' }}>
                                                {item.description}
                                            </Typography>
                                        </Box>
                                        
                                        {/* Price & Cart */}
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
                                            <Typography sx={{ color: theme.palette.primary.main, fontWeight: 700, fontSize: '18px' }}>
                                                {item.price}$
                                            </Typography>
                                            <IconButton size="small" sx={{ color: theme.palette.primary.main }} onClick={(e) => { e.stopPropagation(); addToCart(item); }}>
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    {/* Image */}
                                    <CardMedia
                                        component="img"
                                        sx={{ width: '40%', objectFit: 'cover' }}
                                        image={`/public/${item.img}`}
                                        alt={item.title}
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}



            {/* Product Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="product-modal-title"
                aria-describedby="product-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}>
                    {selectedItem && (
                        <>
                            <CardMedia
                                component="img"
                                sx={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 1, mb: 2 }}
                                image={selectedItem.img || `/public/Dishes/dish1.png`}
                                alt={selectedItem.title}
                            />
                            <Typography id="product-modal-title" variant="h6" component="h2" sx={{ mb: 1 }}>
                                {selectedItem.title}
                            </Typography>
                            <Typography id="product-modal-description" sx={{ mb: 2 }}>
                                {selectedItem.description}
                            </Typography>
                            <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 700, mb: 2 }}>
                                ${selectedItem.price}
                            </Typography>
                            <Button 
                                variant="contained" 
                                fullWidth 
                                onClick={() => handleAddToCart(selectedItem)}
                                sx={{ background: theme.palette.primary.main }}
                            >
                                Add to Cart
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
            












        </Box >
    );
}
