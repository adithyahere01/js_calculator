class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        this.clear()
    }

    delete(){}

    // user clicks on 2 or more numbers
    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    // user clicks on any operands + - * %
    chooseOperation(operand){}

   //take our values inside compute a single value 
    compute(){}

   //update values inside of our output
    updateDisplay(){
       this.currentOperandTextElement.textContent = this.currentOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


//number buttons function
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent)
        calculator.updateDisplay()
    })
})