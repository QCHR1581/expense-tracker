// Get necessary elements for modal opening and closing
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");
const openModalButton = document.querySelector("#plus-button");
const closeModalButton = document.querySelector("#close-button");

// Get audio files
const audioOpen = new Audio();
audioOpen.src = "/src/openClick.mp3";
audioOpen.volume = 0.5;
const audioClose = new Audio();
audioClose.src = "/src/closeClick.mp3";
audioClose.volume = 0.5;

// Opens modal with sound
openModalButton.addEventListener("click", removeHiddenClass = () => {
    overlay.classList.remove("zero");
    modal.classList.remove("zero");
    audioOpen.play();
})

// Closes modal with sound
closeModalButton.addEventListener("click", closeWindow = () => {
    overlay.classList.add("zero");
    modal.classList.add("zero");
    audioClose.play();
})


// Gets necessary elements for creating ul 
const statements = document.querySelector("#statements");
const types = document.querySelector("#types");
const date = document.querySelector("#date");
const amount = document.querySelector("#amount");


// Converts formated string (eg. 1.000,50 €) to float (eg. 1000.50)
function toFloat(num) {
    dotPos = num.indexOf('.');
    commaPos = num.indexOf(',');

    if (dotPos < 0)
        dotPos = 0;

    if (commaPos < 0)
        commaPos = 0;

    if ((dotPos > commaPos) && dotPos)
        sep = dotPos;
    else {
        if ((commaPos > dotPos) && commaPos)
            sep = commaPos;
        else
            sep = false;
    }

    if (sep == false)
        return parseFloat(num.replace(/[^\d]/g, ""));

    return parseFloat(
        num.substr(0, sep).replace(/[^\d]/g, "") + '.' + 
        num.substr(sep+1, num.length).replace(/[^0-9]/, "")
    );

}

// Get inputs
getStatement = () => {
    console.log(statements.options[statements.selectedIndex].text);
};

getTypes = () => {
    console.log(types.options[types.selectedIndex].text)
};

getDate = () => {
    console.log(date.value);
    
}

displayStatements = () => {

    // Calculates amount for income
    if (statements.options[statements.selectedIndex].text === "Income") {
       let currentValue = toFloat(document.querySelector("#income").textContent) || 0;
       let newValue = parseFloat(amount.value);
       let sum = currentValue + newValue;
       let formatSum = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(sum);
       document.querySelector("#income").textContent = formatSum; 

    // Sound for added income
       const incomeAudio = new Audio;
       incomeAudio.src = "/src/addedIncome.wav";
       incomeAudio.volume = 0.5;
       incomeAudio.play();
       
    // Calculates amount for expense
    } else if (statements.options[statements.selectedIndex].text === "Expense") {
       let currentValue = toFloat(document.querySelector("#expenses").textContent) || 0;
       let newValue = parseFloat(amount.value);
       let sum = currentValue + newValue;
       let formatSum = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(sum);
       document.querySelector("#expenses").textContent = formatSum; 

    // Sound for added expense
       const expemseAudio = new Audio;
       expemseAudio.src = "/src/addedExpense.mp3";
       expemseAudio.volume = 0.5;
       expemseAudio.play();
    }
}

displayBalance = () => {

    // Calculates amount of balance
    let income = toFloat(document.querySelector("#income").textContent) || 0;
    let expense = toFloat(document.querySelector("#expenses").textContent) || 0;
    let balance = income - expense;
    let formatBalance = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(balance);
    document.querySelector("#balance").textContent = formatBalance; 

    // If balance is less than 0 --> text = red
    if (balance < 0) {
        balanceText = document.querySelector("#balance");
        balanceText.classList.add("text-red-400");

    // If balance is greater than 0 --> remove red text
    } else if (balance >= 0) {
        balanceText = document.querySelector("#balance");
        balanceText.classList.remove("text-red-400");
    }
}

addListElement = () => {
    // Creates li-element
    let entry = document.createElement('li');

    // Creates br-element
    let linebreak = document.createElement("br");
    list.appendChild(linebreak);


    // Creates button-element
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa", "fa-trash", "text-red-400", "p-1");
    deleteButton.addEventListener("click", deleteListelement = () => {
        entry.parentNode.removeChild(entry);
        list.removeChild(linebreak); 
        if (classList = "text-red-400") {
            // console.log("red class");
            sum -= amount.value;
        }
    })

    // Adds selected elements to ul
    let formatStatement = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount.value);
    entry.append(document.createTextNode(types.options[types.selectedIndex].text + " " + date.value + " " + formatStatement), deleteButton);
    list.appendChild(entry);

    // Adds layout for ul-elements
    entry.classList.add("py-1", "border-blue-200", "border-2", "font-semibold", "pl-2", "rounded-lg", "flex", "flex-row", "justify-between");

    // Statement = Income --> text = green , Statement = Expense --> text = red
    if (statements.options[statements.selectedIndex].text === "Income") {
        entry.classList.add("text-green-400");
    } else {
        entry.classList.add("text-red-400");
    }

}



// Gets Add-Button
const addButton = document.querySelector("#add-Button");

// When Add-Button gets clicked --> display inputs
addButton.addEventListener("click", displayInputs= () => {

    // If no input for date and amount --> border = red
    if (!date.value && !amount.value) {
        alert("Please enter date and amount!");
        date.classList.add("border-4", "border-red-400");
        amount.classList.add("border-4", "border-red-400");

     // If no input for date --> border = red
    } else if (!date.value) {
        alert("Please enter date!");
        date.classList.add("border-4", "border-red-400");

     // If no input for amount --> border = red
    } else if (!amount.value) {
        alert("Please enter amount!");
        amount.classList.add("border-4", "border-red-400");

    // Displays inputs
    } else {
        getStatement();
        getTypes();
        getDate();
        displayStatements();
        displayBalance();
        addListElement();
        // Removes red border around date and amount
        date.classList.remove("border-4", "border-red-400");
        amount.classList.remove("border-4", "border-red-400");
    } 
})
