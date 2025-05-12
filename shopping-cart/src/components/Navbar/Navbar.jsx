import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import Badge from '@mui/material/Badge';

const Navbar = () => {

    const {cartLength} = useContext(CartContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Shopping Cart
                    </Typography>
                    <Button component={NavLink} to="/" color="inherit">Products</Button>
                    <Button component={NavLink} to="/login" color="inherit">Login</Button>
                    <Button component={NavLink} to="/cart" color="inherit">
                        <Badge badgeContent={cartLength} color="secondary">
                             <LocalMallIcon />
                        </Badge>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
