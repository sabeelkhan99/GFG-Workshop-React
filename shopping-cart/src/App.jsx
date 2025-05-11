import './App.css';
import { Routes, Route } from 'react-router';
import Login from './pages/Login';
import AllProducts from './pages/AllProducts';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Layout from './components/Layout/Layout';
import ShowProduct from './pages/ShowProduct';

function App() {

    return (
        <Layout>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/products' element={<AllProducts />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/register' element={<Register />} />
                <Route path='/products/:productId' element={<ShowProduct />} />
            </Routes>
        </Layout>
    )
}

export default App
