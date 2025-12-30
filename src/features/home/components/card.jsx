import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import './card.css';

export default function Packages({ features = [],price,planName, children }) {
    const theme = useTheme();
    const featureNodes = (features && features.length > 0)
        ? features.map((f, i) => <CardFeature key={i} text={f} />)
        : (React.Children.count(children) > 0)
            ? React.Children.toArray(children).map((child, i) => {
                if (typeof child === 'string') return <CardFeature key={i} text={child.trim()} />;

                if (React.isValidElement(child)) return <React.Fragment key={i}>{child}</React.Fragment>;
                return null;
            })
            : Array.from({ length: 6 }).map((_, i) => <CardFeature key={i} />);

    return (
        <Card className="main-card-column" sx={{ maxWidth: 370, minWidth: 300, alignItems: 'center', justifyContent: 'center', position: "relative", overflow: 'visible' }}>
            <svg className="package-svg" width="100%" height="auto" viewBox="0 0 407 248" preserveAspectRatio="xMidYMin meet" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 226.778V16C0 7.16345 7.16344 0 16 0H390.741C399.578 0 406.741 7.16344 406.741 16V130.843C359.616 183.35 285.335 224.523 197.682 240.51C125.565 253.663 56.4285 247.572 0 226.778Z" fill="#FFEDED" />
            </svg>


            <CardActionArea>


                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "35px",
                    padding: "30px",
                    position: "relative"
                }}>




                    <Typography className='offer' gutterBottom variant="h5" component="div" sx={{ fontWeight: "700" }}>
                       {planName}
                    </Typography>


                    <Box className='offer' sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "end",
                        gap: "30px"
                    }}>

                        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: "700" }}>
                            ${price}
                        </Typography>

                        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: "700" }}>
                            /month
                        </Typography>

                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "30px",
                        PaddingBottom: "30px",
                        // alignItems: "end",
                        gap: "5px"
                    }}>

                        {featureNodes}

                    </Box>
                    <CardActions>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#FFEDED',
                                color: theme.palette.text.secondary,
                                // padding: '12px 40px',
                                // margin: '15px 0px',
                                fontSize: '16px',
                                fontWeight: 600,
                                textTransform: 'none',
                                width: "100%",
                                // maxwidth:450,
                                '&:hover': {
                                    backgroundColor: '#E63030',
                                    color: ' #fff',
                                },
                            }}
                        >
                            Select Plan
                        </Button>
                    </CardActions>




                </CardContent>
            </CardActionArea>

        </Card>
    );
}


function CardFeature({ text, children }) {
    const content = text ?? (typeof children === 'string' ? children : null) ?? 'Services';
    return (
        <Box className="card-feature-row" sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "15px"
        }}>
            <img src='public/check.png' alt="check" />
            <Typography gutterBottom component="div">
                {content}
            </Typography>
        </Box>
    );
}