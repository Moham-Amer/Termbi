import React, { useEffect } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from '../hooks/cart';

export default function PlaceOrderPage() {
    const navigate = useNavigate();
    const { cartList, loadCart } = useCart();

    useEffect(() => {
        loadCart();
    }, [loadCart]);

    const subtotal = cartList.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    );

    const handleConfirmOrder = () => {
        // In a real app, you might clear the cart and send order to backend
        navigate('/cart/confirmation');
    };

    if (!cartList || cartList.length === 0) {
        return (
            <Box sx={{ background: "#fff", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Typography fontWeight={600} fontSize={24} color="#222" mb={3}>
                    No items to order
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        background: "#DB4444",
                        color: "#fff",
                        fontWeight: 600,
                        px: 5,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: "none",
                        fontSize: 18,
                        "&:hover": { background: "#b83232" },
                    }}
                    onClick={() => navigate("/")}
                >
                    Shop Now
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ background: "#fff", minHeight: "100vh", py: 5, color: "#222" }}>
            <Box sx={{ maxWidth: 800, mx: "auto", px: 2 }}>
                <Typography fontWeight={700} fontSize={34} mb={3} textAlign="center">
                    Confirm Your Order
                </Typography>
                <Box sx={{ mb: 4 }}>
                    {cartList.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                                gap: 2,
                            }}
                        >
                            <img
                                src={`/public/${item.img}`}
                                alt={item.title}
                                style={{
                                    width: 60,
                                    height: 60,
                                    objectFit: "contain",
                                    borderRadius: 8,
                                }}
                            />
                            <Box sx={{ flex: 1 }}>
                                <Typography fontWeight={500}>{item.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Quantity: {item.quantity || 1}
                                </Typography>
                            </Box>
                            <Typography fontWeight={500}>${item.price * (item.quantity || 1)}</Typography>
                        </Box>
                    ))}
                </Box>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                    <Typography fontWeight={600}>Total:</Typography>
                    <Typography fontWeight={700}>${subtotal}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                    <Button
                        variant="outlined"
                        onClick={() => navigate('/cart/checkout')}
                        sx={{
                            px: 4,
                            py: 1.5,
                            borderRadius: 1,
                            fontWeight: 500,
                            textTransform: "none",
                        }}
                    >
                        Back to Checkout
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleConfirmOrder}
                        sx={{
                            background: "#DB4444",
                            color: "#fff",
                            px: 4,
                            py: 1.5,
                            borderRadius: 1,
                            fontWeight: 500,
                            textTransform: "none",
                            "&:hover": { background: "#b83232" },
                        }}
                    >
                        Confirm Order
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}