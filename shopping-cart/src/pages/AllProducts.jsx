import { useEffect, useState } from "react";
import axios from 'axios';
import ProductList from "../components/ProductList/ProductList";

const AllProducts = () => {

    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    // This will be executed for each state change-whatsoever 
    useEffect(() => {
        // console.log('Inside useEffect with no dependency array')
    });

    // This will be executed just after the first render
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(() => res.data);
            })
            .catch((err) => {
                console.log(err);
            })

        // fetch('https://fakestoreapi.com/products')
        //     .then((res) => res.json())
        //     .then((data) => setProducts(data));
    }, []);

    // This will be executed if count changes
    useEffect(() => {
        // console.log('Inside useEffect with count as the dependency array')
    }, [count]);


    return (
        <div>
            {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
            {/* <h2>Count: {count}</h2> */}
            <h1>All Products Page</h1>
            <ProductList products={products} />
        </div>
    )
}

export default AllProducts;
