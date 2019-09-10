// import React, { Component } from 'react';

// import Order from '../../components/Order/Order';
// import axios from '../../axios-orders';
// import classes from './Orders.css';
// import withError from '../../hoc/withErrorHandler/withErrorHandler';

// class Orders extends Component {

//     state = {
//         orders: []
//     }

//     componentDidMount() {
//         axios.get('/orders.json')
//             .then( response => {
//                 console.log(response)
//             });
//     }


//     render () {
//         return (
//             <div className={classes.Orders}>
//                 <Order />
//             </div>
//         );
//     }
// }

// export default withError(Orders, axios);