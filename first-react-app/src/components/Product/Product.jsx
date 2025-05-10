import { useState } from 'react';
import styles from './Product.module.css';

const Product = (props) => {

    const [title, setTitle] = useState(props.title);

    const productClickHandler = () => {
        console.log('clicked');
        setTitle('Anonymous');
    }

    return (
        <figure onClick={productClickHandler} className={styles.product}>
            <img width="300px" src={props.image} alt="" />
            <figcaption>
                <h2>{title }</h2>
                <h3>${ props.price}</h3>
                <p>{ props.description }</p>
                <button>Buy Now</button>
            </figcaption>
        </figure>
    )
}

export default Product;