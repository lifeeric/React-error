import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Contact from './ContactData/ContactData';
import { Route } from 'react-router-dom';

class Checkout extends Component {

    state = {
        ingredients: null,
        price: 0
    }

    componentWillMount() {
        const searchQuery = new URLSearchParams(this.props.location.search);

        const queryTransformed = {};

        for( const key of searchQuery.entries() )
        {
            if(key[0] === 'price')
                this.setState({price: +key[1]})
            else
                queryTransformed[key[0]] = +key[1]
        }
        console.log(queryTransformed)

        this.setState({ ingredients: queryTransformed});
        console.log('11')

    }

    cancelledHandler = () => {
        this.props.history.goBack();
        console.log('12')

    }

    continuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
        console.log('13')

    }

    render () {
        console.log(this.props.match.path + '/contact-data')
        console.log('14')

        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    cancelled={this.cancelledHandler}
                    continued={this.continuedHandler} />
                <Route path={this.props.match.path + '/contact-data'} render={() => <Contact 
                    {...this.props}
                    ingredients={this.state.ingredients} 
                    price={this.state.price} />} />
            </div>
        );
    }
}

export default Checkout;