const axios = require('axios');
const showAlert = require('./alerts');

// type is either 'password' or 'data'
exports.updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
        : 'http://127.0.0.1:3000/api/v1/users/updateMe';
    const res = await axios({
      method: 'PATCH',
      url,
      data,
      withCredentials: true,
    });

    if (res.data.status === 'success') {
      showAlert.showAlert(
        'success',
        `${type.toUpperCase()} updated successfully!`
      );
    }
  } catch (err) {
    showAlert.showAlert('error', err.response.data.message);
  }
};
