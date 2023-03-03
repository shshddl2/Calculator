

class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement    //input 태그에 속한 속성값들을 가져옴.
        this.displayContent = ''    //DisplayContent 에, 계산에 필요한 숫자와 연산기호를 누적시킴.
        this.clear()    //생성자로 초기화할 때 계산기 TEXT에 0이 바로 뜸.
    }
    appendNumber(number) {            
        this.displayContent += number //displayContent에 숫자를 누적시키는 함수
    }
    appendOperator(operator) {         
        this.displayContent += operator//displayContent에 연산기호를 누적시키는 함수
    }

    updateDisplay() {
        this.displayElement.value = this.displayContent 
    }

    clear() {
        this.displayContent = ''
        this.displayElement.value = 0
    }

    compute() {
        this.displayContent = eval(this.displayContent
            .replace('\u00D7', '*')
            .replace('\u00F7', '/')
        ) //"\u00D7" 는 ×, "\u00F7"는 ÷를 의미
    }
}
const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('input')
const calculator = new Calculator(displayElement)     //절차지향이니 변수 생성과 클래스 생성 순서를 꼭 지켜야 함.


buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':
                console.log('operator')
                calculator.appendOperator(button.innerText)
                calculator.updateDisplay()
                break
            case 'ac':
                console.log('ac')
                calculator.clear()
                break
            case 'equals':
                console.log('equals')
                calculator.compute()
                calculator.updateDisplay()
                break
            default:
                console.log('number')
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })
})
