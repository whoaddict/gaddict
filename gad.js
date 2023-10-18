
  
const amountInput = document.getElementById("amount");
const exchangeRateInput = document.getElementById("exchangeRate");
const resultDiv = document.getElementById("result");

amountInput.addEventListener("input", updateFormattedNumber);
exchangeRateInput.addEventListener("input", calculateExchange);

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateFormattedNumber() {
    const rawAmount = amountInput.value.replace(/,/g, "");
    const amount = parseFloat(rawAmount);

    if (!isNaN(amount)) {
        const formattedAmount = formatNumberWithCommas(amount);
        amountInput.value = formattedAmount;

        let textColor = "";
        if (amount > 99999999) {
            textColor = "#ff7100";
        } else if (amount > 9999999) {
            textColor = "#ff14ff";
        } else if (amount > 999999) {
            textColor = "#005afc";
        } else if (amount > 99999) {
            textColor = "#05f00d";
        } else {
            textColor = "#d4d4d4";
        }


        amountInput.style.color = textColor;

        calculateExchange(); // เรียกฟังก์ชันคำนวณผลลัพธ์
    } else {
        amountInput.style.color = "#d4d4d4";
        resultDiv.textContent = ""; // เคลียร์ผลลัพธ์เมื่อไม่มีข้อมูล
    }
}

function calculateExchange() {
    const amount = parseFloat(amountInput.value.replace(/,/g, ""));
    const exchangeRate = parseFloat(exchangeRateInput.value);

    if (!isNaN(amount) && !isNaN(exchangeRate)) {
        let realAmount = exchangeRate / amount;

        // Deduct taxes
        const tax1Percent = 0.01; // 1%
        const tax7Percent = 0.07; // 7%
        const tax5Percent = 0.05; // 5%
        const tax3Percent = 0.03; // 3%

        // Calculate taxed amounts
        const afterTaxZm = realAmount * (1 - tax1Percent);
        const afterTaxDeal = realAmount * (1 - tax7Percent);
        const afterTaxMyShop = realAmount * (1 - tax5Percent);
        const afterTaxMegashop = realAmount * (1 - tax3Percent);

        // Add "M" to the amounts and create an HTML table for the results
        const table = `
            <table>
                <tr class="desja55">
                    <th>Description</th>
                    <th>จำนวนที่ได้รับ (M)</th>
                </tr>
                <tr>
                    <td>No Tax</td>
                    <td>${realAmount.toFixed(3)} M</td>
                </tr>
                <tr>
                    <td>ZM Tax 1% </td>
                    <td>${afterTaxZm.toFixed(3)} M</td>
                </tr>
                <tr>
                    <td>Exchange Tax 7% </td>
                    <td>${afterTaxDeal.toFixed(3)} M</td>
                </tr>
                <tr>
                    <td> Premium Shop Tax 5%</td>
                    <td>${afterTaxMyShop.toFixed(3)} M</td>
                </tr>
                <tr>
                    <td> Megashop Tax 3%</td>
                    <td>${afterTaxMegashop.toFixed(3)} M</td>
                </tr>
            </table>
        `;

        resultDiv.innerHTML = table; // Insert the table into the resultDiv
    } else {
        resultDiv.textContent = "";
    }
}


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

const copyResultButton = document.getElementById("copyResult");
const resetAllButton = document.getElementById("resetAll");

copyResultButton.addEventListener("click", copyResult);
resetAllButton.addEventListener("click", resetAll);

function addexchangeRate(exchangeRateToAdd) {
    const currentexchangeRate = parseFloat(exchangeRateInput.value.replace(/,/g, ""));
    if (!isNaN(currentexchangeRate)) {
        const newexchangeRate = currentexchangeRate + exchangeRateToAdd;
        exchangeRateInput.value = formatNumberWithCommas(newexchangeRate);
        updateFormattedNumber();
    }
}



function copyResult() {
    const resultText = resultDiv.textContent;
    if (resultText) {
        navigator.clipboard.writeText(resultText);
        alert("Copy Success");
    }
}

function resetAll() {
    amountInput.value = "";
    exchangeRateInput.value = "";
    resultDiv.textContent = "";
    amountInput.style.color = "#d4d4d4";
}


