// Initialize customer object
var customer = {
  name: "",
  balance: 0
};

// Form submission
var form = document.getElementById("bankForm");
var balanceDiv = document.getElementById("balanceInfo");
var errorDiv = document.getElementById("errorMessages");

form.onsubmit = function(event) {
  event.preventDefault(); // prevent default form submission
  errorDiv.innerHTML = ""; // clear previous errors

  var name = document.getElementById("customerName").value.trim();
  var transType = document.getElementById("transType").value;
  var amount = document.getElementById("amount").value.trim();
  var amountNum = parseFloat(amount);

  var errors = [];

  // Validate customer name
  if (!name) {
    errors.push("Customer name is required.");
  }

  // Validate amount
  if (!amount) {
    errors.push("Amount is required.");
  } else if (isNaN(amountNum) || amountNum <= 0) {
    errors.push("Enter a valid amount greater than 0.");
  }

  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");
    return;
  }

  // Set customer name if not already set
  if (!customer.name) {
    customer.name = name;
  }

  // Perform transaction
  if (transType === "deposit") {
    customer.balance += amountNum;
  } else if (transType === "withdraw") {
    if (amountNum > customer.balance) {
      errorDiv.innerHTML = "Insufficient balance for withdrawal.";
      return;
    }
    customer.balance -= amountNum;
  }

  // Display balance
  balanceDiv.innerHTML = "Customer: " + customer.name + "<br>" +
                         "Transaction: " + transType + "<br>" +
                         "Updated Balance: ₹" + customer.balance.toFixed(2);

  // Clear amount input
  document.getElementById("amount").value = "";
};
