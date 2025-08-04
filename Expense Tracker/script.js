document.getElementById("expenseForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const expenseName = document.getElementById("expenseName").value;
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);

    if (expenseName && !isNaN(expenseAmount)) {
        addExpense(expenseName, expenseAmount);
        document.getElementById("expenseForm").reset();
    }
});

function addExpense(name, amount) {
    const expenseList = document.getElementById("expenseList");
    const totalExpense = document.getElementById("totalExpense");

    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>${name}</span> <span>$${amount.toFixed(2)}</span>`;
    expenseList.appendChild(listItem);

    const currentTotal = parseFloat(totalExpense.innerText);
    totalExpense.innerText = (currentTotal + amount).toFixed(2);
}