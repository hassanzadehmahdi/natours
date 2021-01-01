//import axios from 'axios';
const axios = require('axios');
const showAlert = require('./alerts');

const stripe = Stripe(
  'pk_test_51I1rsaCkoaAccFoBgErUh2rQ7BWugnnYDrxMT8AbVYOwu3yyzYgLrAp1UutJfAjv4Zrjnz0r3DUbXdCcHolQSIgC00OeBtkcQF'
);

exports.bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert.showAlert('error', err);
  }
};
