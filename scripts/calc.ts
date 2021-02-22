export default function calculation() {
    const selectors = {
        calcContainer: ".js-calc",
        input: "[data-field]",
        resultContainer: "[data-result]",
        resultElement: "[data-result-sum]"
    }

    const averageSalary = 574.47;
    const FSZN = averageSalary * 0.01;
    const calcContainer = document.querySelector(selectors.calcContainer);
    const input = <HTMLInputElement>calcContainer.querySelector(selectors.input);
    const resultContainer = <HTMLElement>calcContainer.querySelector(selectors.resultContainer);
    const resultElement = <HTMLElement>calcContainer.querySelector(selectors.resultElement);
    
    // const result = <HTMLElement>calcContainer.querySelector(selectors.result);


    input.addEventListener('input', function (event) {
        if (input.value !== "") {
            resultContainer.removeAttribute('hidden');
            resultElement.innerText = calculateResult(parseInt(input.value, 10));
        } else {
            resultContainer.setAttribute('hidden', 'true');
            resultElement.innerText = "";
        }
    })


    function calculateResult(sum: number) {
        let resultSum = sum * 1.4;
        return resultSum.toString();
    }
}