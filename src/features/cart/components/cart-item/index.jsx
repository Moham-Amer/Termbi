import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
    const theme = useTheme();

    const handleIncrease = () => {
        onUpdateQuantity(item.id, (item.quantity || 1) + 1);
    };

    const handleDecrease = () => {
        if ((item.quantity || 1) > 1) {
            onUpdateQuantity(item.id, (item.quantity || 1) - 1);
        }
    };

    const handleRemove = () => {
        onRemove(item.id);
    };

    return (
        <Card sx={{ display: 'flex', height: '100%', boxShadow: 'none', border: '1px solid #DFDFDF', borderRadius: '8px' }}>
           
              {/* Image */}
            <CardMedia
                component="img"
                sx={{ width: '10%', objectFit: 'cover' }}
                image={`/public/${item.img}`}
                alt={item.title}
            />
            {/* Content */}
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: 2, justifyContent: 'space-between' }}>
                <Box>
                    <Typography component="div" variant="h6" sx={{ fontWeight: 700, mb: 0.5 , display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1}}>
                        {item.title}
                        <IconButton size="small" onClick={handleRemove}>
                            <DeleteIcon sx={{ color: theme.palette.primary.main }} />
                        </IconButton>
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#FFB800', fontSize: '13px' }}>
                       20% off - Limited time offer
                    </Typography>
                </Box>

                {/* Price & Cart */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
                    <Typography sx={{ color: theme.palette.primary.main, fontWeight: 700, fontSize: '18px' }}>
                        {item.price}$
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton size="small" onClick={handleDecrease}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography sx={{ mx: 1 }}>{item.quantity || 1}</Typography>
                        <IconButton size="small" onClick={handleIncrease}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
         
        </Card>
    );
}
