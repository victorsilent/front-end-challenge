import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleProduct from '../../components/SingleProduct/';

import data from '../../data/products.json';
import styles from './style.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.rowContainer}>
        {data.products.map((item) => (
          <SingleProduct 
            installments={item.installments}
            onSale={item.on_sale} 
            discountPrice={item.actual_price} 
            productName={item.name} image={item.image} 
            price={item.regular_price}></SingleProduct>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { message: state.example }
}

export default connect(mapStateToProps, null)(App);
