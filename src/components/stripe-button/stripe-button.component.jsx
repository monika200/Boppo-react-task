import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IzK2ySHpwB3GMbmcmebqfYmv5ApsL3Z94wI7oOPduDcZ41xjyfV7Jg8I8PK6KEgWucKq2V3JFk3wnGeF7bhtSRx00HjogW47t";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
           label='Pay Now'
           name='Mstore'
           billingAddress
           shippingAddress
           image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.trustpilot.com%2Freview%2Fmstore.co.uk&psig=AOvVaw3drIDO4rZ3y_I5GUbiydrs&ust=1623074837398000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIC45PW1g_ECFQAAAAAdAAAAABAD"
           description={`Your total is $${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;