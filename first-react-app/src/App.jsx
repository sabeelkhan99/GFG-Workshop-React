import './App.css';
import Product from './components/Product/Product';

function App() {

    const products = [
        {
            title: "Macbook Pro",
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
            price: 100,
            description: "This is a small description about a macbook"
        },
        {
            title: "Macbook Air",
            image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
            price: 200,
            description: "This is a small description about a macbook"
        },
        {
            title: "Mac Mini",
            image: "https://images.unsplash.com/photo-1717632201254-19d1ce73dfb9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjJTIwbWluaXxlbnwwfHwwfHx8MA%3D%3D",
            price: 300,
            description: "This is a small description about a macbook"
        }
    ]

    return <section>
        {products.map((product, index) => {
            return <Product
                key={index}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
            />
        })}
    </section>
}

export default App
