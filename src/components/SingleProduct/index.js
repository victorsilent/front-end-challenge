import React from 'react';
import styles from './style.scss';

const SingleProduct = ({ 
    productName, 
    price, 
    onSale, 
    discountPercentage,
    discountPrice, 
    installments, 
    image, 
    arraySizes 
}) =>  (
    <div className={styles.itemContainer} style={{backgroundImage: `url(${image})`}}>
        <div className={styles.wrapperHover}>
            <div className={styles.addToCard}>
                <a href="/#">Adicionar ao Carrinho</a>
                <a href="/#">Visualizar Item</a>
            </div>
        </div>
        <div className={styles.itemInfo}>
            <h1 className={styles.itemTitle}>{productName}</h1>
            <span className={onSale ? styles.muted : styles.itemPrice} style={{textDecoration: onSale ? 'line-through' : 'inherit'}}>{price}</span>
            {onSale && <span className={styles.discountPrice}>{discountPrice}</span>}
            <div>
                {installments}
            </div>
        </div>
    </div>
);
export default SingleProduct;