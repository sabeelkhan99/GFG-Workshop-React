import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/material';
import CartContext from '../store/cart-context';

const ShowProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const cartContext = useContext(CartContext);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => {
                setProduct(res.data);
            })
    }, []);

    const addToCartHandler = () => {
        if (!product) {
            return;
        }
        cartContext.addToCart({...product, qty: 1});
    }

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
                    <Box>
                         <Button variant="outlined" size="small" onClick={addToCartHandler}>Add to Cart</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>

    )
}

export default ShowProduct
