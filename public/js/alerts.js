exports.hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

// type is 'success' or 'error'
exports.showAlert = (type, message) => {
  this.hideAlert();
  const markup = `<div class="alert alert--${type}">${message}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(this.hideAlert, 5000);
};
