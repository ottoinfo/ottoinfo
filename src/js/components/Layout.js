import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

export default class Layout extends React.Component {
  render() {
    return(
      <div>
        <Header location={location}/>
        { this.props.children }
        <Footer />
      </div>
    );
  }
}