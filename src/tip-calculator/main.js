const billInputContainer = document.querySelector('.input-wrapper')
const peopleInputContainer = document.querySelectorAll('.input-wrapper')[1]
const tipPercentagesButtons = document.querySelectorAll('.tip-amount-btn')
const tipFormElement = document.querySelector('.tip-form')
const customTipButton = document.getElementById('custom-value-input')
const tipSpanElement = document.querySelector(".tip")
const totalSpanElement = document.querySelector(".bill")
const resetButtonElement = document.querySelector('.reset-btn')

let selectedTip;
let billTotal;
let numberOfPerson;

billInputContainer.addEventListener('click', () => {

    const inputElement = billInputContainer.childNodes[3]
    inputElement.value = ""
    inputElement.focus()

})


billInputContainer.addEventListener('keyup', () => {

    const inputElement = billInputContainer.childNodes[3]
    
    if(inputElement.value != 0) customTipButton.disabled = false

    if(inputElement.value == 0) customTipButton.disabled = true
    
    billTotal = inputElement.value

    calculateTotals()
})


peopleInputContainer.addEventListener('click', () => {
    const inputElement =  peopleInputContainer.childNodes[3]

    inputElement.value = ""
    inputElement.focus()
})

peopleInputContainer.addEventListener('keyup', () => {
    const invalidMessage = document.querySelector(".invalid-message")

    const inputElement =  peopleInputContainer.childNodes[3]
    const valueTyped = inputElement.value

    if ( valueTyped === "0" ) {
        peopleInputContainer.classList += " invalid-input"
        invalidMessage.style.visibility = 'visible'
    } 

    else {
        peopleInputContainer.classList = "input-wrapper"
        invalidMessage.style.visibility = 'hidden'

        numberOfPerson = valueTyped
    }

    calculateTotals()
    
})

tipFormElement.addEventListener('submit', e => e.preventDefault())


tipPercentagesButtons.forEach( button => {

    button.addEventListener('click', () => {
        const searchIfAlreadyHaveSelected = document.querySelectorAll('.selected') 
        
        if(searchIfAlreadyHaveSelected.length > 0) {
            searchIfAlreadyHaveSelected[0].classList = "tip-amount-btn"

            button.classList += " selected"
            selectedTip = button.name;   
        } 

        button.classList += " selected"
        selectedTip = button.name;  
        
        calculateTotals()
    })
} )

customTipButton.addEventListener('click', () => {
    customTipButton.value = ""
})

customTipButton.addEventListener('keyup', (e) => {
    const typedValue = customTipButton.value    
    customTipButton.setAttribute('name', typedValue)

    selectedTip = typedValue
})

tipSpanElement.addEventListener('DOMSubtreeModified', () => {
    if(tipSpanElement.textContent === "$0.00" && totalSpanElement.textContent === "$0.00") {
        resetButtonElement.disabled = true
    } else {
        resetButtonElement.disabled = false
    }

})

resetButtonElement.addEventListener('click', () => {
    if (resetButtonElement.disabled) return 

    tipSpanElement.textContent = "$0.00"
    totalSpanElement.textContent = "$0.00"

})

const calculateTotals = () => {
    if(!billTotal || !selectedTip || !numberOfPerson) return console.log("Sem todos os dados...")

    billTotal = parseFloat(billTotal)
    selectedTip = parseInt(selectedTip)
    numberOfPerson = parseInt(numberOfPerson)

    console.log(numberOfPerson) 

    const totalPerPerson = (billTotal + (billTotal * (selectedTip/100))) / numberOfPerson
    const totalTipPerPerson = (billTotal * (selectedTip/100)) / numberOfPerson

    tipSpanElement.textContent = `$${totalTipPerPerson.toFixed(2)}`
    totalSpanElement.textContent = `$${totalPerPerson.toFixed(2)}`

}

