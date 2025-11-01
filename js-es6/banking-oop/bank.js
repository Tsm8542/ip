// Bank Account class
class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) return "Deposit must be greater than zero";
    this.balance += amount;
    return `Deposited ₹${amount}. New Balance: ₹${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0) return "Withdrawal must be greater than zero";
    if (amount > this.balance) return "Insufficient balance!";
    this.balance -= amount;
    return `Withdrew ₹${amount}. Remaining Balance: ₹${this.balance}`;
  }

  getBalance() {
    return `
      Account Holder: ${this.accountHolder} <br>
      Account Number: ${this.accountNumber} <br>
      Balance: ₹${this.balance}
    `;
  }
}

// App logic
let accounts = [];
let accountCounter = 1;

const nameInput = document.getElementById("name");
const initialBalanceInput = document.getElementById("initialBalance");
const createAccountBtn = document.getElementById("createAccount");

const accountSelect = document.getElementById("accountSelect");
const amountInput = document.getElementById("amount");
const depositBtn = document.getElementById("deposit");
const withdrawBtn = document.getElementById("withdraw");
const checkBalanceBtn = document.getElementById("checkBalance");
const accountInfoDiv = document.getElementById("accountInfo");

// Create new account
createAccountBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const balance = parseFloat(initialBalanceInput.value);
  if (!name || isNaN(balance) || balance < 0) {
    alert("Please enter valid name and initial balance");
    return;
  }

  const account = new BankAccount(accountCounter++, name, balance);
  accounts.push(account);

  // Add account to dropdown
  const option = document.createElement("option");
  option.value = account.accountNumber;
  option.text = `${account.accountHolder} (Acc: ${account.accountNumber})`;
  accountSelect.appendChild(option);

  nameInput.value = "";
  initialBalanceInput.value = "";
  alert("Account created successfully!");
});

// Helper to get selected account
function getSelectedAccount() {
  const accNum = parseInt(accountSelect.value);
  return accounts.find(acc => acc.accountNumber === accNum);
}

// Deposit
depositBtn.addEventListener("click", () => {
  const account = getSelectedAccount();
  const amount = parseFloat(amountInput.value);
  if (!account) return alert("Select an account");
  if (isNaN(amount)) return alert("Enter a valid amount");

  accountInfoDiv.innerHTML = account.deposit(amount);
  amountInput.value = "";
});

// Withdraw
withdrawBtn.addEventListener("click", () => {
  const account = getSelectedAccount();
  const amount = parseFloat(amountInput.value);
  if (!account) return alert("Select an account");
  if (isNaN(amount)) return alert("Enter a valid amount");

  accountInfoDiv.innerHTML = account.withdraw(amount);
  amountInput.value = "";
});

// Check Balance
checkBalanceBtn.addEventListener("click", () => {
  const account = getSelectedAccount();
  if (!account) return alert("Select an account");

  accountInfoDiv.innerHTML = account.getBalance();
});
