import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircle from '@mui/icons-material/CheckCircle';

export default function OrderConfirmationPage() {
    const navigate = useNavigate();

    return (
        <Box sx={{ background: "#fff", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <CheckCircle sx={{ fontSize: 80, color: "#4CAF50", mb: 3 }} />
            <Typography fontWeight={700} fontSize={36} color="#222" mb={2}>
                Order Confirmed!
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={4} maxWidth={400}>
                Thank you for your order. Your food will be prepared and delivered soon. You will receive a confirmation email shortly.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                    variant="outlined"
                    onClick={() => navigate('/')}
                    sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 1,
                        fontWeight: 500,
                        textTransform: "none",
                    }}
                >
                    Continue Shopping
                </Button>
                <Button
                    variant="contained"
                    onClick={() => navigate('/profile')}
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
                    View Orders
                </Button>
            </Box>
        </Box>
    );
}