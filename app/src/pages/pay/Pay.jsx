import "./Pay.scss"
import React, { useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";


const stripePromise = loadStripe("pk_test_51MsTF4IHwnfD6ivdDqAzb9ft1rnxjIfEuLeKIMX22BN36eY5xFHXxyk69JbxOr8WeBqSJ7z2yt4MejnY1kSVsCF700vHw0emaN");

const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");
  
    const { id } = useParams();
  
    useEffect(() => {
      const makeRequest = async () => {
        try {
          const res = await newRequest.post(
            `/orders/create-payment-intent/${id}`
          );
          setClientSecret(res.data.clientSecret);
        } catch (err) {
          console.log(err);
        }
      };
      makeRequest();
    }, []);
    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };
      return <div className="pay">
      {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
    </div>;
  }; 
export default Pay