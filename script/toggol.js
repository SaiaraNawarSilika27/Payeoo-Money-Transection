// Hide Cashout section at first (if not already hidden)
document.getElementById('Cashout-money').style.display = 'none';
document.getElementById('for-transection').style.display = 'none';

// Show Add Money when that box is clicked
document.getElementById('add-money-div').addEventListener('click', function (event) {
  setTheStyle("Add-money","block");
  setTheStyle("Cashout-money","none");
  setTheStyle('for-transection','none');
});

// Show Cashout when that box is clicked
document.getElementById('cash-out-div').addEventListener('click', function (event) {
  setTheStyle("Add-money","none");
  setTheStyle("Cashout-money","block");
  setTheStyle('for-transection','none');
});
//for tranjection
document.getElementById('transactions-div').addEventListener('click', function (event) {
  setTheStyle("Add-money","none");
  setTheStyle("Cashout-money","none");
  setTheStyle("for-transection","block");
});

