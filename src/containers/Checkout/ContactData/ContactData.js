import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';


class ContactData extends Component {

    state = {
        loading: false
    }

    orderHandler = (event) => {
        
        event.preventDefault();

        // e.preventDefault();
        this.setState( { loading: true } );

        const order = {
            // ingredients: this.props.ingredients,
            // price: this.props.price,
            // // customer: {
            // //     name: 'Max Schwarzmüller',
            // //     address: {
            // //         street: 'Teststreet 1',
            // //         zipCode: '41351',
            // //         country: 'Germany'
            // //     },
            // //     email: 'test@test.com'
            // // },
            // deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');

            } )
            .catch( error => {
                this.setState( { loading: false } );
                this.props.history.push('/');

            } );
            console.log('9')

    }

    render() {
        console.log(this.state);

        let form = <Spinner />
        
        if( !this.state.loading )
        {
            form = (
                <form>
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="text" placeholder="Enter Your Name" />
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>
            );
        }
        console.log('10')


        return (
            <div className={classes.Contact_data}>
                <h1> Your Contact Data !</h1>
                {form}
            </div>
        );
    }
}

export default ContactData;