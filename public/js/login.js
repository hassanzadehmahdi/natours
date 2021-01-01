//import axios from 'axios';
const axios = require('axios');
const showAlert = require('./alerts');

exports.login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
      withCredentials: true,
    });

    if (res.data.status === 'success') {
      showAlert.showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert.showAlert('error', err.response.data.message);
  }
};

exports.logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout',
    });
    if (res.data.status === 'success') location.reload(true);
  } catch (err) {
    showAlert('error', 'Error logging out! Try again.');
  }
};
