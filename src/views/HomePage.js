import React from 'react';
import Card from '../components/card/Card';
import { connect } from 'react-redux';
import '../stylesheets/listingPage.scss';

 class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    console.log('will receive', props);
  }

  render() {
    console.log('props in home page', this.props.products);
    return (
      <div className='container'>
        {
          this.props.products.map((product, index) => {
            return (
              <div className='col-xs-12 col-sm-6 col-md-4' key={index}>
                <Card className product={product}></Card>
              </div>
            );
          })
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    products: state.products
  }
};

const HomePageContainer = connect(
  mapStateToProps,
  null,
)(HomePage);

export default HomePageContainer;