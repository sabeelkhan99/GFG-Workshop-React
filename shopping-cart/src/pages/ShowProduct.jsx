import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/material';

const ShowProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => {
                setProduct(res.data);
            })
    }, []);

    if (!product) {
        return <p>Loading .........</p>
    }

    return (
        <Box>
            <Card sx={{ mt: 15,mr: 10, maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 340 }}
                    image={product.image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        ${product.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {product.description}
                    </Typography>
                    <Rating readOnly name="size-small" defaultValue={product.rating.rate} size="small" />
                </CardContent>
            </Card>
        </Box>

    )
}

export default ShowProduct
