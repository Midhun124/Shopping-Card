
// the function to add the product to the cart when the user clicks on it . if we change tis in you preffer.
function cartButton() {
  const cartButtonElement = document.querySelector('.cart-button');

  if (cartButtonElement.innerText === 'Add to cart') {
    cartButtonElement.innerText = 'Added to cart';
    cartButtonElement.style.backgroundColor = 'white'; 
    cartButtonElement.style.color = 'black'; 
    cartButtonElement.style.borderWidth = '1px';
    cartButtonElement.style.borderColor = 'black';
  } else {
    cartButtonElement.innerText = 'Add to cart';
    cartButtonElement.style.backgroundColor = ''; 
    cartButtonElement.style.color = '';
    cartButtonElement.style.borderWidth = '';
    cartButtonElement.style.borderColor = '';
  }
  const textConfirm = document.getElementById('confirm');
  if (textConfirm.innerText === '') {
    textConfirm.innerText = 'You added product to the cart';
  } else {
    textConfirm.innerText = '';
  }
}