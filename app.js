/* ------------------------------
    Getting value from input field
 ------------------------------ */
function getValue(id) {
return parseFloat(document.getElementById(id).value);
}
document.getElementById("calculate-btn").addEventListener("click", function () {
let totalIncome = getValue("total-income");
let foodCost = getValue("food-cost");
let rentCost = getValue("rent-cost");
let clothesCost = getValue("clothes-cost");

/* ---------------------
    input validation area
    ---------------------- */
if (totalIncome < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0) {
    alert("Please enter positive numbers");
} else if (totalIncome < foodCost + rentCost + clothesCost) {
    alert("Your total income is less than the sum of your expenses");
} else if (totalIncome == foodCost + rentCost + clothesCost) {
    alert("You have spent all of your money");
} else if (!totalIncome || !foodCost || !rentCost || !clothesCost) {
    alert("Please enter all fields");
} else {
/* -------------------------
    Total Expense calculation
    ------------------------- */
    let totalExpenses = (foodCost + rentCost + clothesCost).toFixed(2);

/*   -----------------------------------------------------  
    after expenses remaining balance and set value on DOM
    ----------------------------------------------------- */
    let totalSavings = totalIncome - totalExpenses;
    let expenses = document.getElementById("total-expenses");
    expenses.innerText = totalExpenses;
    let savedBalance = document.getElementById("total-balance");
    savedBalance.innerText = totalSavings.toFixed(2);

/* -----------------------------------
    savings button add event listener
    ----------------------------------- */
    document.getElementById("save-btn").addEventListener("click", function () {
/*   ------------------------------------------------
    calling function to get percentage value
    ------------------------------------------------ */
    let savingsValue = getValue("savings-percent");
/* --------------------
    validation for input
    -------------------- */
    if (savingsValue < 0) {
        alert(
        "Saving percentage cannot be negative. Please enter a positive number"
        );
    } else if (!savingsValue) {
        alert("Please enter a saving percentage.");
    } else {
/* ----------------------------
    calculate the savings amount
    ----------------------------*/
        let savingsPercent = savingsValue / 100;
        let savingsAmount = totalSavings * savingsPercent;
/* -----------------------------------------------------------
    validation for savings amount is greater than total savings
    ----------------------------------------------------------- */
        if (savingsAmount > totalSavings) {
        alert(
            "You have exceeded your savings goal. Please enter a lower percentage."
        );
        } else {
/* ----------------
    set value to DOM
    ---------------- */
        document.getElementById("saved").innerText = savingsAmount.toFixed(2);
        document.getElementById("remain").innerText = (
            totalSavings - savingsAmount
        ).toFixed(2);
        }
    }
    });
}
});
