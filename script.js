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

// Gets user inputs
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
    if (statements.options[statements.selectedIndex].text === "Income") {
       let currentValue = parseFloat(document.querySelector("#income").textContent) || 0;
       console.log(currentValue);
       let newValue = parseFloat(amount.value);
       console.log(newValue);

       let sum = currentValue + newValue;
       let formatSum = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(sum);
       document.querySelector("#income").textContent = formatSum; 

       const incomeAudio = new Audio;
       incomeAudio.src = "/src/addedIncome.wav";
       incomeAudio.volume = 0.5;
       incomeAudio.play();
       

    } else if (statements.options[statements.selectedIndex].text === "Expense") {
       let currentValue = parseFloat(document.querySelector("#expenses").textContent) || 0;
       let newValue = parseFloat(amount.value);
       let sum = currentValue + newValue;
       let formatSum = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(sum);
       document.querySelector("#expenses").textContent = formatSum; 

       const expemseAudio = new Audio;
       expemseAudio.src = "/src/addedExpense.mp3";
       expemseAudio.volume = 0.5;
       expemseAudio.play();
    }

displayBalance = () => {
    

    

    let formatBalance = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(balance);
    document.querySelector("#balance").textContent = formatBalance; 

    if (balance < 0) {
        balanceText = document.querySelector("#balance");
        balanceText.classList.add("text-red-400");
    }
  

}

}

// Gets Add-Button
const addButton = document.querySelector("#add-Button");

// When Add-Button gets clicked, checks for input and displays it
addButton.addEventListener("click", submitInputs = () => {

    if (!date.value && !amount.value) {
        alert("Please enter date and amount!");
        date.classList.add("border-4", "border-red-400");
        amount.classList.add("border-4", "border-red-400");

    } else if (!date.value) {
        alert("Please enter date!");
        date.classList.add("border-4", "border-red-400");

    } else if (!amount.value) {
        alert("Please enter amount!");
        amount.classList.add("border-4", "border-red-400");

    } else {
        getStatement();
        getTypes();
        getDate();
        displayStatements();
        displayBalance();
        date.classList.remove("border-4", "border-red-400");
        amount.classList.remove("border-4", "border-red-400");
    } 
})


















