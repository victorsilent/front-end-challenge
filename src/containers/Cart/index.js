import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Cart extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <Link to="/about/5">About page</Link>  
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { message: state.example }
}

export default connect(mapStateToProps, null)(Cart);
