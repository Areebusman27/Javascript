function calculateSavings() {
    // Get input values
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
  
    // Calculate savings
    const savings = income - expenses;
  
    // Display results
    document.getElementById("incomeResult").textContent = "Rs" + income.toFixed(2);
    document.getElementById("expensesResult").textContent = "Rs" + expenses.toFixed(2);
    document.getElementById("savingsResult").textContent = "Rs" + savings.toFixed(2);
  
    // Determine profit or loss
    const profitLossElement = document.getElementById("profitLoss");
    if (savings > 0) {
      profitLossElement.textContent = "You are making a profit.";
      profitLossElement.style.color = "green";
    } else if (savings < 0) {
      profitLossElement.textContent = "You are incurring a loss.";
      profitLossElement.style.color = "red";
    } else {
      profitLossElement.textContent = "Your income equals your expenses.";
      profitLossElement.style.color = "black";
    }
  }
  