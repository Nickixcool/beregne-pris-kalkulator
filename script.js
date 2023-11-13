let el = (id) => {
    return document.getElementById(id);
}

let price = el("price");
let qControlActivitiesText = el("q-control-activities");
let licensingCostsText = el("licensing-costs");

let calculate = () => {

    /*Input Quantities*/
    let incomingInvoicesNumber = parseInt(el("incoming-invoices").value) || 0;
    let outgoingInvoicesNumber = parseInt(el("outgoing-invoices").value) || 0;
    let creditCardShoppingNumber = parseInt(el("credit-card-shopping").value) || 0;
    let numberOfEmployeesNumber = parseInt(el("number-employees").value) || 0;
    let foreignTransactionsNumber = parseInt(el("foreign-transactions").value) || 0;

    /*Conditional Values*/
    let cashRegister = !el("cash-register").checked;
    let vippsPaymentTerminal = !el("payment-terminal").checked;
    let intercompanyAccounting = !el("intercompany-accounting").checked;
    let projectCostHandling = !el("cost-handling").checked;

    //Costs

    let incomingInvoicesCost = 16;
    let incomingInvoicesSubtotal = incomingInvoicesNumber * incomingInvoicesCost;

    let outgoingInvoicesCost = 35;
    let outgoingInvoicesSubtotal = outgoingInvoicesNumber * outgoingInvoicesCost;

    let creditCardShoppingCost = 10;
    let creditCardShippingSubtotal = creditCardShoppingNumber * creditCardShoppingCost;

    let cashRegisterCost = 300 + (incomingInvoicesSubtotal + outgoingInvoicesSubtotal) * 0.6;
    let cashRegisterSubtotal = cashRegister ? cashRegisterCost : 0;

    let vippsPaymentTerminalCost = (incomingInvoicesSubtotal + outgoingInvoicesSubtotal) * 0.6;
    let vippsPaymentTerminalSubtotal = vippsPaymentTerminal ? vippsPaymentTerminalCost : 0;

    let numberOfEmployeesCost = 100;
    let numberOfEmployeesSubtotal = numberOfEmployeesNumber * numberOfEmployeesCost;

    let foreignTransactionsCost = 20;
    let foreignTransactionsSubtotal = foreignTransactionsNumber * foreignTransactionsCost;

    let intercompanyAccountingCost = 310 + (incomingInvoicesSubtotal + outgoingInvoicesSubtotal) * 0.2;
    let intercompanyAccountingSubtotal = intercompanyAccounting ? intercompanyAccountingCost : 0;

    let costhandlingCost = 310 + (incomingInvoicesSubtotal + outgoingInvoicesSubtotal) * 0.25;
    let costhandlingSubtotal = projectCostHandling ? costhandlingCost : 0;

    let licensingCosts = 250 + (incomingInvoicesNumber + outgoingInvoicesNumber + creditCardShoppingNumber) * 3.6 + (cashRegisterCost + vippsPaymentTerminalCost) * 0.2;

    let qualityControlActivitiesCost = 250 + (incomingInvoicesNumber + outgoingInvoicesNumber + creditCardShoppingNumber) * 3.6 + (cashRegisterCost + vippsPaymentTerminalCost) * 0;

    let total = incomingInvoicesSubtotal +
        outgoingInvoicesSubtotal +
        creditCardShippingSubtotal +
        cashRegisterSubtotal +
        vippsPaymentTerminalSubtotal +
        numberOfEmployeesSubtotal +
        foreignTransactionsSubtotal +
        intercompanyAccountingSubtotal +
        costhandlingSubtotal +
        licensingCosts +
        qualityControlActivitiesCost;

    qControlActivitiesText.innerText = Math.round(qualityControlActivitiesCost) + "kr";
    licensingCostsText.innerText = Math.round(licensingCosts) + "kr";
    price.innerText = Math.round(total) + "kr";

    el("incoming-invoices").value = incomingInvoicesNumber;
    el("outgoing-invoices").value = outgoingInvoicesNumber;
    el("credit-card-shopping").value = creditCardShoppingNumber;
    el("number-employees").value = numberOfEmployeesNumber;
    el("foreign-transactions").value = foreignTransactionsNumber;

}

[].forEach.call(document.querySelectorAll("input"), function(input) {
    input.addEventListener("change", calculate, false);
    input.addEventListener("input", calculate, false);
});


let resetCalc = () => {
    /*Input Fields*/
    let incomingInvoicesInput = el("incoming-invoices");
    let outgoingInvoicesInput = el("outgoing-invoices");
    let creditCardShoppingInput = el("credit-card-shopping");
    let numberOfEmployeesInput = el("number-employees");
    let foreignTransactionsInput = el("foreign-transactions");

    /*Conditional Fields*/
    let cashRegisterInput = el("cash-register");
    let vippsPaymentTerminalInput = el("payment-terminal");
    let intercompanyAccountingInput = el("intercompany-accounting");
    let projectCostHandlingInput = el("cost-handling");

    incomingInvoicesInput.value = 0;
    outgoingInvoicesInput.value = 0;
    creditCardShoppingInput.value = 0;
    numberOfEmployeesInput.value = 0;
    foreignTransactionsInput.value = 0;

    cashRegisterInput.checked = true;
    vippsPaymentTerminalInput.checked = true;
    intercompanyAccountingInput.checked = true;
    projectCostHandlingInput.checked = true;

    calculate();
}


let button = el("nullstille");
button.addEventListener("click", resetCalc);

