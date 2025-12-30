import React, { useEffect } from "react";
import { Box, Typography, Button, IconButton, TextField } from "@mui/material";
import { useCart } from '../hooks/cart';
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom"
export default function CartPage() {
      const navigate = useNavigate();
    const {
        cartList,
        removeFromCart,
        updateCartItemQuantity,
        loadCart,
    } = useCart();

    useEffect(() => {
        loadCart();
    }, [loadCart]);

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    const handleQuantity = (id, qty) => {
        updateCartItemQuantity(id, qty);
    };

    const subtotal = cartList.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    );

    //         </Button>
    //       </Box>
    //     );
    //   }

    return (
        <Box sx={{ background: "#fff", minHeight: "100vh", py: 5, color: "#222" }}>
            <Box sx={{ maxWidth: 1100, mx: "auto", px: 2 }}>
                <Typography fontSize={14} color="#DB4444" sx={{ mb: 2 }}>
                    You must log in before proceeding to checkout.
                </Typography>
                {/* Cart Table */}
                <Box sx={{ mb: 4 }}>
                    {/* <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              bgcolor: "#fff",
              borderRadius: 2,
              boxShadow: "0 2px 12px #f3f3f3",
              px: 4,
              py: 2,
              fontWeight: 600,
              fontSize: 17,
              mb: 2,
            }}
          >
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </Box> */}

                  
                    {cartList.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                                alignItems: "center",
                                bgcolor: "#fff",
                                borderRadius: 2,
                                boxShadow: "0 2px 12px #f3f3f3",
                                px: 4,
                                py: 2,
                                mb: 2,
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <IconButton
                                    size="small"
                                    sx={{
                                        background: "#DB4444",
                                        color: "#fff",
                                        width: 28,
                                        height: 28,
                                        mr: 1,
                                        "&:hover": { background: "#b83232" },
                                    }}
                                    onClick={() => handleRemove(item.id)}
                                >
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{
                                        width: 60,
                                        height: 60,
                                        objectFit: "contain",
                                        borderRadius: 8,
                                    }}
                                />
                                <Typography fontWeight={500}>{item.title}</Typography>
                            </Box>
                            <Typography fontWeight={500}>${item.price}</Typography>
                            <TextField
                                type="number"
                                value={item.quantity || 1}
                                onChange={(e) =>
                                    handleQuantity(item.id, Number(e.target.value))
                                }
                                inputProps={{
                                    min: 1,
                                    style: { textAlign: "center" },
                                }}
                                size="small"
                                sx={{
                                    width: 70,
                                    bgcolor: "#fafafa",
                                    borderRadius: 1,
                                    "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button": {
                                        WebkitAppearance: "auto",
                                    },
                                }}
                            />
                            <Typography fontWeight={500}>
                                ${item.price * (item.quantity || 1)}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                {/* Cart Actions */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 4,
                        flexWrap: "wrap",
                        gap: 2,
                    }}
                >
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: "#222",
                            color: "#222",
                            px: 4,
                            py: 1,
                            borderRadius: 1,
                            fontWeight: 500,
                            textTransform: "none",
                        }}
                    >
                        Return To Shop
                    </Button>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: "#222",
                            color: "#222",
                            px: 4,
                            py: 1,
                            borderRadius: 1,
                            fontWeight: 500,
                            textTransform: "none",
                        }}
                        onClick={loadCart}
                    >
                        Update Cart
                    </Button>
                </Box>
                {/* Coupon and Cart Total */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 4,
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                    }}
                >
                      {/* Removed sample CartItem */}
              
                    {/* Cart Total */}
                    <Box
                        sx={{
                            minWidth: 320,
                            border: "1.5px solid #222",
                            borderRadius: 2,
                            bgcolor: "#fff",
                            p: 3,
                            mt: { xs: 4, md: 0 },
                        }}
                    >
                        <Typography fontWeight={600} fontSize={20} mb={2}>
                            Cart Total
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mb: 1.5,
                            }}
                        >
                            <Typography>Subtotal:</Typography>
                            <Typography fontWeight={500}>${subtotal}</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mb: 1.5,
                            }}
                        >
                            <Typography>Shipping:</Typography>
                            <Typography fontWeight={500}>Free</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mb: 3,
                            }}
                        >
                            <Typography fontWeight={600}>Total:</Typography>
                            <Typography fontWeight={700}>${subtotal}</Typography>
                        </Box>
                        <Button
                              onClick={() => navigate("/cart/checkout")}
                            variant="contained"
                            fullWidth
                            sx={{
                                background: "#DB4444",
                                color: "#fff",
                                borderRadius: 1,
                                fontWeight: 500,
                                fontSize: 16,
                                py: 1.5,
                                textTransform: "none",
                                "&:hover": { background: "#b83232" },
                            }}
                        >
                            Proceed to checkout
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}